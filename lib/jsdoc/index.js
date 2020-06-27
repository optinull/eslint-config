module.exports = {
  plugins: ['jsdoc'],

  settings: {
    jsdoc: {
      maxLines: 1,
      minLines: 1,
      mode: 'jsdoc',
      ignorePrivate: true
    }
  },

  rules: {
    'jsdoc/check-access': 2,
    'jsdoc/check-alignment': 2,
    'jsdoc/check-examples': 0,
    'jsdoc/check-indentation': 0,
    'jsdoc/check-param-names': 2,
    'jsdoc/check-syntax': 0,
    'jsdoc/check-tag-names': 2,
    'jsdoc/check-types': 2,
    'jsdoc/check-values': [2, {
      allowedLicenses: ['Apache-2.0', 'MIT']
    }],
    'jsdoc/empty-tags': 2,
    'jsdoc/implements-on-classes': 2,
    'jsdoc/match-description': 1,
    'jsdoc/newline-after-description': [2, 'always'],
    'jsdoc/no-types': 0,
    'jsdoc/no-undefined-types': [0, {
      definedTypes: [
        'express.Request', 'express.Response', 'ws.Client', 'ws.Server',
        'LowDB', 'Knex', 'Promise'
      ]
    }],
    'jsdoc/require-description': 2,
    'jsdoc/require-description-complete-sentence': 0,
    'jsdoc/require-example': 1,
    'jsdoc/require-file-overview': 0,
    'jsdoc/require-hyphen-before-param-description': [2, 'always', {
      tags: {
        returns: 'never',
        property: 'always'
      }
    }],
    'jsdoc/require-jsdoc': [2, {
      exemptEmptyFunctions: true,
      publicOnly: false,
      require: {
        ArrowFunctionExpression: true,
        ClassDeclaration: true,
        ClassExpression: true,
        FunctionDeclaration: true,
        FunctionExpression: true,
        MethodDefinition: true
      }
    }],
    'jsdoc/require-param': [2, {
      enableFixer: true,
      checkRestProperty: true,
      checkConstructors: true
    }],
    'jsdoc/require-param-description': 2,
    'jsdoc/require-param-name': 2,
    'jsdoc/require-param-type': 2,
    'jsdoc/require-property': 0,
    'jsdoc/require-property-name': 2,
    'jsdoc/require-property-description': 2,
    'jsdoc/require-property-type': 2,
    'jsdoc/require-returns': [2, {
      forceReturnsWithAsync: true
    }],
    'jsdoc/require-returns-check': 2,
    'jsdoc/require-returns-description': 2,
    'jsdoc/require-returns-type': 2,
    'jsdoc/valid-types': [2, {
      allowEmptyNamepaths: false,
      checkSeesForNamepaths: false
    }]
  }
}
