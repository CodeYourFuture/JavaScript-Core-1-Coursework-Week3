module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/recommended',
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    'max-len': 0,
    'no-console': 'off',
    'no-plusplus': 'off',
  },
  plugins: ['jest'],
};
