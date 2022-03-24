const webpack = require('webpack')
const { merge } = require('webpack-merge')

const ESLintPlugin = require('eslint-webpack-plugin')
const base = require('./webpack.base')

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    port: 9999,
    open: true,
    hot: true // 热更新
  },
  devtool: 'eval-cheap-module-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // 热更新
    new ESLintPlugin({
      fix: true,
    }),
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_DEV: JSON.stringify('development')
        }
      }
    })
  ]
})