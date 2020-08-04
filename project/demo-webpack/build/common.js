const HtmlWebpackPlugin = require('html-webpack-plugin');
/**
 * 统一配置打包文件
 * entry 入口
 * **/
const entry = {
  index: './src/pages/index/index.js',
  home: './src/pages/home/home.js',
}


const htmlPlugins = [
  new HtmlWebpackPlugin({
    title: '首页',
    filename: 'index.html',
    template: './src/pages/index/index.html',
    minify: { // 压缩HTML文件
      // removeComments: true, // 移除HTML中的注释
      // collapseWhitespace: true, // 删除空白符与换行符
      // minifyCSS: true// 压缩内联css
    },
    chunks: ['index']
  }),
  new HtmlWebpackPlugin({
    title: 'Home',
    filename: 'home.html',
    template: './src/pages/home/home.html',
    minify: { // 压缩HTML文件
      removeComments: true, // 移除HTML中的注释
      collapseWhitespace: true, // 删除空白符与换行符
      minifyCSS: true// 压缩内联css
    },
    chunks: ['home']
  }),
]

module.exports = {
  entry,
  htmlPlugins
}