module.exports = {
  rules: {
    'array-bracket-newline': 0,
    'array-bracket-spacing': [2, 'never'],
    'array-element-newline': 0,

    'block-spacing': [2, 'always'],
    'brace-style': [2, '1tbs', { allowSingleLine: true }],
    camelcase: [2, { properties: 'never' }],
    'capitalized-comments': 0,
    'comma-dangle': [2, {
      arrays: 'never',
      objects: 'never',
      imports: 'never',
      exports: 'never',
      functions: 'never'
    }],
    'comma-style': [2, 'last'],
    'comma-spacing': [2, { before: false, after: true }],
    'computed-property-spacing': [2, 'never'],
    'consistent-this': 0,
    'eol-last': 2,
    'func-call-spacing': [2, 'never'],
    'func-name-matching': 1,
    'func-names': [2, 'as-needed'],
    'func-style': [2, 'expression', { allowArrowFunctions: true }],
    'function-call-argument-newline': [2, 'never'],
    'function-paren-newline': [2, 'consistent'],
    'id-blacklist': 0,
    'id-length': 0,
    'id-match': 0,
    'implicit-arrow-linebreak': [2, 'beside'],
    indent: [2, 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      MemberExpression: 1,
      FunctionDeclaration: { parameters: 1, body: 1 },
      FunctionExpression: { parameters: 1, body: 1 },
      CallExpression: { arguments: 1 },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      ignoreComments: false,
      ignoredNodes: ['TemplateLiteral *']
    }],
    'jsx-quotes': [2, 'prefer-single'],
    'key-spacing': [2, {
      beforeColon: false,
      afterColon: true
    }],

    'keyword-spacing': [2, { before: true, after: true }],
    'line-comment-position': 0,
    'linebreak-style': 0,
    'lines-around-comment': [2, {
      beforeBlockComment: true,
      afterBlockComment: false,
      applyDefaultIgnorePatterns: true
    }],

    'lines-between-class-members': [2, 'always', {
      exceptAfterSingleLine: true
    }],

    'max-depth': [2, { max: 5 }],
    'max-len': [2, {
      code: 80,
      tabWidth: 2,
      ignoreUrls: true,
      ignoreRegExpLiterals: true,
      ignoreTrailingComments: true
    }],

    'max-lines': [1, { max: 800 }],
    'max-lines-per-function': [1, { max: 40 }],
    'max-nested-callbacks': [1, { max: 4 }],
    'max-params': [1, { max: 5 }],
    'max-statements': 0,
    'max-statements-per-line': 0,

    'multiline-comment-style': [1, 'starred-block'],
    'multiline-ternary': [2, 'always-multiline'],
    'new-cap': [2, { newIsCap: true, capIsNew: false, properties: true }],
    'new-parens': 2,
    'newline-per-chained-call': 0,
    'no-array-constructor': 2,
    'no-bitwise': 0,
    'no-continue': 0,
    'no-inline-comments': 0,
    'no-lonely-if': 2,
    'no-mixed-operators': [2, {
      allowSamePrecedence: true,
      groups: [
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof']
      ]
    }],
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-assign': 2,
    'no-multiple-empty-lines': [2, { max: 1, maxBOF: 0, maxEOF: 1 }],
    'no-negated-condition': 2,
    'no-nested-ternary': 0,
    'no-new-object': 2,
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    'no-restricted-syntax': 0,
    'no-tabs': 2,
    'no-ternary': 0,
    'no-trailing-spaces': 2,
    'no-underscore-dangle': 0,
    'no-unneeded-ternary': [2, { defaultAssignment: false }],
    'no-whitespace-before-property': 2,
    'nonblock-statement-body-position': 0,
    'object-curly-newline': [2, { multiline: true, consistent: true }],
    'object-curly-spacing': [2, 'always'],
    'object-property-newline': [2, { allowMultiplePropertiesPerLine: true }],
    'one-var': [2, { initialized: 'never' }],
    'one-var-declaration-per-line': 0,
    'operator-assignment': 0,
    'operator-linebreak': [2, 'after', {
      overrides: {
        '?': 'before',
        ':': 'before',
        '|>': 'before'
      }
    }],

    'padded-blocks': [2, {
      blocks: 'never',
      switches: 'never',
      classes: 'never'
    }],

    'padding-line-between-statements': 0,
    'prefer-exponentiation-operator': 1,
    'prefer-object-spread': 2,
    'quote-props': [2, 'as-needed'],
    quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    semi: [2, 'never'],
    'semi-spacing': [2, { before: false, after: true }],
    'semi-style': 0,
    'sort-keys': 0,
    'sort-vars': 0,
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, 'always'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [2, {
      words: true,
      nonwords: false
    }],

    'spaced-comment': [2, 'always', {
      line: { markers: ['*package', '!', '/', ',', '='] },
      block: {
        balanced: true,
        markers: ['*package', '!', ',', ':', '::', 'flow-include'],
        exceptions: ['*']
      }
    }],

    'switch-colon-spacing': [2, { after: true, before: false }],
    'template-tag-spacing': [2, 'never'],
    'unicode-bom': [2, 'never'],
    'wrap-regex': 0
  }
}
