#!/usr/bin/env python3

import subprocess
import re
import os
import json

DATA_LABEL_LINE_NR = 1
PTR_LABEL_LINE_NR = 2
BUG_LINE_NR   = 4
KASAN_LINE_NR = 5
FUZZING_LINE_NR = -1

KERNEL = os.environ.get('KERNEL')
SYZKALLER_BIN = os.environ.get('SYZKALLER_BIN')
SYZ_PROG2C = '{}/syz-prog2c'.format(SYZKALLER_BIN)
GCC = 'gcc'

def parse_reports(log, show=None):
    restarts = []
    testcases = []
    if show: show(0, len(log), "Getting reports: ")

    restart = []
    reports = []
    report = []
    testcase = []
    in_restart = False
    in_report = False
    in_testcase = False
    fuzzing = 0

    for idx, line in enumerate(log):
        if ('Decompressing Linux... Parsing ELF... done.' in line or
                'SYZKALLER_LOG_FILE' in line):
            restart = []
            report = []
            reports = []
            testcase = []
            in_report = False
            in_restart = False
            in_testcase = False
            fuzzing = 0
            continue
        if "fuzzing=" in line:
            r = re.search("fuzzing=(?P<fuzzing>.*)", line)
            if not r:
                continue
            fuzzing = int(r['fuzzing'])
        if 'enabling collider' in line:
            continue
        if 'Connection to localhost closed by remote host' in line:
            continue
        if ', executed' in line:
            continue
        if in_testcase:
            if line.rstrip() == '':
                in_testcase = False
            else:
                testcase.append(line.rstrip())
        if 'executing program ' in line:
            testcase = []
            in_testcase = True
        if "^  END REPORT  ^" in line:
            if len(report) != 0:
                report.append('fuzzing={}'.format(fuzzing))
                reports.append(report)
            report = []
            in_report = False
            continue
        if "^  END RESTART  ^" in line:
            testcases.append(testcase)
            restarts.append({ 'info': restart, 'reports': reports })
            restart = []
            reports = []
            testcase = []
            in_restart = False
            in_testcase = False
            continue
        if "v BEGIN REPORT v" in line:
            if show: show(idx, len(log), "Getting reports: ")
            report = []
            in_report = True
            continue
        if "v BEGIN RESTART v" in line:
            in_restart = True
            restart = []
            continue
        if in_report:
            if len(line.rstrip()) == 0:
                continue
            if ' ->' in line:
                continue
            if ' <-' in line:
                continue
            report.append(line)
        if in_restart and not in_report:
            restart.append(line)
    if show: show(len(log), len(log), "Getting reports: ")
    return restarts, testcases

def get_labels(s):
    labels = []
    i = s # info
    while len(i) > 0:
        if '(' not in i or ')' not in i:
            break
        end_index = i.find(")")
        label_str = i[i.find("(")+1:end_index]
        i = i[end_index+1:]
        label = parse_label(label_str)
        if label:
            labels.append(label)
        else:
            print('LABEL COULD NOT GET PARSED: {}'.format(label_str))
    return labels

def parse_label(label):
    label_dict = {}
    if "desc: 'total_arg_nr" in label:
        r = re.search(
                ("label: (?P<label>.*), desc: '"
                    "total_arg_nr: (?P<total_arg_nr>.*), "
                    "syscall_nr: (?P<syscall_nr>.*), "
                    "syscall_arg_nr: (?P<syscall_arg_nr>.*), "
                    "size: (?P<size>.*), syscall_arg_val: (?P<syscall_arg_val>.*)'"),
                label)
        if not r:
            return None
        syscall_dict = r.groupdict()
        # label_dict['label'] = syscall_dict['label']
        label_dict['syscall_nr'] = syscall_dict['syscall_nr']
        label_dict['syscall_arg_nr'] = syscall_dict['syscall_arg_nr']
    elif ("desc: 'attacker-" in label or "desc: 'secret-" in label):
        r = re.search("label: (?P<label>.*), desc: '(?P<desc>.*)'", label)
        if not r:
            return None
        r_dict = r.groupdict()
        desc = r_dict['desc'].replace('-', '_')
        label_dict[desc] = 1
        # label_dict['label'] = r_dict['label']
    return label_dict


