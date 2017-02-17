const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates


    './entry.js'
    // the entry point of our app
  ],
  output: {
    filename: 'bundle.js',
    // the output bundle

    path: path.resolve(__dirname, 'build'),

    publicPath: '/build'
    // necessary for HMR to know where to load the hot update chunks
  },

  devServer: {
    hot: true,
    // enable HMR on the server
	inline: true,
    contentBase: path.resolve(__dirname, 'build'),
    // match the output path

    publicPath: '/build'
    // match the output `publicPath`
  },

  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loaders: ['react-hot', 'babel'],
    }, {
      test: /\.(woff|woff2)$/,
      loader: "url-loader?limit=10000&mimetype=application/font-woff"
    }, {
      test: /\.ttf$/,
      loader: "file-loader"
    }, {
      test: /\.eot$/,
      loader: "file-loader"
    }, {
      test: /\.svg$/,
      loader: "file-loader"
    }, {
      test: /\/bootstrap\/js\//,
      loader: 'imports?jQuery=jquery'
    }],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally
  ],
};