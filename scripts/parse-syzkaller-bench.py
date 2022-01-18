#!/usr/bin/env python3

import json
from argparse import ArgumentParser

import seaborn as sns
import pandas as pd

parser = ArgumentParser()
parser.add_argument("-b", "--baseline", dest="baseline_bench_file",
        help="define the bench file to parse", metavar="FILE")
parser.add_argument("-s", "--spec", dest="spec_bench_file",
        help="define the bench file to parse", metavar="FILE",
        required=True)
parser.add_argument("-v", "--nr-vms", dest="nr_vms",
        help="amount of vms used for fuzzing", metavar="FILE", type=int, required=True)
args = parser.parse_args()

def load_bench_file(file_path):
    bench = []
    with open(file_path) as f:
        data = f.read()
        # add missing commas
        data = data.replace('}', '},')
        # remove last comma
        data = data[:-2]
        data = f'[{data}]'

        bench = pd.read_json(data)
    return bench

def main():
    bench_spec = load_bench_file(args.spec_bench_file)
    if args.baseline_bench_file:
        bench_baseline = load_bench_file(args.baseline_bench_file)
        bench = pd.concat([bench_baseline.assign(dataset='baseline'), bench_spec.assign(dataset='kasper')])
    else:
        bench = bench_spec

    bench['fuzzing'] = bench['fuzzing'] / 60 / 60 / 24 / args.nr_vms # convert seconds to days
    print(bench)

    sns.set_theme(font="Times New Roman")

    if args.baseline_bench_file:
        plot = sns.lineplot(x='fuzzing', y='cover', hue='dataset', data=bench)
    else:
        plot = sns.lineplot(x='fuzzing', y='cover', data=bench)

    plot.set_xlabel('Fuzzing time (in days)')
    plot.set_ylabel('Coverage (in edges)')

    plot.figure.tight_layout()
    plot.figure.savefig("out/syzkaller-coverage.pdf")

    print('Done.')

if __name__ == "__main__":
    main()
