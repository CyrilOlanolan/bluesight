module.exports = {
  extends: ['../../.eslintrc.js'],
  settings: {
    'import/ignore': ['node_modules/react-native/index\\.js$'], // Recommended fix based on the forums
    'import/resolver': {
      typescript: {
        project: ['./src'],
      },
    },
  },
};
