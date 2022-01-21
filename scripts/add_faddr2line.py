#!/usr/bin/env python3

import os, subprocess
from argparse import ArgumentParser

import pymongo

from utils.progressbar import progressbar

KERNEL = os.environ.get('KERNEL')
FADDR2LINE = '{}/scripts/faddr2line'.format(KERNEL)
VMLINUX = '{}/vmlinux'.format(KERNEL)
MONGO_URI = os.environ.get('MONGO_URI')

def faddr2line(addr_str, vmlinux=VMLINUX):
    process = subprocess.Popen([FADDR2LINE, vmlinux, addr_str],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE)
    stdout, stderr = process.communicate()
    if stderr:
        print(stderr)
        return None
    line_info = stdout.decode("utf-8").splitlines()
    faddr_info = []
    if line_info and len(line_info) >= 2:
        for line in line_info[1:]:
            if ' at ' in line:
                func_name, file_name  = line.split(' at ')
                func_name = func_name.replace('dfs$', '')
                file_name = file_name.replace('{}/'.format(KERNEL), '')
                if file_name[0] == '/':
                    # file name is absolute, let's make it relative to KERNEL
                    m = 'kasper/kdfsan-linux/'
                    file_name = file_name[file_name.find(m)+len(m):]
                file_name, line_number = file_name.split(':')
                if line_number == '?':
                    return None
                line_number = int(line_number)
                faddr_info.append([func_name, file_name, line_number])
    if len(faddr_info) == 0:
        return None
    return faddr_info

def get_lines_for_file(file_name, line_nr, offset = 5):
    start = max(1, line_nr - offset)
    end = line_nr + offset
    process = subprocess.Popen(['sed', '-n', "{},{}p".format(start, end), file_name],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE)
    stdout, stderr = process.communicate()
    if stderr:
        print(stderr)
        return None
    line_info = stdout.decode("utf-8").splitlines()
    return line_info, start

def faddr_add_code(faddr_lines):
    for faddr_line in faddr_lines:
        func_name, file_name, line_number = faddr_line
        if file_name[0] == '/':
            # file name is absolute, let's make it relative to KERNEL
            m = 'kasper/kdfsan-linux/'
            file_name = file_name[file_name.find(m)+len(m):]
        file_lines, start = get_lines_for_file('{}/{}'.format(
            KERNEL, file_name), line_number)
        for idx, file_line in enumerate(file_lines):
            if idx == line_number - start: # ???
                file_lines[idx] = '{0:=5d} *{1}'.format(idx+start, file_line)
            else:
                file_lines[idx] = '{0:=5d}  {1}'.format(idx+start, file_line)
        faddr_line.append(file_lines)

def fetch_unique_func_offsets(db, rows, vmlinux):
    for i, row in progressbar(rows, "Adding faddr2line info: "):
        func_offset = row['_id']
        if 'dfs$' not in func_offset:
            func_offset = 'dfs${}'.format(func_offset)
        faddr_lines = faddr2line(func_offset, vmlinux)
        if faddr_lines:
            faddr_add_code(faddr_lines)
        else:
            # try without 'dfs$'
            func_offset = func_offset.replace('dfs$', '')
            faddr_lines = faddr2line(func_offset, vmlinux)
            if faddr_lines:
                faddr_add_code(faddr_lines)

        if faddr_lines:
            newvalue = { "$set": { "line_info": faddr_lines } }
            db.line_infos.update_one({ '_id': row['_id'] }, newvalue)

def main():
    parser = ArgumentParser()
    parser.add_argument("-s", "--sym", dest="vmlinux",
            help="define the vmlinux file to use", metavar="FILE")
    args = parser.parse_args()

    client = pymongo.MongoClient(MONGO_URI, serverSelectionTimeoutMS=1)
    db = client.kasper

    if args.vmlinux:
        vmlinux = args.vmlinux
    else:
        rundir = db.rundir.find_one()['rundir']
        vmlinux = os.path.join(rundir, 'vmlinux')

    cursor = db.line_infos.find({})
    documents = [document for document in cursor if document['line_info'] == '']
    fetch_unique_func_offsets(db, documents, vmlinux)

if __name__ == "__main__":
    main()
