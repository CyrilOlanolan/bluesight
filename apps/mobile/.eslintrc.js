module.exports = {
  extends: ['../../.eslintrc.js'],
  ignorePatterns: ['src/styles/**'],
  settings: {
    'import/ignore': ['node_modules/react-native/index\\.js$'], // Recommended fix based on the forums
  },
};
