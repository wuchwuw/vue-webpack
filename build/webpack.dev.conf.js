const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.conf')

const resolve = (dir) => {
  return path.join(__dirname, `../${dir}`)
}

module.exports = merge(baseWebpackConfig, {
  entry: {
    app: resolve('src/main.js')
  },
  output: {
    path: resolve('www'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: 'chunks/[name].[id].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            stylus: 'vue-style-loader!css-loader!stylus-loader'
          },
          postcss: {},
          transformToRequire: {
            video: ['src', 'poster'],
            source: 'src',
            img: 'src',
            image: 'xlink:href'
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': '"development"'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      // favicon: resolve('src/favicon.ico'),
      filename: 'index.html',
      template: 'src/index.html',
      inject: true
    })
  ],
  devServer: {
    contentBase: '../www',
    hot: true,
    historyApiFallback: true, // 任意的404响应都替代为 index.html
    inline: true,
    host: '0.0.0.0',
    disableHostCheck: true
  }
})