#!/usr/bin/env python3

import os, time, getpass, shutil, json, hashlib
from os.path import join
from argparse import ArgumentParser

import pymongo

from utils.progressbar import progressbar, show
from utils.parse_report import parse_reports, get_restart_dict, get_report_dict, prog2c, c2bin

ROOT = os.environ.get('ROOT')
KERNEL = os.environ.get('KERNEL')
VMLINUX = '{}/vmlinux'.format(KERNEL)
MONGO_URI = os.environ.get('MONGO_URI')

def read_log(log_file):
    with open(log_file, "r", errors='replace') as f:
        content = f.readlines()
    return content

def copy_log(log_file, rundir):
    shutil.copy(log_file, rundir + 'log')

def copy_vmlinux(rundir):
    shutil.copy(VMLINUX, rundir + 'vmlinux')

def write_testcases(restarts, testcases, rundir):
    testcasesdir = rundir + 'testcases/'
    os.makedirs(testcasesdir, exist_ok=True)

    # don't print duplicated testcases
    testcases_strs = [json.dumps(testcase) for testcase in testcases]
    testcases = [json.loads(testcase) for testcase in list(set(testcases_strs))]

    for idx, testcase in progressbar(testcases, "Writing testcases: ", steps=1000):
        testcase_path =     testcasesdir + "testcase"+f'{idx:06d}' + '.txt'
        testcase_c_path =   testcasesdir + "testcase"+f'{idx:06d}' + '.c'
        testcase_bin_path = testcasesdir + "testcase"+f'{idx:06d}' + '.bin'

        with open(testcase_path, "w") as f:
            f.write('\n'.join(testcase))

def setup_dirs():
    runs_dir = join(ROOT, 'out/runs/')
    os.makedirs(runs_dir, exist_ok=True)
    rundir = runs_dir + 'run_' + time.strftime("%Y%m%d-%H%M%S") + '_' + getpass.getuser() + '/'
    os.makedirs(rundir)
    return rundir

def create_symlink(rundir):
    latest = join(ROOT, 'out/latest')
    try:
        os.unlink(latest)
    except:
        pass
    os.symlink(rundir, latest, True)

def add_db_data(db_file, restarts, testcases):
    report_num = 0
    taint_num = 0

    restarts_data = []
    line_infos = {}
    testcases_data = {}

    client = pymongo.MongoClient(MONGO_URI, serverSelectionTimeoutMS=1)
    db = client.kasper

    # reset database
    db.reports.delete_many({})
    db.line_infos.delete_many({})
    db.testcases.delete_many({})
    db.restarts.delete_many({})

    iterator = enumerate(restarts)
    if progressbar:
        iterator = progressbar(restarts, "Add reports", steps=1000)
    for num, rep in iterator:
        reports = []
        for report in rep['reports']:
            report, data_labels, ptr_labels = get_report_dict(report)
            if not report:
                continue

            report['report_id'] = report_num
            report_num += 1

            report['data_labels'] = data_labels
            report['ptr_labels'] = ptr_labels

            line_infos[report['func_offset']] = ''
            reports.append(report)

        if len(reports) > 0:
            testcase = testcases[num]
            testcase_str = json.dumps(testcase)
            testcase_id = hashlib.md5(testcase_str.encode("utf-8")).hexdigest()

            testcase_dict = {
                "testcase_id": testcase_id,
                "testcase": testcase,
            }
            testcases_data[testcase_id] = testcase

            restart_dict, restart_stats = get_restart_dict(rep)
            if not restart_dict:
                continue
            restart_dict['_id'] = num
            restart_stats['restart_id'] = num

            restart_dict['reports'] = reports
            restarts_data.append(restart_dict)
            # create_row(conn, 'restart_stats', restart_stats)
            line_infos[restart_dict['checkpoint_func_offset']] = ''

            for calltrace_line in restart_dict['calltrace']:
                if ('kspecem_' in calltrace_line or
                        'kdfinit_' in calltrace_line or
                        'kdfsan_' in calltrace_line):
                    continue
                line_infos[calltrace_line.rstrip()] = ''

    line_infos = [{"_id": key, "line_info": ''} for key in line_infos.keys()]
    testcases_data = [{"_id": k, "testcase": v} for (k, v) in testcases_data.items()]

    print('insert restarts into db...')
    db.restarts.insert_many(restarts_data)
    print('insert line_infos into db...')
    db.line_infos.insert_many(line_infos)
    print('insert testcases into db...')
    db.testcases.insert_many(testcases_data)
    print('insert reports into db...')
    db.restarts.aggregate([
        { "$unwind": "$reports"},
        { "$group":  {
            "_id": {
                "ip": "$reports.ip",
                "report_type": "$reports.report_type",
            },
            "func_offset"               : {"$first":"$reports.func_offset"},
            "bug_types"                 : {"$addToSet":"$reports.bug_type"},
            "size"                      : {"$first":"$reports.size"},
            "read_write"                : {"$first":"$reports.read_write"},
            "report_spec_lengths"       : {"$addToSet":"$reports.report_spec_length"},
            "data_labels"               : {"$addToSet":"$reports.data_labels"},
            "ptr_labels"                : {"$addToSet":"$reports.ptr_labels"},
            "fuzzing"                   : {"$addToSet": "$reports.fuzzing" },
            "checkpoint_func_offsets"   : {"$addToSet": "$checkpoint_func_offset" },
            "calltraces"                : {"$addToSet": "$calltrace" },
        } },
        { "$out": "reports" },
    ], allowDiskUse=True)

def main():
    parser = ArgumentParser()
    parser.add_argument("-l", "--log", dest="log_file",
            help="define the log file to parse", metavar="FILE",
            required=True)
    parser.add_argument("-t", "--testcases",
            dest="write_testcases", action='store_const', const=sum)
    args = parser.parse_args()

    log = read_log(args.log_file)
    restarts, testcases = parse_reports(log, show=show)
    rundir = setup_dirs()
    copy_vmlinux(rundir)
    copy_log(args.log_file, rundir)
    if args.write_testcases:
        write_testcases(restarts, testcases, rundir)
    db_file = rundir + "reports.json"
    add_db_data(db_file, restarts, testcases)
    create_symlink(rundir)
    print('Done. Reports and log written to ' + rundir)

if __name__ == "__main__":
    main()
