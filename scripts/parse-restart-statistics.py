#!/usr/bin/env python3

import json
from argparse import ArgumentParser

parser = ArgumentParser()
parser.add_argument("-s", "--statistics_file", dest="statistics_file",
        help="pass in statistics file from expect", metavar="FILE")

args = parser.parse_args()

if not args.statistics_file:
    print("--statistics_file is missing")
    exit()

with open(args.statistics_file) as file:
    lines = file.readlines()
    line_counts = 0

    total_return_p = 0
    total_call_p = 0
    total_undefined_p = 0
    total_inlineasm_p = 0
    total_blacklist_p = 0
    total_timer_p = 0
    total_exception_p = 0
    total_limit_p = 0
    total_calldepth_p = 0
    total_calldisabled_p = 0
    total_writelog_full_p = 0
    total_pagefault_p = 0

    for line in lines:
        if "[SUM]" not in line:
            continue
        json_line = json.loads(line[21:])
        if json_line['total'] == 0:
            continue
        line_counts += 1
        return_p = json_line['return']/json_line['total']
        call_p = json_line['call']/json_line['total']
        undefined_p = json_line['undefined']/json_line['total']
        inlineasm_p = json_line['inlineasm']/json_line['total']
        blacklist_p = json_line['blacklist']/json_line['total']
        timer_p = json_line['timer']/json_line['total']
        exception_p = json_line['exception']/json_line['total']
        limit_p = json_line['limit']/json_line['total']
        calldepth_p = json_line['calldepth']/json_line['total']
        calldisabled_p = json_line['calldisabled']/json_line['total']
        writelog_full_p = json_line['writelog_full']/json_line['total']
        pagefault_p = json_line['pagefault']/json_line['total']

        total_return_p += return_p
        total_call_p += call_p
        total_undefined_p += undefined_p
        total_inlineasm_p += inlineasm_p
        total_blacklist_p += blacklist_p
        total_timer_p += timer_p
        total_exception_p += exception_p
        total_limit_p += limit_p
        total_calldepth_p += calldepth_p
        total_calldisabled_p += calldisabled_p
        total_writelog_full_p += writelog_full_p
        total_pagefault_p += pagefault_p

    if line_counts == 0:
        exit()
    total_return_p /= line_counts
    total_call_p /= line_counts
    total_undefined_p /= line_counts
    total_inlineasm_p /= line_counts
    total_blacklist_p /= line_counts
    total_timer_p /= line_counts
    total_exception_p /= line_counts
    total_limit_p /= line_counts
    total_calldepth_p /= line_counts
    total_calldisabled_p /= line_counts
    total_writelog_full_p /= line_counts
    total_pagefault_p /= line_counts

    total = total_return_p + total_call_p + total_undefined_p + total_inlineasm_p + total_blacklist_p + total_timer_p + total_exception_p + total_limit_p + total_calldepth_p + total_calldisabled_p + total_writelog_full_p + total_pagefault_p

    print('total:        {:.8f}'.format(total))
    print('return:       {:.8f}'.format(total_return_p))
    print('call:         {:.8f}'.format(total_call_p))
    print('undefined:    {:.8f}'.format(total_undefined_p))
    print('inlineasm:    {:.8f}'.format(total_inlineasm_p))
    print('blacklist:    {:.8f}'.format(total_blacklist_p))
    print('timer:        {:.8f}'.format(total_timer_p))
    print('exception:    {:.8f}'.format(total_exception_p))
    print('pagefault:    {:.8f}'.format(total_pagefault_p))
    print('limit:        {:.8f}'.format(total_limit_p))
    print('calldepth:    {:.8f}'.format(total_calldepth_p))
    print('calldisabled: {:.8f}'.format(total_calldisabled_p))
    print('writelog_full:{:.8f}'.format(total_writelog_full_p))
