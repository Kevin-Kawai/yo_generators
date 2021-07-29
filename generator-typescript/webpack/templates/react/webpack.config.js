const path = require ('path');

const clientConfig = {
  entry: './index.tsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      loader: "ts-loader"
    }]
  }
}

const serverConfig = {
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
