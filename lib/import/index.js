module.exports = {
  plugins: ['import'],
  rules: {
    'import/no-unresolved': [2, {
      commonjs: true,
      amd: true
    }],
    'import/named': 2,
    'import/default': 2,
    'import/namespace': 2,
    'import/no-namespace': 1,
    'import/export': 2,
    'import/no-mutable-exports': 2,
    'import/extensions': 2,
    'import/no-restricted-paths': 1,
    'import/group-exports': 2,
    'import/no-relative-parent-imports': 0,
    'import/no-self-import': 2,
    'import/no-cycle': [2, {
      ignoreExternal: true,
      commonjs: true,
      amd: true
    }],
    'import/no-named-default': 2,
    'import/no-named-as-default': 2,
    'import/no-named-as-default-member': 2,
    'import/no-anonymous-default-export': 0,
    'import/no-unused-modules': [1, {
      unusedExports: true
    }],
    'import/no-commonjs': 0,
    'import/no-amd': 2,
    'import/no-duplicates': 2,
    'import/first': 2,
    'import/max-dependencies': [1, {
      max: 14
    }],
    'import/no-extraneous-dependencies': 2,
    'import/no-absolute-path': [2, {
      esmodule: true,
      commonjs: true,
      amd: false
    }],
    'import/no-webpack-loader-syntax': 2,
    'import/order': 2,
    'import/newline-after-import': 2,
    'import/prefer-default-export': 2,
    'import/no-default-export': 0,
    'import/no-named-export': 0,
    'import/no-dynamic-require': 1,
    'import/unambiguous': 0,
    'import/no-unassigned-import': 0,
    'import/no-useless-path-segments': 2,
    'import/dynamic-import-chunkname': 0,
    'import/exports-last': 2,
    'import/no-deprecated': 2,
    'import/imports-first': 2
  }
}
