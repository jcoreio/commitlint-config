module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-case': [0, 'always', ['lowerCase']],
    'header-max-length': [1, 'always', 120],
  },
}
