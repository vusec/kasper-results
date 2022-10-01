# README

This repository contains the evaluation of the paper "Kasper: Scanning for Generalized Transient Execution Gadgets in the Linux Kernel".
It includes log parsing, aggregation of gadgets in a mongoDB database, all relevant evaluation scripts and a web-interface to visualize the findings.

### Dependencies

- [go-task](https://taskfile.dev/#/installation) as a task-runner.
- python3 and virtualenv
- Node.js (if you want to run the web interface outside of docker)
- docker (if you want to run the db and web interface inside containers)

### Docker
It is recommended to run the mongoDB database and the web interface inside docker containers

To start the containers run:
```
docker-compose up
```

### Gadget Aggregation

First setup the python virtualenv:
```
task setup
```

To gather a log file from a syzkaller run:
```
task collect-log
```

To parse the collected log (includes stdout from all syzkaller VMs):
```
task parse-log
```

To add line and code information:
```
task add-faddr2line
```

To export the mongoDB database into the `results` directory:
```
task export-db
```

### Evaluation Scripts

Please refer to the `Taskfile.yml` for included evaluation scripts.

### Web Interface

The easiest way to run the web interface is using the included `Dockerfile` together with `docker-compose`.

Otherwise, you can setup the dependencies with:
```
task web:setup
```

and start the web server with:
```
task web:backend
```
