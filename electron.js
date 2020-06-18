module.exports = {
  env: {
    es2020: true,
    es6: true,
    node: true
  },

  globals: {
    window: 'readonly',
    document: 'readonly',
    navigator: 'readonly'
  },

  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },

  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src']
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
      'public/**/*.js',
      'scripts/**/*.js'
    ],

    extends: ['./lib/js', './lib/js_node']
  }, {
    files: ['src/**/*.js'],
    extends: ['./lib/js', './lib/js_react']
  }]
}
