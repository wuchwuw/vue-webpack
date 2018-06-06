module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "autoprefixer": {},
    "postcss-cssnext": {},
    "postcss-write-svg": { utf8: false },
    "cssnano": {
      "autoprefixer": false,
      "postcss-zindex": false,
      "postcss-zindex": false
    },
    "postcss-px-to-viewport": {
      viewportWidth: 750,
      viewportHeight: 1334,
      unitPrecision: 6,
      viewportUnit: 'vw',
      selectorBlackList: ['.ignore', '.hairlines'],
      minPixelValue: 1,
      mediaQuery: false
    },
    "postcss-viewport-units": {}
  }
}