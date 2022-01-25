module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  globals: {
    suite: true,
    setup: true,
    teardown: true,
    suiteTeardown: true,
    test: true,
    mocha: true,
    ace: true,
    CVSS: true,
    CVSS31: true,
  },
  rules: {
    'no-unused-params': 0,
    'no-empty-pattern': 0,
    'react/prop-types': 0,
    'react/display-name': 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
