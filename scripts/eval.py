#!/usr/bin/env python3

from argparse import ArgumentParser
from collections import OrderedDict
import copy, os
from os.path import join

import pymongo
import pandas as pd
import numpy as np
import seaborn as sns

from utils.parse_report import parse_reports, get_restart_dict, get_report_dict

MONGO_URI = os.environ.get('MONGO_URI')

FONT = "Times New Roman"

OUT_GADGET_NUMBERS = "gadgets.txt"
OUT_CALLTRACE_PLOT = "calltrace-length.pdf"
OUT_SPEC_LENGTH_PLOT = "spec-length.pdf"
OUT_GADGETS_TIME_PLOT = "gadgets-time-plot.pdf"
OUT_GADGETS_TIME = "gadgets-time.txt"

def convert_labels_to_types(labels):
    label_types = []
    for label in labels:
        if 'syscall_nr' in label:
            if 'syscall' not in label_types:
                label_types.append('syscall')
        elif 'attacker_usercopy' in label:
            if 'syscall' not in label_types:
                label_types.append('syscall')
        elif 'attacker_slab_massage' in label or 'attacker_stack_massage' in label:
            if 'massage' not in label_types:
                label_types.append('massage')
        elif ('attacker_user_mem_lvi' in label or 'attacker_wild_mem_lvi' in label
                or 'attacker-unknown-mem-lvi' in label):
            if 'lvi' not in label_types:
                label_types.append('lvi')
        elif ('secret_slab_mem' in label or 'secret_unknown_mem' in label
                or 'secret_user_mem' in label or 'secret_global_mem' in label
                or 'secret_stack_mem' in label or 'secret_null_mem' in label
                or 'secret_wild_mem' in label):
            pass
        else:
            print('label: {}'.format(label))
    return label_types


def get_reports(db, max_fuzzing):
    reps = db.reports.find({})

    dicts = []
    per_label_type = {}

    for report_dict in reps:
        if max_fuzzing and report_dict['fuzzing'] > max_fuzzing:
            continue

        data_labels = report_dict['data_labels']
        ptr_labels = report_dict['ptr_labels']

        labels = []
        if data_labels:
            for data_label in data_labels:
                labels.extend(data_label)
        if ptr_labels:
            for ptr_label in ptr_labels:
                labels.extend(ptr_label)

        label_types = convert_labels_to_types(labels)
        label_types.sort()

        for label_str in label_types:
            # label_str = '-'.join(label_types)
            report_d = copy.deepcopy(report_dict)
            report_d['ip'] = report_d['_id']['ip']
            report_d['report_type'] = report_d['_id']['report_type']
            report_d['report_spec_length'] = min(report_d['report_spec_lengths'])
            report_d['fuzzing'] = min(report_d['fuzzing'])

            def filtered_calltrace_length(c):
                length = 0
                for l in c:
                    if ('kspecem' in l or 'kasan_' in l or 'dfsan_' in l or 'kdfinit_' in l):
                        continue
                    length += 1
                return length
            calltrace_lengths = [filtered_calltrace_length(c) for c in report_d['calltraces']]
            report_d['calltrace_length'] = min(calltrace_lengths)


            report_type = report_d['report_type']
            if (report_type == 'MDS' or report_type == 'CACHE'
                    or report_type == 'PORT') and label_str == '':
                continue

            if label_str not in per_label_type:
                per_label_type[label_str] = 0
            per_label_type[label_str] += 1

            report_d['leak_type'] = report_type

            if report_type == 'KASAN':
                report_type = 'KASAN'
                report_d['report_type'] = report_type
                dicts.append(report_d)
            elif report_type == 'MDS' or report_type == 'CACHE' or report_type == 'PORT':
                report_type = '{}-PHT-{}'.format(label_str, report_type)
                if ('lvi-PHT-MDS' == report_type or
                    'lvi-PHT-PORT' == report_type):
                    print('lvi-PHT-{MDS,PORT} ignored')
                    continue
                report_d['report_type'] = report_type
                dicts.append(report_d)
            elif report_type == 'SPECTREV2':
                continue
            else:
                print('unknown report_type: {}'.format(report_d['report_type']))
                dicts.append(report_d)

    reports = { }
    for report in dicts:
        ip = report['ip']
        cat = report['report_type']
        fuzzing = report['fuzzing']

        if cat not in reports:
            reports[cat] = {}
        if ip not in reports[cat]:
            reports[cat][ip] = []
        exists = False
        for rep in reports[cat][ip]:
            # TODO should we keep duplicate ips with different bug types?
            if rep['fuzzing'] > fuzzing:
                # only keep the one with lowest fuzzing time
                rep['fuzzing'] = fuzzing
            exists = True
            break
        if not exists:
            reports[cat][ip].append(report)
    for report in dicts:
        ip = report['ip']
        cat = report['leak_type']
        if cat not in reports:
            reports[cat] = {}
        if ip not in reports[cat]:
            reports[cat][ip] = []
        if len(reports[cat][ip]) == 0:
            reports[cat][ip].append(report)
    return reports


