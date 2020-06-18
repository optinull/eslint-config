module.exports = {
  plugins: ['babel'],
  rules: {
    'babel/camelcase': 2,
    'babel/new-cap': 2,
    'babel/no-invalid-this': 2,
    'babel/no-unused-expressions': [2, {
      allowTaggedTemplates: false,
      allowShortCircuit: false,
      allowTernary: false
    }],
    'babel/object-curly-spacing': [2, 'always'],
    'babel/quotes': [2, 'single'],
    'babel/semi': [2, 'never'],
    'babel/valid-typeof': [2, { requireStringLiterals: true }]
  }
}
