const { resolve } = require('./util')
const loaders = require('./loaders')

const isProd = process.env.NODE_ENV === 'production'

const config = {
  mode: isProd ? 'production' : 'development',
  entry: {
    main: resolve('src/main.js')
  },
  output: {
    path: resolve('dist'),
    publicPath: '/',
    filename: '[name].[hash:8].js',
    chunkFilename: '[name].[id].[hash:8].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.runtime.esm.js'
    }
  },
  module: {
    rules: loaders
  }
}

module.exports = config