def generate_gadget_numbers(reports, rundir):
    leak_types = ['MDS', 'CACHE', 'PORT']
    table_row_dict = { 'total': {}}

    total = 0
    for cat in reports:
        reps = reports[cat]

        sum_total = 0
        sum_per_type = {}
        for ip in reps:
            sum_total += len(reps[ip])
            if cat in leak_types:
                total += len(reps[ip])

        ordered_sum_per_type = OrderedDict(sorted(sum_per_type.items()))
        for key, v in ordered_sum_per_type.items():
            if key not in table_row_dict:
                table_row_dict[key] = {}
            table_row_dict[key][cat] = v
        table_row_dict['total'][cat] = sum_total

    with open(join(rundir, OUT_GADGET_NUMBERS), "w") as f:
        f.write('[EVAL]\n')
        for key in table_row_dict['total']:
            f.write(f"{key}: {table_row_dict['total'][key]}\n")
        f.write(f"total: {total}\n")


def generate_calltrace_plot(reports, rundir):
    data = { 'MDS': {}, 'CACHE': {}, 'PORT': {} }
    dfs = []
    for cat in data:
        calltrace_lengths = []
        for ip in reports[cat]:
            reps = reports[cat][ip]
            ip_calltrace_lengths = []
            for r in reps:
                ip_calltrace_lengths.append(r['calltrace_length'])
            calltrace_lengths.append(min(ip_calltrace_lengths))
        data[cat]['calltrace_length'] = calltrace_lengths
        dfs.append(pd.DataFrame.from_dict(data[cat]).assign(**{"Gadget type" : cat }))

    df = pd.concat(dfs).drop_duplicates().reset_index(drop=True)
    sns.set_theme(font=FONT)
    plot = sns.ecdfplot(data=df, x="calltrace_length")
    plot.set_xlabel('Calltrace depth')
    plot.set_ylabel('Density')

    plot.figure.tight_layout()
    plot.figure.savefig(join(rundir, OUT_CALLTRACE_PLOT))
    plot.figure.clf()

def generate_spec_length_plot(reports, rundir):
    data = { 'MDS': {}, 'CACHE': {}, 'PORT': {} }
    dfs = []
    for cat in data:
        report_spec_lengths = []
        for ip in reports[cat]:
            reps = reports[cat][ip]
            ip_report_spec_lengths = []
            for r in reps:
                ip_report_spec_lengths.append(r['report_spec_length'])
            report_spec_lengths.append(min(ip_report_spec_lengths))
        data[cat]['spec_length'] = report_spec_lengths
        dfs.append(pd.DataFrame.from_dict(data[cat]).assign(**{"Gadget type" : cat }))

    df = pd.concat(dfs).drop_duplicates().reset_index(drop=True)
    sns.set_theme(font=FONT)
    plot = sns.ecdfplot(data=df, hue='Gadget type', x="spec_length")
    plot.set_xlabel('Speculative window length (in LLVM instructions)')
    plot.set_ylabel('Density')

    plot.figure.tight_layout()
    plot.figure.savefig(join(rundir, OUT_SPEC_LENGTH_PLOT))
    plot.figure.clf()


