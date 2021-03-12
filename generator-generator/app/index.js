var Generator = require("yeoman-generator");

module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'generatorName',
        message: "what is the generator name",
        default: this.appname
      }
    ])
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath("generator"),
      this.destinationPath(`generator-${this.answers.generatorName}`)
    )
  }
};