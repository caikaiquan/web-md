const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');
const path = require('path');
const ip = require('ip').address();
const config = merge(common,{})
module.exports = merge(common, {
  mode: 'development',
  devServer: {
    // 运行代码的目录
    contentBase: path.resolve(__dirname, 'dist'),
    host: ip, // 服务地址
    port: 8080, // 端口号
    open: false, // 自动打开浏览器
    clientLogLevel: 'none', // 不要显示启动服务器日志信息
    quiet: true, // 除了一些基本启动信息以外，其他内容都不要显示
    proxy: {
      // 一旦devServer(5000)服务器接受到/api/xxx 的请求，就会把请求转发到另外一个服务器(3000)
      '/api': {
        target: 'http://localhost:3000',
        // 发送请求时，请求路径重写：将/api/xxx --> /xxx （去掉/api）
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
});