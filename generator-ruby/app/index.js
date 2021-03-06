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
      this.templatePath("app.rb"),
      this.destinationPath(`${this.answers.projectName}/app.rb`)
    )

    this.fs.copyTpl(
      this.templatePath("app/model/model.rb"),
      this.destinationPath(`${this.answers.projectName}/app/model/model.rb`)
    )

    this.fs.copyTpl(
      this.templatePath("spec/model/model_spec.rb"),
      this.destinationPath(`${this.answers.projectName}/spec/model/model_spec.rb`)
    )
  }

  install() {
    const installLocation = `${process.cwd()}/${this.answers.projectName}`

    this.spawnCommandSync("bundle", ["init"], { cwd: installLocation})
    this.spawnCommandSync("bundle", ["add", "pry"], { cwd: installLocation })
    this.spawnCommandSync("bundle", ["add", "rspec"], { cwd: installLocation })
  }
}
