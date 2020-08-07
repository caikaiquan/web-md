const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  // 环境配置
  mode: "development",
  // 入口
  entry: {
    index: path.join(__dirname, 'src/index.js')
  },
  // 出口
  output: {
    filename: "[name].js",
    path: path.join(__dirname, 'dist/js')
  },
  // 资源管理
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: "[name].[hash:5].[ext]",
            esModule: false,     // 打包图片地址是[object%20Module]问题
            publicPath: 'images', // 资源路径
            outputPath: '../images', // 打包后文件夹名称
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({ cleanAfterEveryBuildPatterns: ['dist'] }),
  ]
}