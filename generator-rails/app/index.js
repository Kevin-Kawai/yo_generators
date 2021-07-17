var Generator = require("yeoman-generator");

module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'projectName',
        message: "what is the project name",
        default: this.appname
      }
    ])
  }

  install() {
    this.spawnCommandSync("rails", ['new', this.answers.projectName, '--database=postgresql'])
  }
}
