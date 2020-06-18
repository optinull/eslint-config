module.exports = {
  plugins: ['package-json'],
  rules: {
    'package-json/valid-package-def': 1,
    'package-json/order-properties': [2, [
      'name',
      'version',
      'private',
      'license',
      'description',
      'author',
      'contributors',
      'main',
      'engines',
      'browser',
      'files',
      'bin',
      'directories',
      'repository',
      'homepage',
      'bugs',
      'keywords',
      'scripts',
      'publishConfig',
      'config',
      'build',
      'browserslist',
      'dependencies',
      'devDependencies',
      'peerDependencies',
      'optionalDependencies',
      'bundledDependencies'
    ]],

    'package-json/sort-collections': [2, [
      'scripts', 'devDependencies', 'dependencies', 'peerDependencies',
      'config', 'build', 'engines', 'bugs', 'repository'
    ]]
  }
}
