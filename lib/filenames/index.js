module.exports = {
  plugins: ['filenames'],
  rules: {
    'filenames/match-regex': 0,
    'filenames/match-exported': [2, 'snake'],
    'filenames/no-index': 0
  }
}
