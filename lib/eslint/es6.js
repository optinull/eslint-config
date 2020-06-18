module.exports = {
  rules: {
    'arrow-body-style': [2, 'as-needed'],
    'arrow-parens': [2, 'as-needed', { requireForBlockBody: true }],
    'arrow-spacing': [2, { before: true, after: true }],
    'constructor-super': 2,
    'generator-star-spacing': [2, { before: true, after: true }],
    'no-class-assign': 2,
    'no-confusing-arrow': [2, { allowParens: true }],
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-duplicate-imports': [2, { includeExports: true }],
    'no-new-symbol': 2,
    'no-restricted-exports': 0,
    'no-restricted-imports': 0,
    'no-this-before-super': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-rename': 2,
    'no-var': 2,
    'object-shorthand': [2, 'always'],
    'prefer-arrow-callback': 1,
    'prefer-const': [2, { destructuring: 'all' }],

    'prefer-destructuring': [2, {
      array: false,
      object: true
    }, {
      enforceForRenamedProperties: true
    }],

    'prefer-numeric-literals': 0,
    'prefer-rest-params': 2,
    'prefer-spread': 2,
    'prefer-template': 2,
    'require-yield': 2,
    'rest-spread-spacing': [2, 'never'],
    'sort-imports': 0,
    'symbol-description': 2,
    'template-curly-spacing': [2, 'never'],
    'yield-star-spacing': [2, 'both']
  }
}
