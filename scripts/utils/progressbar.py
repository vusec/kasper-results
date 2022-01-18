#!/usr/bin/env python3

import sys

def show(value, max_value, prefix="", size=50, file=sys.stdout):
    x = int(size*value / max_value)
    file.write("%s[%s%s] %i/%i\r" % (prefix, "#"*x, "."*(size-x), value, max_value))
    file.flush()

def progressbar(it, prefix="", steps=1, size=50, file=sys.stdout):
    count = len(it)
    print('\x1b[2K\r')
    show(0, count, prefix, size)
    for i, item in enumerate(it):
        yield i, item
        if i % steps == steps-1:
            show(i+1, count, prefix, size)
    file.write("\n")
    file.flush()
