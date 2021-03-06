var fs = require('fs');
var path = require('path');
var u = require('./utils');

function createComponent(dirNames, cssType, template) {
  create(dirNames, cssType, template);
}

function create(dirNames, cssType, template) {
  dirNames.map(function(dirName) {
    createFiles(dirName, cssType, template);
  });
}

function createFiles(dirName, cssType, template) {
  fs.mkdirSync(dirName);
  u.writeJs(dirName, fs, cssType, template);
  u.writeCss(dirName, fs, cssType);
  u.writeHandler(dirName, fs);
}

module.exports = createComponent;
