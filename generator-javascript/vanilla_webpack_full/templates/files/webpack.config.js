const path = require ('path');

const clientConfig = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.js'
  }
}

const serverConfig = {
  entry: './server.js',
  target: 'node',
  node: {
    __dirname: false
  },
  output: {
    path: path.resolve(__dirname),
    filename: 'app.js'
  }
}

module.exports = [serverConfig, clientConfig]
