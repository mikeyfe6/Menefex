module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ['airbnb', 'eslint:recommended', 'plugin:react/recommended'],

  parser: '@babel/eslint-parser',
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      jsx: true,
      modules: true,
      globalReturn: false,
    },
    ecmaVersion: '12',
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  plugins: ['react'],
  rules: {
    'implicit-arrow-linebreak': 0,
    'operator-linebreak': 0,
    'max-len': 0,
    'object-curly-newline': ['warn', { consistent: true }],
    'no-anonymous-exports-page-templates': 0,
    'limited-exports-page-templates': 0,
    'no-undef': 0,
    'function-paren-newline': 0,
    'react/jsx-curly-newline': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/display-name': [0, { ignoreTranspilerName: 0 }],
    'react/jsx-indent': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
  },
};
