#!/usr/bin/env node

var fs = require('fs');
var transform = require('../');

var stdin = process.argv.length > 2 ? fs.createReadStream(process.argv[2]) : process.stdin;
var stdout = process.argv.length > 3 ? fs.createReadStream(process.argv[3]) : process.stdout;

stdin.pipe(transform()).pipe(stdout);
