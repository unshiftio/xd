'use strict';

var xd = require('./')
  , assume = require('assume');

assume(xd).is.a('function');
assume(xd('http://google.com')).is.true();
