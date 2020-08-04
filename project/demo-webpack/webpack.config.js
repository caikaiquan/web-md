// const path = require('path')
// const webpack = require('webpack'); // webpack自带的热更新插件
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const TerserPlugin = require('terser-webpack-plugin');
// const ip = require('ip').address()
// module.exports = {
//   mode: 'production',
//   entry: {
//     index: './src/pages/index/index.js',
//     home: './src/pages/home/home.js',
//   },
//   output: {
//     path: path.resolve(__dirname, "dist"),
//     filename: "js/[name].[hash:5].js",
//     publicPath: "",
//   },
//   devServer: {
//     // 运行代码的目录
//     contentBase: path.resolve(__dirname, 'dist'),
//     host: ip, // 服务地址
//     port: 8080, // 端口号
//     open: false, // 自动打开浏览器
//     clientLogLevel: 'none', // 不要显示启动服务器日志信息
//     quiet: true, // 除了一些基本启动信息以外，其他内容都不要显示
//     proxy: {
//       // 一旦devServer(5000)服务器接受到/api/xxx 的请求，就会把请求转发到另外一个服务器(3000)
//       '/api': {
//         target: 'http://localhost:3000',
//         // 发送请求时，请求路径重写：将/api/xxx --> /xxx （去掉/api）
//         pathRewrite: {
//           '^/api': ''
//         }
//       }
//     },
//     after: function (app, server, compiler) {
//       console.log('devServer-after',new Date().getTime())
//     }
//   },
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader']
//       },
//       {
//         test: /\.less$/,
//         use: ['style-loader', 'css-loader', 'less-loader']
//       }
//     ]
//   },
//   // 插件
//   plugins: [
//     new CleanWebpackPlugin(),
//     new HtmlWebpackPlugin({
//       title: '首页',
//       filename: 'index.html',
//       template: './src/pages/index/index.html',
//       minify: { // 压缩HTML文件
//         // removeComments: true, // 移除HTML中的注释
//         // collapseWhitespace: true, // 删除空白符与换行符
//         // minifyCSS: true// 压缩内联css
//       },
//       chunks: ['index']
//     }),
//     new HtmlWebpackPlugin({
//       title: 'Home',
//       filename: 'home.html',
//       template: './src/pages/home/home.html',
//       minify: { // 压缩HTML文件
//         removeComments: true, // 移除HTML中的注释
//         collapseWhitespace: true, // 删除空白符与换行符
//         minifyCSS: true// 压缩内联css
//       },
//       chunks: ['home']
//     }),
//     new webpack.HotModuleReplacementPlugin() // 热模块更新插件
//   ],
//   // 优化
//   optimization: {
//     // minimize: true, // 定义的插件压缩 bundle
//     minimizer: [
//       new TerserPlugin({
//         cache: true,
//         parallel: true,
//         sourceMap: true,
//         terserOptions: {
//           compress: {
//             // 关键代码
//             drop_console: false  // 是否打印输出
//           }
//         }
//       })
//     ],
//     // 提取公共代码模块
//     splitChunks: {
//       cacheGroups: {  //缓存组 缓存公共代码
//         commons: {  //公共模块 
//           name: "commons",
//           chunks: "initial",  //入口处开始提取代码
//           minSize: 0,      //代码最小多大，进行抽离
//           minChunks: 2,    //代码复 2 次以上的抽离
//         },
//         vendors: {
//           test: /node_modules/,
//           name: 'vendors',
//           minSize: 0,
//           minChunks: 1,
//           chunks: 'initial',
//           priority: 1 // 该配置项是设置处理的优先级，数值越大越优先处理 
//         }
//       }
//     }
//   }
// }