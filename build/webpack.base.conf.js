const path = require('path')
const webpack = require('webpack')

const resolve = (dir) => {
  return path.join(__dirname, `../${dir}`)
}

module.exports = {
  resolve: {
    modules: [resolve('node_modules')],
    extensions: ['.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
          formatter: require('eslint-friendly-formatter')
        }
      }
    ]
  }
}