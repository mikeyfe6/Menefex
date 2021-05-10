module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    commonjs: true,
  },
  extends: ['airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'implicit-arrow-linebreak': 0,
    'react/jsx-one-expression-per-line': 0,
    'operator-linebreak': 0,
    'max-len': 0,
    'object-curly-newline': ['warn', { consistent: true }],
  },
};
