const requiredModules = ['eslint-plugin-jsx-a11y', 'eslint-plugin-react']

const plugins = ['./js']

try {
  requiredModules.forEach(require.resolve)

  plugins.push('./jsx_a11y')
  plugins.push('./react')
} catch (e) {
  console.error([
    '@f3rno/eslint-config: modules required for react config are missing:',
    ...requiredModules
  ].join(' '))
}

module.exports = { extends: plugins }
