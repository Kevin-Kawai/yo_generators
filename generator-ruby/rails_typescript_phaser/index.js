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
        name: 'usingDockerForDB',
        message: 'is you DB in a docker container?',
        default: true
      }
    ])
  }

  railsNew() {
    this.spawnCommandSync("rails", ['new', this.answers.projectName, '--database=postgresql'])
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath("blog.rb"),
      this.destinationPath(`${this.answers.projectName}/app/models/blog.rb`)
    )
    this.fs.copy(
      this.templatePath("blogs"),
      this.destinationPath(`${this.answers.projectName}/app/views/blogs`)
    )
    this.fs.copy(
      this.templatePath("home"),
      this.destinationPath(`${this.answers.projectName}/app/views/home`)
    )
    this.fs.copyTpl(
      this.templatePath("home_controller.rb"),
      this.destinationPath(`${this.answers.projectName}/app/controllers/home_controller.rb`)
    )
    this.fs.copyTpl(
      this.templatePath("blogs_controller.rb"),
      this.destinationPath(`${this.answers.projectName}/app/controllers/blogs_controller.rb`)
    )
    this.fs.copy(
      this.templatePath("routes.rb"),
      this.destinationPath(`${this.answers.projectName}/config/routes.rb`)
    )
    this.fs.copy(
      this.templatePath("seeds.rb"),
      this.destinationPath(`${this.answers.projectName}/db/seeds.rb`)
    )

    if (this.answers.usingDockerForDB) {
      this.fs.copy(
        this.templatePath("docker_database.yml"),
        this.destinationPath(`${this.answers.projectName}/config/database.yml`)
      )
    }

    this.fs.copy(
      this.templatePath("app/javascript/packs/phaser_entry.ts"),
      this.destinationPath(`${this.answers.projectName}/app/javascript/packs/phaser_entry.ts`)
    )
  }

  install() {
    const installLocation = `${process.cwd()}/${this.answers.projectName}`

    this.spawnCommandSync("bin/rails", ['app:update:bin'], { cwd: installLocation })
    this.spawnCommandSync("bin/rails", ['g', 'migration', 'CreateBlogs', 'title:string', 'content:text'], { cwd: installLocation })
    this.spawnCommandSync("bin/rails", ['db:create', 'db:migrate', 'db:seed'], { cwd: installLocation })
    this.spawnCommandSync("bundle", ['add', 'faraday'], { cwd: installLocation })
    this.spawnCommandSync("bundle", ['add', 'rspec-rails', '--group=development,test'], { cwd: installLocation })
    this.spawnCommandSync("bundle", ['add', 'pry', '--group=development,test'], { cwd: installLocation })
    this.spawnCommandSync("bin/rails", ['generate', 'rspec:install'], { cwd: installLocation })
    this.spawnCommandSync("yarn", ['add', 'phaser'], { cwd: installLocation })
    this.spawnCommandSync("bin/rails", ['webpacker:install:typescript'], { cwd: installLocation })
  }
}
