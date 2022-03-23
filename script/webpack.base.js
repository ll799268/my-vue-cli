
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const { VueLoaderPlugin } = require('vue-loader')

const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const chalk = require('chalk')

module.exports = {
  entry: {
    main: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/chunk-[contenthash].js',
    clean: true
  },
  devServer: {
    port: 9999,
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/chunk-[contenthash].css',
      ignoreOrder: true
    }),
    new VueLoaderPlugin(),
    new ProgressBarPlugin({
      format: `build [:bar] ${ chalk.green.bold(':percent')}(:elapsed seconds)`
    })
  ],
  module: {
    rules: [
      {
        test: /\.(css|s[cs]ss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/,
        type: 'asset',
        parser: {
          // 转base64的条件
          dataUrlCondition: {
            maxSize: 25 * 1024, // 25kb
          }
        },
        generator: {
          filename: 'images/[contenthash][ext][query]'
        }
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, '../src'),
        exclude: /node_modules/,
        use: [
          'cache-loader', // 缓存资源，提高二次构建的速度
          // 'thread-loader', // 多进程打包
          'babel-loader'
        ]
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve('./src'),
      '@assets': '@/assets',
      '@tools': '@/tools'
    },
    // 引入文件时省略后缀
    extensions: ['.js', '.ts', '.scss', '.vue']
  }
}