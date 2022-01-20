# kasper-results-server
web server to view reports generated by spectrestar

## Requirements
- Install `node`
- Install `python3` and `virtualenv` (`pip3 install virtualenv`)

## Setup
run `make init`

## Usage

With automatic file reloading:
run `make backend` in one terminal and `make start-dev` in the second

Without:
run `make start` (doesn't run webpack-dev server for the frontend)