module.exports = {
  plugins: ['mocha-cleanup'],
  rules: {
    'mocha-cleanup/asserts-limit': 0,
    'mocha-cleanup/complexity-it': [2, { maxAllowedComplexity: 40 }],
    'mocha-cleanup/disallow-stub-spy-restore-in-it': 2,
    'mocha-cleanup/disallow-stub-window': 0,
    'mocha-cleanup/disallowed-usage': 0,
    'mocha-cleanup/invalid-assertions': 2,
    'mocha-cleanup/no-assertions-in-loop': 0,
    'mocha-cleanup/no-assertions-outside-it': 2,
    'mocha-cleanup/no-empty-body': 2,
    'mocha-cleanup/no-empty-title': 2,
    'mocha-cleanup/no-eql-primitives': 0,
    'mocha-cleanup/no-expressions-in-assertions': 2,
    'mocha-cleanup/no-nested-it': 2,
    'mocha-cleanup/no-outside-declaration': 0,
    'mocha-cleanup/no-same-titles': 2
  }
}
