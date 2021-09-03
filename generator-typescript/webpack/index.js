var Generator = require("yeoman-generator");

module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'projectName',
        message: 'what is the project name',
        default: this.appname
      },
      {
        type: 'list',
        name: 'frontendOption',
        choices: ['react', 'vuejs'],
        default: 'react'
      }
    ])
  }

  writing() {
    if (this.answers.frontendOption === 'react') {
      this.fs.copyTpl(
        this.templatePath("react"),
        this.destinationPath(`${this.answers.projectName}`)
      )
    } else if (this.answers.frontendOption === 'vuejs') {
      this.fs.copyTpl(
        this.templatePath("vuejs"),
        this.destinationPath(`${this.answers.projectName}`)
      )
    }
  }

  install() {
    const installLocation = `${process.cwd()}/${this.answers.projectName}`

    // dev dependencies
    this.spawnCommandSync('yarn', ['add', 'webpack', '-D'], { cwd: installLocation })
    this.spawnCommandSync('yarn', ['add', 'webpack-cli', '-D'], { cwd: installLocation })

    // global dependencies
    this.spawnCommandSync('yarn', ['add', '@babel/core'], { cwd: installLocation })
    this.spawnCommandSync('yarn', ['add', '@types/express'], { cwd: installLocation })
    this.spawnCommandSync('yarn', ['add', '@types/node'], { cwd: installLocation })
    this.spawnCommandSync('yarn', ['add', 'babel-core'], { cwd: installLocation })
    this.spawnCommandSync('yarn', ['add', 'babel-loader'], { cwd: installLocation })
    this.spawnCommandSync('yarn', ['add', 'babel-preset-es2015'], { cwd: installLocation })
    this.spawnCommandSync('yarn', ['add', 'babel-preset-stage-0'], { cwd: installLocation })
    this.spawnCommandSync('yarn', ['add', 'express'], { cwd: installLocation })
    this.spawnCommandSync('yarn', ['add', 'ts-loader'], { cwd: installLocation })
    this.spawnCommandSync('yarn', ['add', 'typescript'], { cwd: installLocation })

    // css related
    this.spawnCommandSync('yarn', ['add', 'css-loader'], { cwd: installLocation })
    this.spawnCommandSync('yarn', ['add', 'style-loader'], { cwd: installLocation })
    this.spawnCommandSync('yarn', ['add', 'node-sass'], { cwd: installLocation })
    this.spawnCommandSync('yarn', ['add', 'sass-loader'], { cwd: installLocation })

    // frontend option specific dependnecies
    if (this.answers.frontendOption === 'react') {
      this.spawnCommandSync('yarn', ['add', '@types/react'], { cwd: installLocation })
      this.spawnCommandSync('yarn', ['add', '@types/react-dom'], { cwd: installLocation })
      this.spawnCommandSync('yarn', ['add', 'react'], { cwd: installLocation })
      this.spawnCommandSync('yarn', ['add', 'react-dom'], { cwd: installLocation })
    } else if (this.answers.frontendOption === 'vuejs') {
      this.spawnCommandSync('yarn', ['add', 'vue'], { cwd: installLocation })
      this.spawnCommandSync('yarn', ['add', 'vue-loader'], { cwd: installLocation })
      this.spawnCommandSync('yarn', ['add', 'vue-template-compiler'], { cwd: installLocation })
    }
  }
};
