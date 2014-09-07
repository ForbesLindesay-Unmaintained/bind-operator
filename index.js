'use strict';

var Transform = require('stream').Transform;
var falafel = require('./lib/falafel-acorn');

module.exports = browserify;
module.exports.transform = transform;
function transform(source) {
  return falafel(source, function (node) {
    if (node.type === 'BindExpression' && node.parent.type !== 'CallExpression') {
      node.update(node.property.source() + '.bind(' + node.object.source() + ')');
    }
    if (node.type === 'CallExpression' && node.callee.type === 'BindExpression') {
      var args = [node.callee.object].concat(node.arguments).map(function (node) {
        return node.source();
      }).join(', ');
      node.update(node.callee.property.source() + '.call(' + args + ')');
    }
  }).toString();
}

function browserify(file) {
  var stream = new Transform();
  var data = '';
  stream._transform = function (chunk, encoding, callback) {
    data += chunk.toString();
    callback();
  };
  stream._flush = function (callback) {
    stream.push(transform(data));
  };
  return stream;
}
