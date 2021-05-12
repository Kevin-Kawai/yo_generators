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

  writing() {
    // TODO: check if the folder already exists and fail if it does
    this.fs.copyTpl(
      this.templatePath("Dockerfile"),
      this.destinationPath(`${this.answers.projectName}/Dockerfile`)
    )
  }
}