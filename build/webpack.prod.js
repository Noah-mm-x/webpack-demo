const merge = require('webpack-merge').merge
const config = require('./webpack.config.js')
const prodConfig = {
  mode: "production",
  devtool: "cheap-module-source-map",
};
module.exports = merge(config, prodConfig)
