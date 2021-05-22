var Generator = require("yeoman-generator");

module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'projectName',
        message: "what is the project name",
        default: this.appname
      },
      {
        type: 'confirm',
        name: 'useJavaScript',
        message: "Do you want to enable Javascript?",
        default: this.appname
      },
    ])
  }

  install() {
    const currentWorkingDirectory = `${process.cwd()}/${this.answers.projectName}`
    const railsNewOptions = [
      'new',
      this.answers.projectName,
    ]
    if (!this.answers.useJavaScript) {
      railsNewOptions.push([
        '--skip-javascript'
      ])
    }

    this.spawnCommandSync("rails", railsNewOptions)
    this.spawnCommandSync("bin/rails", ['app:update:bin'], { cwd: currentWorkingDirectory })
    this.spawnCommandSync("bundle", ['add', 'solidus'], { cwd: currentWorkingDirectory })
    this.spawnCommandSync("bin/rails", ['generate', 'solidus:install'], { cwd: currentWorkingDirectory })
  }
}