'use strict';

var assert = require('assert');
var transform = require('../').transform;

assert.strictEqual(transform('getList()::map'), 'map.bind(getList())');
assert.strictEqual(transform('getList()::map(fn)::filter(fn)'), 'filter.call(map.call(getList(), fn), fn)');
