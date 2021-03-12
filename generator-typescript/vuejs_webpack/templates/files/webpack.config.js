const path = require ('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const clientConfig = {
  entry: './index.ts',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: "vue-loader"
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: "ts-loader"
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
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
