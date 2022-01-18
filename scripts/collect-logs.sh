#!/usr/bin/env bash

if [ $# -lt 2 ];
  then
    echo "No arguments supplied!"
    exit 1
fi

SYZ_WORKDIR=$1
LOG_FILE=$2

> $LOG_FILE

for logfile in $SYZ_WORKDIR/instance-*
do
  BASENAME=$(basename $logfile)
  echo "SYZKALLER_LOG_FILE: $BASENAME" >> $LOG_FILE
  cat $logfile >> $LOG_FILE
done
