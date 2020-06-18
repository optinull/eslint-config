module.exports = {
  plugins: ['promise'],
  rules: {
    'promise/param-names': 2,
    'promise/no-return-wrap': 2,
    'promise/always-return': 0,
    'promise/catch-or-return': 2,
    'promise/prefer-await-to-callbacks': 0,
    'promise/prefer-await-to-then': 0,
    'promise/no-native': 2,
    'promise/no-callback-in-promise': 2,
    'promise/no-promise-in-callback': 2,
    'promise/no-nesting': 2,
    'promise/avoid-new': 0,
    'promise/no-new-statics': 2,
    'promise/no-return-in-finally': 2,
    'promise/valid-params': 0
  }
}
