const path = require('path');

module.exports = {
  entry: './index.ts',
  target: 'node',
  mode: "development",
  node: {
    __dirname: false
  },
  output: {
    path: path.resolve(__dirname),
    filename: 'index.js'
  },
  module: {
    rules: [{
      test: /\.ts$/,
      exclude: /node_modules/,
      loader: 'ts-loader'
    }]
  }
}