def prog2c(testcase_path):
    process = subprocess.Popen([SYZ_PROG2C, '--prog', testcase_path],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE)
    stdout, stderr = process.communicate()
    if process.returncode != 0:
        print(stderr)
        return None
    c_code = stdout.decode("utf-8").splitlines()
    return c_code

def c2bin(c_path, bin_path):
    process = subprocess.Popen([GCC, c_path, '-o', bin_path],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE)
    stdout, stderr = process.communicate()
    if process.returncode != 0:
        print(stderr)

def parse_calltrace(report):
    in_calltrace = False
    leading_characters = 0
    calltrace = []
    for line in report:
        if 'Call Trace:' in line:
            in_calltrace = True
            leading_characters = line.index('all Trace:')
        elif 'RIP: ' in line:
            in_calltrace = False
            break
        elif in_calltrace:
            calltrace_line = line[leading_characters:].replace('dfs$', '')
            calltrace.append(calltrace_line)
    return calltrace

def get_restart_type(restart_type_id):
    restart_type_id = int(restart_type_id)
    if restart_type_id == 0:
        return 'return'
    elif restart_type_id == 1:
        return 'call'
    elif restart_type_id == 2:
        return 'call_undefined'
    elif restart_type_id == 3:
        return 'call_inline_asm'
    elif restart_type_id == 4:
        return 'blacklist'
    elif restart_type_id == 5:
        return 'timer'
    elif restart_type_id == 6:
        return 'exception'
    elif restart_type_id == 6:
        return 'limit_spec'
    elif restart_type_id == 7:
        return 'call_depth'
    elif restart_type_id == 8:
        return 'call_disabled'
    elif restart_type_id == 9:
        return 'writelog_full'
    elif restart_type_id == 10:
        return 'page_fault'
    return '?'

def get_restart_dict(restart):
    info = restart['info']
    if len(info) == 0:
        return None, None
    info_line = info[0]

    r = re.search("\* Restart with current_syscall_nr = (?P<current_syscall_nr>.*), "
            "current_checkpoint_ip = (?P<checkpoint_func_offset>.*)"
            "\((?P<checkpoint_ip>.*)\), "
            "restart_type: (?P<restart_type>.*), "
            "restart_spec_length: (?P<restart_spec_length>.*)", info_line)
    if not r:
        return None, None
    restart_dict = r.groupdict()

    if '(null)' in restart_dict['checkpoint_func_offset']:
        restart_dict['checkpoint_func_offset'] = ''
    restart_dict['restart_spec_length'] = int(restart_dict['restart_spec_length'])
    restart_dict['restart_type'] = get_restart_type(restart_dict['restart_type'])

    calltrace = info[1:]
    calltrace = parse_calltrace(info[1:])

    restart_dict['calltrace'] = calltrace

    restart_stats = {
        "restart_type": restart_dict["restart_type"],
        "restart_spec_length": restart_dict["restart_spec_length"],
    }
    restart_dict.pop('restart_type', None)
    restart_dict.pop('restart_spec_length', None)
    return restart_dict, restart_stats

