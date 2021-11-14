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
    this.fs.copy(
      this.templatePath("files"),
      this.destinationPath(`${this.answers.projectName}`)
    )
  }

  install() {
    const installLocation = `${process.cwd()}/${this.answers.projectName}`

    // runtime dependencies
    this.spawnCommandSync("yarn", ['init'], { cwd: installLocation })
    this.spawnCommandSync("yarn", ['add', 'express', ], { cwd: installLocation })
    this.spawnCommandSync("yarn", ['add', 'ejs', ], { cwd: installLocation })

    // dev dependencies
    this.spawnCommandSync("yarn", ['add', '@types/express', '-D'], { cwd: installLocation })
    this.spawnCommandSync("yarn", ['add', '@types/node', '-D'], { cwd: installLocation })
    this.spawnCommandSync("yarn", ['add', 'ts-loader', '-D'], { cwd: installLocation })
    this.spawnCommandSync("yarn", ['add', 'typescript', '-D'], { cwd: installLocation })
    this.spawnCommandSync("yarn", ['add', 'webpack', '-D'], { cwd: installLocation })
    this.spawnCommandSync("yarn", ['add', 'webpack-cli', '-D'], { cwd: installLocation })
    this.spawnCommandSync("yarn", ['install'], { cwd: installLocation })
  }
};
