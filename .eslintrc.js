module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'react-app',
    'react-app/jest',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 'warn',
    'react/prop-types': 'off',
    'no-console': 'warn',
    'semi': ['warn', 'always'],
    'quotes': ['warn', 'single'],
    'comma-dangle': ['warn', 'always-multiline'],
  },
};