module.exports = {
  plugins: ['promise-catch'],
  rules: {
    'promise-catch/throw-or-log': [2, {
      customLoggers: true
    }]
  }
}
