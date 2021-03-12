var Generator = require("yeoman-generator");

module.exports = class extends Generator {
  constructor(args, opts) {
  }

  method1() {
    this.log('hello 1')
  }

  method2() {
    this.log('hello 2')
  }
};