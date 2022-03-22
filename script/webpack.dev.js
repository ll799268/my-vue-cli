
const webpack = require('webpack')
const { merge } = require('webpack-merge')

const base = require('./webpack.base')

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    port: 9999,
    open: true
  },
  devtool: 'eval-cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_DEV: JSON.stringify('development')
        }
      }
    })
  ]
})