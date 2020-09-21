// 这里有坑，默认的引入，不是方法，现在是个对象
const merge = require('webpack-merge').merge
const config = require('./webpack.config.js')
const devConfig = {
  mode: "development",
  devtool: "cheap-module-eval-source-map", // 生成source-map
  devServer: {
    contentBase: "./dist", // 本地服务器所加载的页面所在的目录
    // historyApiFallback: true, // 单页面应用路由切换时不跳转
    host: "localhost",
    inline: true, // 实时刷新
    port: 8081, //启动时的端口号
    hot: true, //热加载
    // proxy: {
    //   '/api': 'http://localhost: 3000'
    // }
  },
  optimization: {
    // usedExports: true, // Tree shaking用
  },
};
module.exports = merge(config, devConfig)