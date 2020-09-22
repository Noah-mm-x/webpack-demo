const merge = require('webpack-merge').merge
const config = require('./webpack.config.js')
const prodConfig = {
  mode: "production",
  // 会生成map文件
  // devtool: "cheap-module-source-map",
  // devtool: "cheap-module-eval-source-map",
};
module.exports = merge(config, prodConfig)
