#!/usr/bin/env node
var program = require('commander');
var createComponent = require('../lib/createComponent.js');

function arr(val) {
    return val.split(",");
}

program
  .version('1.1.0')
  .option('-n --name [names]', 'Component Names', arr)
  .option('-s --stype <type>', 'Style Type', /^(css|less|scss|sass)$/, 'scss')
  .option('-t --template <template>', 'Template', 'default.template')
  .parse(process.argv)

if (program.name) {
  if (program.name.length === 0) {
    return console.error("please enter component name!");
  }
  console.log('You will create components %s with %s', program.name, program.stype);
  createComponent(program.name, program.stype, program.template);
}

console.log("Component create complete!");

