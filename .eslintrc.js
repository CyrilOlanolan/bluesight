module.exports = {
  extends: ['@cyrilolanolan/ts', 'plugin:import/typescript'],
  settings: {
    'import/ignore': ['node_modules', 'react-native'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },

      typescript: {
        project: [
          'apps/**/tsconfig.json',
          'libs/**/tsconfig.json',
          'packages/**/tsconfig.json',
        ],
      },
    },
  },
  ignorePatterns: ['node_modules/**'],
  // Add the following ignore pattern to include specific files or directories
  overrides: [
    {
      files: ['.storybook/**/*.ts', '.storybook/**/*.tsx'],
      rules: {
        // specific rules for .storybook files
      },
    },
  ],
};
