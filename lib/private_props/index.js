module.exports = {
  plugins: ['private-props'],
  rules: {
    'private-props/no-unused-or-undeclared': [2, { privateMatchers: ['^_'] }],
    'private-props/no-use-outside': [2, { privateMatchers: ['^_'] }]
  }
}
