const common = require('./webpack.common.js')
const { merge } = require('webpack-merge');

const config = merge(common,{})
module.exports = merge(common, {
  mode: 'production',
});