
const webpack = require('webpack')
const { merge } = require('webpack-merge')

const base = require('./webpack.base')

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = merge(base, {
  mode: 'production',
  devtool: 'nosources-source-map',
  plugins: [
    // new BundleAnalyzerPlugin(), // 打包体积优化
    new CompressionPlugin({
      algorithm: 'gzip',
      threshold: 1024 * 10,
      minRatio: 0.8
    }),
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_DEV: JSON.stringify('production')
        }
      }
    })
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(), // 去重压缩css
      new TerserPlugin({ // 去重压缩js
        terserOptions: {
          compress: {
            drop_console: true, // 去除console
          }
        }
      })
    ]
  }
})