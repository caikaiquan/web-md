const path = require('path');
const webpack = require('webpack'); // webpack自带的热更新插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { entry, htmlPlugins } = require('./common.js')
module.exports = {
  entry,
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "js/[name].[hash:5].js",
    publicPath: "",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
  // 插件
  plugins: [
    new CleanWebpackPlugin(),
    ...htmlPlugins,
    new webpack.HotModuleReplacementPlugin() // 热模块更新插件
  ],
  // 优化
  optimization: {
    // minimize: true, // 定义的插件压缩 bundle
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        terserOptions: {
          compress: {
            // 关键代码
            drop_console: false  // 是否打印输出
          }
        }
      })
    ],
    // 提取公共代码模块
    splitChunks: {
      cacheGroups: {  //缓存组 缓存公共代码
        commons: {  //公共模块 
          name: "commons",
          chunks: "initial",  //入口处开始提取代码
          minSize: 0,      //代码最小多大，进行抽离
          minChunks: 2,    //代码复 2 次以上的抽离
        },
        vendors: {
          test: /node_modules/,
          name: 'vendors',
          minSize: 0,
          minChunks: 1,
          chunks: 'initial',
          priority: 1 // 该配置项是设置处理的优先级，数值越大越优先处理 
        }
      }
    }
  }
}