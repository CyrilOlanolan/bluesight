module.exports = {
  extends: ['@cyrilolanolan/ts'],
  settings: {
    'import/resolver': {
      typescript: {
        project: [
          'apps/**/tsconfig.json',
          'libs/**/tsconfig.json',
          'packages/**/tsconfig.json',
        ],
      },
    },
  },
};
