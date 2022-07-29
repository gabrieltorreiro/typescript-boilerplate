module.exports = {
  env: {
    es2021: true,
    node: true,
    'jest/globals': true
  },
  extends: [
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    'jest'
  ],
  rules: {
    "no-console": "warn",
    "no-useless-constructor": "off"
  }
}
