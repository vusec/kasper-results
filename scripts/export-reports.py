#!/usr/bin/env python3

import os, time, getpass
from argparse import ArgumentParser

import pymongo

from utils.syscall_nr import get_syscall

ROOT = os.environ.get('ROOT')
MONGO_URI = os.environ.get('MONGO_URI')

parser = ArgumentParser()
args = parser.parse_args()

def get_line_info(db, func_offset):
    line_infos = db.line_infos.find_one({ "_id": func_offset })['line_info']
    if len(line_infos) > 0:
        line_infos = [f'{line_info[0]} ({line_info[1]}:{line_info[2]})' for line_info in line_infos]
        return line_infos
    return None

def setup_dirs():
    outdir = os.path.join(ROOT, 'out/reports/')
    os.makedirs(outdir, exist_ok=True)
    rundir = outdir + 'reports_' + time.strftime("%Y%m%d-%H%M%S") + '_' + getpass.getuser() + '/'
    os.makedirs(rundir)
    return rundir

def parse_taint_label(taint_label):
    if 'syscall_nr' in taint_label:
        syscall_nr = int(taint_label['syscall_nr']) - 600
        syscall_arg_nr = int(taint_label['syscall_arg_nr'])
        systemcall = get_syscall(syscall_nr)
        return f'(tainted syscall argument: {syscall_arg_nr+1}, syscall: {systemcall})'
    return list(taint_label.keys())[0]

def write_reports(reports, rundir, db):
    for idx, report in enumerate(reports):
        index = idx+1
        report_path = rundir + "report"+f'{index:04d}' + '.txt'

        with open(report_path, "w") as f:
            report_type = report['_id']['report_type']
            ip = report['_id']['ip']
            # f.write(f'== Covert channel {index:04d}: {ip} ({report_type})\n')
            f.write(f'== Covert channel {index:04d}: {report_type}\n')
            line_info = get_line_info(db, report['func_offset'])
            f.write(f'== Function Offset: ')
            if line_info:
                f.write("\n".join(line_info))
            else:
                f.write(report['func_offset'])
            f.write('\n')
            f.write(f'== Bug types: {", ".join(report["bug_types"])}\n')
            # f.write(f'== Read/Write: {report["read_write"]}, Size: {report["size"]}\n')

            f.write('\n')
            f.write(f'== [Mispredicted Branches] ==\n')
            for idx, checkpoint_func_offset in enumerate(report['checkpoint_func_offsets']):
                index = idx + 1
                f.write(f'== [Mispredicted Branch {index:03d}] ==\n')
                line_info = get_line_info(db, checkpoint_func_offset)
                if line_info:
                    f.write("\n".join(line_info))
                else:
                    f.write(checkpoint_func_offset)
                f.write('\n\n')

            calltraces = list(sorted(report['calltraces'], key = len))

            f.write(f'== [Call Traces] ==\n')
            for idx, calltrace in enumerate(calltraces):
                if idx > 2:
                    break

                index = idx + 1
                f.write(f'== [Call Trace {index:03d}] ==\n')
                calltrace = list(filter(lambda x: 'kspecem_' not in x, calltrace))
                calltrace = list(filter(lambda x: '__sanitizer_cov_trace' not in x, calltrace))
                calltrace = list(filter(lambda x: 'kdfinit_' not in x, calltrace))
                line_calltrace = []
                for calltrace_line in calltrace:
                    line_info = get_line_info(db, calltrace_line.rstrip())
                    if line_info and len(line_info) > 0:
                        for idx, line in enumerate(line_info):
                            if idx > 0:
                                line_calltrace.append(f'    {line}\n')
                            else:
                                line_calltrace.append(f'{line}\n')
                    else:
                        line_calltrace.append(calltrace_line)
                f.write("".join(line_calltrace))
                f.write("\n")

            f.write(f'== [Taint Info] ==\n')
            f.write(f'== [Data Labels] ==\n')
            for idx, taint_labels in enumerate(report['data_labels']):
                index = idx+1
                if idx > 10:
                    break
                if len(taint_labels) > 0:
                    f.write(f'== [Data Labels {index:03d}] ==\n')
                for taint_label in taint_labels:
                    taint_label = parse_taint_label(taint_label)
                    f.write(f'= {taint_label}\n')
            f.write(f'== [Pointer Labels] ==\n')
            for idx, taint_labels in enumerate(report['ptr_labels']):
                index = idx+1
                if idx > 10:
                    f.write(f'== [more pointer labels omitted for clarity] ==\n')
                    break
                if len(taint_labels) > 0:
                    f.write(f'== [Pointer Labels {index:03d}] ==\n')
                for taint_label in taint_labels:
                    taint_label = parse_taint_label(taint_label)
                    f.write(f'= {taint_label}\n')
    print(rundir)

def main():
    client = pymongo.MongoClient(MONGO_URI, serverSelectionTimeoutMS=1)
    db = client.kasper

    reports = [r for r in db.reports.find({})]
    rundir = setup_dirs()
    write_reports(reports, rundir, db)

if __name__ == "__main__":
    main()
