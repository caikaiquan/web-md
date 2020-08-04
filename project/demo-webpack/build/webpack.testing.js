const common = require('./webpack.common.js')
const { merge } = require('webpack-merge');
const webpack = require('webpack');
module.exports = merge(common,
  {
    mode: 'development',
    plugins: [
      // 配置beta打包环境参数
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('testing')
        }
      })
    ]
  }
);