var program = require('commander');
var createComponent = require('../lib/createComponent.js');

function arr(val) {
    return val.split(",");
}

program
  .version('1.1.0')
  .option('-n --name [names]', 'Component Names', arr)
  .option('-s --stype <type>', 'Style Type', /^(css|less|scss|sass)$/, 'css')
  .option('-t --template <template>', 'Template', 'default')
  .parse(process.argv)

if (program.name) {
  console.log('you will create components %s with Scss', program.stype);
  createComponent(program.name, program.stype, program.template);
}

console.log("done");

