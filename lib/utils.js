var path = require('path');

function writeJs(dirName, fs, cssType, templateName) {
  var templateName = templateName==='default.template' ?
                    path.join(__dirname, '../', 'template', templateName) :
                    templateName;
  var className = convertName(dirName);
  template = fs.readFileSync(templateName, 'utf-8');
  template = replaceVars(template, {
    dirName: dirName,
    cssType: cssType,
    className: className
  });
  template = new Buffer(template);
  fs.writeFile(path.join(dirName, 'index.js'), template);
}

function writeCss(dirName, fs, cssType) {
    var template = "." + convertName(dirName) + " {\n  \n}";
    template = new Buffer(template);
    fs.writeFile(path.join(dirName, "index." + cssType), template);
}

function writeHandler(dirName, fs) {
  var template = "// handlers write here \n";
  template = new Buffer(template);
  fs.writeFile(path.join(dirName, "handler.js"), template);
}

function replaceVars(template, options) {
  var reg = /\$(.*?)\$/g;
  return template.replace(reg, function($0, $1) {
    return options[$1];
  });
}

function convertName(s) {
  s = s.replace(/([A-Z])+/g, function(s, s1) {
    return '-' + s1.toLowerCase();
  });
  return s.replace(/^\-/, '');
}

module.exports = {
  writeJs: writeJs,
  writeCss: writeCss,
  writeHandler: writeHandler
}
