const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const uglify = require("uglifyjs-webpack-plugin"); //压缩js
const PurifyCSSPlugin = require("purifycss-webpack"); //去掉无用的css
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"); // 压缩css
// 用terser-webpack-plugin替换uglifyjs-webpack-plugin，可以解决es6语法问题
const TerserPlugin = require("terser-webpack-plugin");
const glob = require("glob");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const website = {
  // publicPath: "http://localhost:8080/",
  publicPath: "",
};
module.exports = {
  entry: {
    // lodash: __dirname + "/../app/lodash.js",
    main: __dirname + "/../app/main.js"
  },
  output: {
    path: __dirname + "/../distTmp",
    filename: "[name]-[hash:5].js",
    publicPath: website.publicPath, //publicPath：主要作用就是处理静态文件路径的。
  },
  stats: {
    //简化打包信息
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // options: {
            //   // only enable hot in development
            //   hmr: process.env.NODE_ENV === "development",
            //   // if hmr does not work, this is a forceful method.
            //   reloadAll: true,
            //   publicPath: "/",
            // },
          },
          "css-loader",
          // 这个插件好像不用这个，引入就报错
          // "style-loader",
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // options: {
            //   // only enable hot in development
            //   hmr: process.env.NODE_ENV === "development",
            //   // if hmr does not work, this is a forceful method.
            //   reloadAll: true,
            //   publicPath: "/",
            // },
            options: {
              importLoaders: 2, //  使less中引入less可用
            },
          },
          "css-loader",
          "postcss-loader",
          "less-loader",
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 500, //是把小于500B的文件打成Base64的格式，写入JS
              outputPath: "images/", //打包后的图片放到images文件夹下
              esModule: false, //设置为false,不然图片路径上会带有个default
            },
          },
        ],
      },
      // {
      //   test: /\.ico$/,
      //   loader: "file-loader",
      // },
      // 解决的问题就是在hmtl文件中引入<img>标签
      {
        test: /\.(htm|html)$/,
        use: ["html-withimg-loader"],
      },
      {
        test: /\.(jsx|js)$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      // 使用了OptimizeCSSAssetsPlugin，就会导致下面报错
      // minify: {
      //   //压缩html文件
      //   removeAttributeQuotes: true, //removeAttrubuteQuotes是去掉属性的双引号。
      // },
      // inject: false, // 禁用自动注入
      minify: false,
      hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
      filename: "index.html",
      template: "./app/index.html",
      // favicon: "./app/favicon.ico",
    }),
    // 清理上次打包文件
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    // new uglify(),
    // new PurifyCSSPlugin({
    //   //这里配置了一个paths，主要是需找html模板，purifycss根据这个配置会遍历你的文件，查找哪些css被使用了。
    //   paths: glob.sync(path.join(__dirname, "*.html")),
    // }),
    // 压缩css
    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /\.less\.css$/g,
      cssProcessor: require("cssnano"),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true,
    }),
    // 开启gzip压缩
    // new CompressionPlugin({
    //   filename: '[path].gz[query]', //目标资源名称。[file] 会被替换成原资源。[path] 会被替换成原资源路径，[query] 替换成原查询字符串
    //   algorithm: "gzip", //算法
    //   test: new RegExp(
    //     "\\.(js|css)$" //压缩 js 与 css
    //   ),
    //   threshold: 10240, //只处理比这个值大的资源。按字节计算
    //   minRatio: 0.8, //只有压缩率比这个值小的资源才会被处理
    // }),
  ],
  optimization: {
    minimize: true,
    usedExports: true, // Tree shaking用
    minimizer: [
      new OptimizeCSSAssetsPlugin({}),
      // 为方便看效果，先关闭压缩js代码插件
      // new TerserPlugin({
      //   test: /\.js(\?.*)?$/i,
      // }),
    ],
    // 代码分割
    splitChunks: {
      chunks: "all",
      minSize: 30000,
      maxSize: 50000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          // filename: 'vendors.js',
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
          filename: 'vendors.js',
        }
      }
    }
  },
};
