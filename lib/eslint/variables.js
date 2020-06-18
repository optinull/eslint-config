module.exports = {
  rules: {
    'init-declarations': 2,
    'no-delete-var': 2,
    'no-label-var': 2,
    'no-restricted-globals': 0,
    'no-shadow': [2, {
      allow: ['reject', 'resolve', 'cb', 'err', 'error']
    }],
    'no-shadow-restrited-names': 0,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-undefined': 2,
    'no-unused-vars': [2, {
      vars: 'all',
      args: 'none',
      ignoreRestSiblings: true
    }],
    'no-use-before-define': [2, {
      functions: false,
      classes: false,
      variables: false
    }]
  }
}
