/*!
 * base-file-loader <https://github.com/jonschlinkert/base-file-loader>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');

module.exports = function loader(file, opts) {
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
