module.exports = {
  env: {
    es2020: true,
    es6: true,
    node: true
  },

  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true
    }
  },

  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules']
      }
    }
  },

  overrides: [{
    files: ['package.json'],
    extends: ['./lib/json_manifest']
  }, {
    files: [
      '*.js',
      'lib/**/*.js',
      'test/**/*.js',
      'scripts/**/*.js'
    ],

    extends: ['./lib/js', './lib/js_node']
  }]
}
