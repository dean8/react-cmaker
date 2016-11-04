var fs = require("fs");
var path = require("path");
var c = require("./createFile");

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
  c.writeJs(dirName, fs, cssType, template);
  c.writeCss(dirName, fs, cssType);
}

module.exports = createComponent;
