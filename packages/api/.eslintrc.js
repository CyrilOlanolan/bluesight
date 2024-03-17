module.exports = {
  extends: ['../../.eslintrc.js'],
  env: {
    node: true,
    jest: true,
  },
  rules: {
    // Some classes are erroneously inferred as type-only
    '@typescript-eslint/consistent-type-imports': 0,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: ['./src'],
      },
    },
  },
};
