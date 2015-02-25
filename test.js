/*!
 * base-file-loader <https://github.com/jonschlinkert/base-file-loader>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var inspect = require('util').inspect;
var File = require('vinyl');
var should = require('should');
var loader = require('./');

describe('loader', function () {
  it('should load vinyl files', function () {
    var a = new File({path: 'README.md', contents: null});
    loader(a).should.have.property.README;
    loader(a).README.should.have.property.contents;
    loader(a).README.should.have.property.relative;
    loader(a).README.should.have.property.base;
    loader(a).README.should.have.property.cwd;
  });

  it('should load objects', function () {
    var a = {path: 'README.md', contents: null};
    loader(a).should.have.property.README;
    loader(a).README.should.have.property.contents;
    loader(a).README.should.have.property.relative;
    loader(a).README.should.have.property.base;
    loader(a).README.should.have.property.cwd;
  });

  it('should accept array as first argument', function () {
    var a = new File({path: 'README.md', contents: null});
    var opts = {};
    loader([a, opts]).should.have.property.README;
    loader([a, opts]).README.should.have.property.contents;
    loader([a, opts]).README.should.have.property.relative;
    loader([a, opts]).README.should.have.property.base;
    loader([a, opts]).README.should.have.property.cwd;
  });

  it('should use custom renameKey', function () {
    var a = new File({path: 'README.md', contents: null});
    var opts = {
      renameKey: function (fp) {
        return fp;
      }
    };
    loader([a, opts]).should.have.property['README.md'];
    loader([a, opts])['README.md'].should.have.property.contents;
    loader([a, opts])['README.md'].should.have.property.relative;
    loader([a, opts])['README.md'].should.have.property.base;
    loader([a, opts])['README.md'].should.have.property.cwd;
  });

  it('should use custom normalize', function () {
    var a = new File({path: 'README.md', contents: null});
    var opts = {
      normalize: function (file, opts) {
        file.foo = 'bar';
        return file;
      }
    };
    loader([a, opts]).should.have.property.README;
    loader([a, opts]).README.should.have.property.contents;
    loader([a, opts]).README.should.have.property.relative;
    loader([a, opts]).README.should.have.property.base;
    loader([a, opts]).README.should.have.property.cwd;
    loader([a, opts]).README.should.have.property.foo;
    loader([a, opts]).README.foo.should.eql('bar');
  });
});

