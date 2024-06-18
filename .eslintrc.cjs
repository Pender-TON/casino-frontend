module.exports = {
  extends: ['plugin:prettier/recommended', 'prettier', '@tanstack/query'],

  rules: {
    // Tanstack Query
    '@tanstack/query/exhaustive-deps': 'error',
    '@tanstack/query/no-rest-destructuring': 'warn',
    '@tanstack/query/stable-query-client': 'error',
  },
};
