const path = require ('path');

const clientConfig = {
  mode: 'development',
  entry: './index.ts',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.js'
  },
  module: {
    rules: [{
      test: /\.ts$/,
      exclude: /node_modules/,
      loader: "ts-loader"
    }]
  }
}

const serverConfig = {
  mode: 'development',
  entry: './server.ts',
  target: 'node',
  node: {
    __dirname: false
  },
  output: {
    path: path.resolve(__dirname),
    filename: 'server.js'
  },
  module: {
    rules: [{
      test: /\.ts$/,
      exclude: /node_modules/,
      loader: "ts-loader"
    }]
  }
}

module.exports = [serverConfig, clientConfig]
