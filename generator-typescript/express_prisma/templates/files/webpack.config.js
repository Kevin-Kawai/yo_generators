const path = require('path');

module.exports = {
  entry: './app.ts',
  target: 'node',
  mode: "development",
  node: {
    __dirname: false
  },
  output: {
    path: path.resolve(__dirname),
    filename: 'app.js'
  },
  module: {
    rules: [{
      test: /\.ts$/,
      exclude: /node_modules/,
      loader: 'ts-loader',
      resolve: {
        extensions: ['.js', '.ts', '.json']
      }
    }]
  },
  externals: {
    '_http_common': 'commonjs _http_common',
    'encoding': 'commonjs encoding'
  }
}