def get_report_dict(report, ignore_without_taint=True):
    report_line = report[0].rstrip()

    if len(report) <= KASAN_LINE_NR:
        return None, None, None

    data_label_line = report[DATA_LABEL_LINE_NR].rstrip()
    ptr_label_line = report[PTR_LABEL_LINE_NR].rstrip()
    bug_line = report[BUG_LINE_NR].rstrip()
    kasan_line = report[KASAN_LINE_NR].rstrip()
    fuzzing_line = report[FUZZING_LINE_NR].rstrip()

    r = re.search("\*\*\* (?P<report_type>.*) report with data_label = (?P<data_label>.*), "
        "ptr_label = (?P<ptr_label>.*), in_spec = (?P<in_spec>.*), report_spec_length = (?P<report_spec_length>.*)",
        report_line)
    if not r:
        print('WARNING')
        return None, None, None

    search_dict = r.groupdict()

    report_type = search_dict['report_type']
    if report_type == 'CC':
        report_type = 'CACHE'
    elif report_type == 'PC':
        report_type = 'PORT'
    data_label = int(search_dict['data_label'])
    ptr_label = int(search_dict['ptr_label'])
    in_spec = search_dict['in_spec'] == 'true'
    report_spec_length = int(search_dict['report_spec_length'])
    fuzzing = 0

    fuzz = re.search("fuzzing=(?P<fuzzing>.*)", fuzzing_line)
    if not fuzz:
        print('fuzzing not found: {}'.format(fuzzing_line))
    search_dict = fuzz.groupdict()
    fuzzing = int(search_dict['fuzzing'])

    if not in_spec:
        return None, None, None
    if ignore_without_taint and data_label == 0 and ptr_label == 0:
        return None, None, None

    size = '?'
    read_write = '?'
    addr = '?'

    data_labels = []
    ptr_labels = []

    def get_label_info(s):
        return s[s.find("{")+1:s.find("}")]

    data_label_info = get_label_info(data_label_line)
    ptr_label_info = get_label_info(ptr_label_line)

    # parse the labels
    data_labels = get_labels(data_label_info)
    ptr_labels = get_labels(ptr_label_info)

    if report_type == 'SPECTREV2':
        # Spectre V2 BUG
        r = re.search(
            "instr_type = (?P<instr_type>.*), "
            "from_ip = (?P<func_offset>.*)\((?P<ip_addr>.*)\), "
            "target_ip = (?P<target_func_offset>.*)\((?P<target_ip>.*)\)",
            bug_line)
        if not r:
            return None, None, None
        search_dict = r.groupdict()
        report_dict = {
            "report_type": report_type,
            'from_ip': search_dict['ip_addr'],
            'from_func_offset': search_dict['func_offset'] ,
            "target_ip": search_dict['target_ip'],
            'target_func_offset': search_dict['target_func_offset'],
            'instr_type': search_dict['instr_type'],
            'report_spec_length': report_spec_length,
            'fuzzing': fuzzing,
        }
        return report_dict, data_labels, ptr_labels
    else:
        r = re.search(
            "BUG: KASAN: (?P<bug_type>.*) in (?P<func_offset>.*)\((?P<ip_addr>.*)\)",
            bug_line)
        if not r:
            return None, None, None
        search_dict = r.groupdict()
        bug_type = search_dict['bug_type']
        func_offset = search_dict['func_offset']
        ip_addr = search_dict['ip_addr']

        r = re.search(
            "] (?P<is_read>.*) of size (?P<size>.*) at addr (?P<addr>.*) by task",
            kasan_line)
        if r:
            kasan_search_dict = r.groupdict()
            size = kasan_search_dict['size']
            is_read = kasan_search_dict['is_read']
            read_write = is_read if 'read' else 'write'
            addr = '0x{}'.format(kasan_search_dict['addr'])
        else:
            r = re.search(
                "] (?P<is_read>.*) at addr (?P<addr>.*) by task",
                kasan_line)
            if r:
                kasan_search_dict = r.groupdict()
                size = 0
                is_read = kasan_search_dict['is_read']
                read_write = is_read if 'read' else 'write'
                addr = '0x{}'.format(kasan_search_dict['addr'])
            else:
                print("COULDN'T PARSE KASAN LINE")
                return None, None, None

        report_dict = {
            'ip': ip_addr,
            'func_offset': func_offset.replace('dfs$', ''),
            "report_type": report_type,
            'bug_type': bug_type,
            'size': size,
            'read_write': read_write,
            'addr': addr,
            'report_spec_length': report_spec_length,
            'fuzzing': fuzzing,
        }
        return report_dict, data_labels, ptr_labels

    return None, None, None
