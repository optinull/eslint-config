module.exports = {
  env: {
    es2020: true,
    es6: true
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
      'src/**/*.js',
      'test/**/*.js',
      'scripts/**/*.js'
    ],

    extends: ['./lib/js', './lib/js_react'],
    rules: {
      'import/no-commonjs': 2,
      'import/no-nodejs-modules': 2
    }
  }]
}