def generate_gadgets_plot(reports_line, rundir, nr_vms):
    data = { 'fuzzing': [], 'nr_reports': [], 'type': [] , 'Gadget type': [] }

    for line in reports_line:
        reports = reports_line[line]

        max_fuzzing = 0
        for cat in ['MDS', 'CACHE', 'PORT']:
            reports_by_fuzzing = {}
            reps = reports[cat]
            for ip in reps:
                for rep in reps[ip]:
                    if rep['fuzzing'] not in reports_by_fuzzing:
                       reports_by_fuzzing[rep['fuzzing']] = []
                    reports_by_fuzzing[rep['fuzzing']].append(rep)
            ordered_reports_by_fuzzing = OrderedDict(sorted(reports_by_fuzzing.items()))
            # get the max fuzzing number from all categories
            max_fuzzing = max(max_fuzzing,
                    ordered_reports_by_fuzzing[
                        list(ordered_reports_by_fuzzing.keys())[-1]
                    ][0]['fuzzing']
            )

        for cat in ['MDS', 'CACHE', 'PORT']:
            reports_by_fuzzing = {}
            reps = reports[cat]
            for ip in reps:
                for rep in reps[ip]:
                    if rep['fuzzing'] not in reports_by_fuzzing:
                       reports_by_fuzzing[rep['fuzzing']] = []
                    reports_by_fuzzing[rep['fuzzing']].append(rep)

            ordered_reports_by_fuzzing = OrderedDict(sorted(reports_by_fuzzing.items()))
            if len(ordered_reports_by_fuzzing) == 0:
                continue

            nr_reports = 0

            data['fuzzing'].append(0)
            data['nr_reports'].append(nr_reports)
            data['type'].append(line)
            data['Gadget type'].append(cat)
            for fuzzing in ordered_reports_by_fuzzing:
                ordered_reports = ordered_reports_by_fuzzing[fuzzing]
                nr_reports += len(ordered_reports)
                data['fuzzing'].append(fuzzing)
                data['nr_reports'].append(nr_reports)
                data['type'].append(line)
                data['Gadget type'].append(cat)
            data['fuzzing'].append(max_fuzzing)
            data['nr_reports'].append(nr_reports)
            data['type'].append(line)
            data['Gadget type'].append(cat)

    df = pd.DataFrame.from_dict(data)
    df['fuzzing'] = df['fuzzing'] / 60 / 60 / nr_vms # convert seconds to hours
    df2 = df.copy()
    df2['fuzzing'] = df2['fuzzing'] / 24 # convert hours to days

    sns.set_theme(font=FONT)

    # plot = sns.lineplot(x='fuzzing', y='nr_reports', hue='type', data=df)
    plot = sns.lineplot(x='fuzzing', y='nr_reports', hue='Gadget type', data=df2)
    plot.set_xlabel('Fuzzing time (in days)')
    plot.set_ylabel('Number of unique gadgets')

    plot.figure.tight_layout()
    plot.figure.savefig(join(rundir, OUT_GADGETS_TIME_PLOT))

    # get the increase of reports per hour
    per_hour = []
    max_fuzzing = np.ceil(df['fuzzing'].max())
    fuzzing = 1
    last_total_reports = 0
    while fuzzing <= max_fuzzing:
        total_reports = 0
        for gadget_type in ['MDS', 'CACHE', 'PORT']:
            df_t = df.loc[df['Gadget type'] == gadget_type].reset_index()
            df_t.sort_values(by=['fuzzing', 'nr_reports'])
            indx = (np.searchsorted(df_t['fuzzing'], fuzzing)-1).clip(0)
            total_reports += df_t['nr_reports'][indx]
        tmp = total_reports
        total_reports -= last_total_reports
        last_total_reports = tmp
        per_hour.append(total_reports)
        fuzzing += 1

    with open(join(rundir, OUT_GADGETS_TIME), "w") as f:
        for i in range(len(per_hour) - 24):
            new_reports = sum(per_hour[i:i+24])
            f.write('hour: {}, reports: {}\n'.format(i, new_reports))


def main():
    parser = ArgumentParser()
    parser.add_argument("-v", "--nr-vms", dest="nr_vms",
            help="amount of vms used for fuzzing", metavar="FILE", type=int, required=True)
    parser.add_argument("-f", "--max-fuzzing", dest="max_fuzzing",
            help="only register reports until max-fuzzing (in hours)", type=int)
    args = parser.parse_args()

    max_fuzzing = None
    if args.max_fuzzing:
        max_fuzzing = args.max_fuzzing * 60 * 60 * args.nr_vms

    print(max_fuzzing)

    client = pymongo.MongoClient(MONGO_URI, serverSelectionTimeoutMS=1)
    db = client.kasper

    rundir = db.rundir.find_one()['rundir']

    reports = get_reports(db, max_fuzzing)

    generate_gadget_numbers(reports, rundir)
    generate_calltrace_plot(reports, rundir)
    generate_spec_length_plot(reports, rundir)

    reports_line = { 'log': reports }
    generate_gadgets_plot(reports_line, rundir, args.nr_vms)

    print('Done.')

if __name__ == "__main__":
    main()
