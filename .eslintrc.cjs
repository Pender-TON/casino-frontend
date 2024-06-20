/* eslint-disable no-undef */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
    'prettier'
  ],

  plugins: ['@typescript-eslint', 'react', '@tanstack/query', 'prettier'],

  rules: {
    'no-console': 'error',
    'no-unsafe-optional-chaining': 'error',

    'prettier/prettier': 'error',

    // TypeScript
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        caughtErrors: 'all',
        ignoreRestSiblings: true
      }
    ],

    // React
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/jsx-curly-spacing': 'off',
    'react/jsx-uses-react': 'off',
    // suppress errors for missing 'import React' in files
    'react/react-in-jsx-scope': 'off',
    'react/no-array-index-key': 'warn',
    'react/no-children-prop': 'off',
    'react/destructuring-assignment': ['error', 'always'],
    'react/jsx-boolean-value': 'error',
    'react/jsx-fragments': ['error', 'element'],
    'react/jsx-handler-names': 'error',
    'react/jsx-sort-props': [
      2,
      {
        callbacksLast: true,
        multiline: 'last',
        noSortAlphabetically: false
      }
    ],

    // Tanstack Query
    '@tanstack/query/exhaustive-deps': 'error',
    '@tanstack/query/no-rest-destructuring': 'warn',
    '@tanstack/query/stable-query-client': 'error'
  },
  settings: {
    'import/resolver': {
      typescript: true
    },
    react: {
      version: 'detect'
    }
  }
}
