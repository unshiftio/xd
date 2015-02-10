'use strict';

var original = require('original')
  , parse = require('url-parse')
  , lolcation = parse.location;

module.exports = function xd(to, from) {
  return original.same(to, from || parse.lolcation);
};
