var path = require('path');

function writeJs(dirName, fs, cssType, templateName) {
  var templateName = templateName==='default.template' ?
                    path.join(__dirname, '../', 'template', templateName) :
                    templateName;
  template = fs.readFileSync(templateName, 'utf-8');
  template = replaceVars(template, {
    dirName: dirName,
    cssType: cssType
  });
  template = new Buffer(template);
  fs.writeFile(path.join(dirName, 'index.js'), template);
}

function writeCss(dirName, fs, cssType) {
    var template = "." + dirName + " {\n  \n}";
    template = new Buffer(template);
    fs.writeFile(path.join(dirName, "index." + cssType), template);
}

function replaceVars(template, options) {
  var reg = /\$(.*?)\$/g;
  return template.replace(reg, function($0, $1) {
    return options[$1];
  });
}

module.exports = {
  writeJs: writeJs,
  writeCss: writeCss
}
