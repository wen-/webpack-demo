const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    //print: './src/print.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "testHtmlWebpackPlugin",
      template: "./src/index.template.html"
    }),
  ],
  optimization: {
    splitChunks: {
      name: true,
      minChunks: 2,
      minSize: 1,
      maxSize: 30,
      cacheGroups: {
        commons: {
          name: 'public',
          chunks: 'all',
          minChunks: 2,
          minSize: 1, //这个是文件最小值，默认30kb。小于30kb是不会抽取公共代码的
        }
      }
    }
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          "file-loader"
        ]
      },
    ]
  }
};
