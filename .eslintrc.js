module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'standard',
  plugins: [
    'html'
  ],
  // settings: {
  //   "html/indent": "0"
  // },
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}