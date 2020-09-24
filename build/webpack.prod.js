const { merge } = require('webpack-merge')
const config = require('./webpack.config.js')
const prodConfig = {
  mode: "production",
  // 会生成map文件
  // devtool: "cheap-module-source-map",
  // devtool: "cheap-module-eval-source-map",
  output: {
    // filename: "[name].[chunkhash:5].js",
    // chunkFilename: '[name].[chunkhash:5].js'
    filename: "[name].[contenthash:5].js",
    chunkFilename: '[name].[contenthash:5].js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          filename: 'vendors.[contenthash:5].js',
        },
      }
    },
  }
};
module.exports = merge(config, prodConfig)
