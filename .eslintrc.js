module.export = {
  env: {
    "es6": true,
    "browser": true,
    "node": true
  },
  parserOptions: {
    "parser": 'babel-eslint',
    "ecmaFeatures": {
      "jsx": true,
      "modules": true
    }
  },
  extends: [
    'plugin:vue/essential',
    'standard'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': 'error'
  }
}