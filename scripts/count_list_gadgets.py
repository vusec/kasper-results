#!/usr/bin/env python3

import os, re
import pymongo

MONGO_URI = os.environ.get('MONGO_URI')

def count_gadgets(db, regx):
    func_offsets = []
    line_infos = db.line_infos.find({})
    for line_info in line_infos:
        for line in line_info['line_info']:
            source_code = line[3]
            for source_line in source_code:
                if regx.match(source_line):
                    func_offsets.append(line_info['_id'])

    func_offsets = list(set(func_offsets))

    def count_matches(func_offset):
        result = db.reports.aggregate([
            { "$unwind": "$checkpoint_func_offsets" },
            { "$match": { "checkpoint_func_offsets": func_offset } },
            { "$group": {
                "_id": "$_id.ip"
            } },
            { "$count": "total" },
        ])
        if result and result.alive:
            return result.next()['total']
        return 0

    return sum([count_matches(f) for f in func_offsets])

def main():
    client = pymongo.MongoClient(MONGO_URI, serverSelectionTimeoutMS=1)
    db = client.kasper

    regx = re.compile("^[0-9 ]{5} \*.*list_for_each.*$")
    count = count_gadgets(db, regx)
    print('line_of_each*: ', count)

if __name__ == '__main__':
    main()
