module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    'cypress/globals': true
  },
  extends: [
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    'no-async-promise-executor': 'off'
  },
  plugins: [
    'cypress'
  ]
}
