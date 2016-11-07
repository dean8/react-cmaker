var path = require("path");

function writeJs(dirName, fs, cssType, templateName) {
  console.log(__dirname);
  var templateName = templateName==='default' ? path.join('../', 'template', templateName) : templateName;
      template = fs.readFileSync(templateName, 'utf-8');
  template = template.replace(/\$name/g, dirName);
  template = new Buffer(template);
  fs.writeFile(path.join(dirName, 'index.js'), template);
}


function writeCss(dirName, fs, cssType) {
    var template = "." + dirName + " {\n  \n}";
    template = new Buffer(template);
    fs.writeFile(path.join(dirName, "index." + cssType), template);
}

module.exports = {
  writeJs: writeJs,
  writeCss: writeCss
}
