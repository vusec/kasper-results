const webpack = require('webpack');
const express = require('express')
const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
    historyApiFallback: true,
    static: path.join(__dirname, 'dist'),
    proxy: {
      '/api': {
        target: 'http://localhost:5001',
        secure: false,
      }
    },
  }
};
