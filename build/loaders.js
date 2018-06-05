const { resolve } = require('./util')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isProd = process.env.NODE_ENV === 'production'

module.exports = [
  {
    test: /\.(js|vue)$/,
    enforce: 'pre',
    loader: 'eslint-loader',
    options: {
      emitWarning: true, // eslint警告
      formatter: require('eslint-friendly-formatter')
    },
    exclude: /node_modules/
  },
  {
    test: /\.js$/,
    loader: 'babel-loader',
    include: [resolve('src')]
  },
  {
    test: /\.vue$/,
    loader: 'vue-loader',
    options: {
      loaders: {
        stylus: [
          isProd ? MiniCssExtractPlugin.loader : 'vue-style-loader',
          'css-loader',
          'stylus-loader'
          // {
          //   loader: 'stylus-resources-loader',
          //   options: {
          //     resources: [
          //       resolve('src/style/color.styl'),
          //       resolve('src/style/mixin.styl')
          //     ]
          //   }
          // }
        ]
      },
      postcss: {}
    }
  }
]