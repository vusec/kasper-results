#!/bin/sh

LOG=$1
if [ ! -f "$LOG" ]; then
  echo "Log file (given '$LOG') does not exist."
  exit 1
fi

printf '======================================\n'
printf '==== Inline asm restarts summary: ====\n\n'

sed -n '/==== Inline asm restarts: ====/,/==============================/{p;/==============================/q}' $LOG | grep -v '====' | sed 's/^\[.*\] \(.*)\).*$/\1/'

printf '\n======================================\n'
printf '===== Inline asm restarts lines: =====\n\n'

sed -n '/==== Inline asm restarts: ====/,/==============================/{p;/==============================/q}' $LOG | grep -v '====' | sed 's/^\[.*\] \(.*\) (.*$/\1/' | xargs $KERNEL/scripts/faddr2line $KERNEL/vmlinux
