var Generator = require("yeoman-generator");

module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'projectName',
        message: 'what is the project name',
        default: this.appname
      }
    ])
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath("files"),
      this.destinationPath(`${this.answers.projectName}`)
    )
  }

  install() {
    const installLocation = `${process.cwd()}/${this.answers.projectName}`

    this.spawnCommandSync("yarn", ['install'], { cwd: installLocation })
  }
};
