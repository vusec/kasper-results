#!/usr/bin/env python3

from os import listdir
from os.path import isfile, join, basename
from argparse import ArgumentParser
from contextlib import redirect_stdout

from utils.syscall_nr import get_syscall
from utils.parse_report import parse_reports, get_restart_dict, get_report_dict
from add_faddr2line import faddr2line, faddr_add_code

def parse_taint_label(taint_label):
    if 'syscall_nr' in taint_label:
        syscall_nr = int(taint_label['syscall_nr'])
        if syscall_nr > 600:
            syscall_nr -= 600
        syscall_arg_nr = int(taint_label['syscall_arg_nr'])
        systemcall = get_syscall(syscall_nr)
        return f'(tainted syscall argument: {syscall_arg_nr+1}, syscall: {systemcall})'
    return list(taint_label.keys())[0]

def get_faddr_lines(func_offset):
    if not func_offset.startswith('dfs'):
        func_offset = 'dfs${}'.format(func_offset)
    faddr_lines = faddr2line(func_offset)
    if not faddr_lines:
        # try without 'dfs$'
        func_offset = func_offset.replace('dfs$', '')
        faddr_lines = faddr2line(func_offset)
    if faddr_lines:
        faddr_add_code(faddr_lines)
        faddr_lines = [f'{line_info[0]} ({line_info[1]}:{line_info[2]})' for line_info in faddr_lines]
    return faddr_lines

def print_report(index, report):
    index += 1
    data_labels = report[1]
    ptr_labels = report[2]
    report = report[0]
    print(f'== Covert channel {index:03d}: {report["report_type"]} ({report["func_offset"]})')

    faddr_lines = get_faddr_lines(report['checkpoint_func_offset'])
    print(f'== Checkpoint Function Offset: ')
    if faddr_lines:
        print("\n".join(faddr_lines))
    else:
        print(report['checkpoint_func_offset'])

    faddr_lines = get_faddr_lines(report['func_offset'])
    print(f'== Function Offset: ')
    if faddr_lines:
        print("\n".join(faddr_lines))
    else:
        print(report['func_offset'])

    calltrace = report['calltrace']
    if calltrace:
        print(f'== Calltrace: ')
        print("".join(calltrace))

    print(f'== Bug type: {report["bug_type"]}')
    print(f'== Read/Write: {report["read_write"]}, Size: {report["size"]}')
    print(f'== [Taint Info] ==')
    print(f'== [Data Labels] ==')
    for taint_label in data_labels:
        taint_label = parse_taint_label(taint_label)
        print(f'= {taint_label}')
    print(f'== [Pointer Labels] ==')
    for taint_label in ptr_labels:
        taint_label = parse_taint_label(taint_label)
        print(f'= {taint_label}')
    print()

def main():
    parser = ArgumentParser()
    parser.add_argument("-p", "--policies-dir", dest="policies_dir",
            help="define the directory with policies logs", metavar="FILE", required=True)
    parser.add_argument("-b", "--baseline", dest="baseline",
            help="define the log to be used as the baseline", metavar="FILE", required=True)
    parser.add_argument("--export-reports", dest="export_reports",
            help="if enabled reports are exported", action='store_true')
    args = parser.parse_args()

    path = args.policies_dir
    policy_files = [join(path, f) for f in listdir(path) if isfile(join(path, f))]

    policies = {}

    for policy_file in policy_files:
        policy = basename(policy_file)
        if not policy.startswith('out-'):
            continue
        policy = policy[4:]
        with open(policy_file, "r", errors='replace') as f:
            log = f.readlines()
        restarts, testcases = parse_reports(log)
        reps = []
        for restart in restarts:
            restart['info'] = [r for r in restart['info'] if len(r) > 1]
            restart_dict = get_restart_dict(restart)[0]
            def filtered_calltrace(c):
                if ('kspecem' in c or 'kasan_' in c or 'dfsan_' in c or 'kdfinit_' in c):
                    return False
                return True
            calltrace = [c for c in restart_dict['calltrace'] if filtered_calltrace(c)]
            reports = [get_report_dict(r, False) for r in restart['reports']]
            reports = [r for r in reports if r[0]['report_type'] == 'CACHE']
            checkpoint_func_offset = {
                "checkpoint_func_offset": restart_dict['checkpoint_func_offset'],
                'calltrace': calltrace,
            }
            reports = [[{**r[0], **checkpoint_func_offset}, r[1], r[2]] for r in reports]
            reps.extend(reports)

        reps_dict = {}
        for rep in reps:
            ip = rep[0]['ip']
            if ip in reps_dict:
                continue
            reps_dict[ip] = rep
        policies[policy] = reps_dict

    baseline_ips = set(policies[args.baseline].keys())
    for policy, v in sorted(policies.items()):
        policies_ips = set(policies[policy].keys())

        TP = baseline_ips.intersection(policies_ips)
        FP = policies_ips - baseline_ips
        FN = baseline_ips - policies_ips

        print('ips-{}:'.format(policy))
        TP_ratio = round((len(TP) / len(baseline_ips)) * 100)
        FP_ratio = round((len(FP) / len(policies_ips)) * 100)
        FN_ratio = round((len(FN) / len(baseline_ips)) * 100)
        print('- TP: {}% ({}/{})'.format(TP_ratio, len(TP), len(baseline_ips)))
        print('- FP: {}% ({}/{})'.format(FP_ratio, len(FP), len(policies_ips)))
        print('- FN: {}% ({}/{})'.format(FN_ratio, len(FN), len(baseline_ips)))

        if args.export_reports:
            if FP:
                with open(join(args.policies_dir, 'FP-reports-{}'.format(policy)), 'w') as f:
                    with redirect_stdout(f):
                        for index, FP_ip in enumerate(sorted(FP)):
                            report = policies[policy][FP_ip]
                            print_report(index, report)

            if FN:
                with open(join(args.policies_dir, 'FN-reports-{}'.format(policy)), 'w') as f:
                    with redirect_stdout(f):
                        for index, FN_ip in enumerate(sorted(FN)):
                            report = policies[args.baseline][FN_ip]
                            print_report(index, report)
    if args.export_reports:
        with open(join(args.policies_dir, 'TP-reports-{}'.format(args.baseline)), 'w') as f:
            with redirect_stdout(f):
                for index, TP_ip in enumerate(sorted(baseline_ips)):
                    report = policies[args.baseline][TP_ip]
                    print_report(index, report)


if __name__ == "__main__":
    main()
