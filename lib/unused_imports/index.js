module.exports = {
  plugins: ['unused-imports'],
  rules: {
    'unused-imports/no-unused-imports-ts': 2,
    'unused-imports/no-unused-vars-ts': 2,
    'unused-imports/no-unused-vars': [2, { vars: 'all' }],
    'unused-imports/no-unused-imports': 2
  }
}
