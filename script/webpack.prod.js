
const webpack = require('webpack')
const { merge } = require('webpack-merge')

const base = require('./webpack.base')

module.exports = merge(base, {
  mode: 'production',
  devtool: 'nosources-source-map',
  plugins: [
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_DEV: JSON.stringify('production')
        }
      }
    })
  ]
})