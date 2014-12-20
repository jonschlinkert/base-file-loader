/*!
 * base-file-loader <https://github.com/jonschlinkert/base-file-loader>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var inspect = require('util').inspect;
var File = require('vinyl');
var should = require('should');
var loader = require('./');

describe('loader', function () {
  it('should equal', function () {
    var a = new File({path: 'README.md', contents: null});
    loader(a).should.have.property.README;
    loader(a).README.should.have.property.contents;
    loader(a).README.should.have.property.relative;
    loader(a).README.should.have.property.base;
    loader(a).README.should.have.property.cwd;
  });
});

