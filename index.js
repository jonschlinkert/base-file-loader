/*!
 * base-file-loader <https://github.com/jonschlinkert/base-file-loader>
 *
 * Copyright (c) 2014-2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');
var extend = require('extend-shallow');

module.exports = function loader(file, opts) {
  if (Array.isArray(file)) {
    opts = extend({}, opts, file[1]);
    file = file[0];
  }
  var key = renameKey(file.path, opts);
  var template = {};
  template[key] = normalize(file, opts);
  return template;
};

function normalize(file, opts) {
  if (opts && opts.normalize) {
    return opts.normalize(file, opts);
  }
  return file;
}

function renameKey(fp, opts) {
  if (opts && opts.renameKey) {
    return opts.renameKey(fp, opts);
  }
  var ext = path.extname(fp);
  return path.basename(fp, ext);
}
