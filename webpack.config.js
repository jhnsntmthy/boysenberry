var FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin');
const Webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    // The script refreshing the browser on none hot updates
    'webpack-dev-server/client?http://localhost:8080',
    './src/run.js'
  ],
  output: {
    filename: 'boysenberry.js',
    path: path.join(__dirname, 'public'),
    publicPath: '/'
  },
  module: {
    loaders: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }
    ]
  },
  plugins: [
    new FlowBabelWebpackPlugin()
  ],
  devServer: {
    contentBase: "public",
    historyApiFallback: true,
    headers: { "X-Custom-Header": "yes" },
    stats: { colors: true }
  }
}
