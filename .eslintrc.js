module.exports = {
    parser: '@babel/eslint-parser',
    parserOptions: {
      sourceType: 'module',
      requireConfigFile: false,
    },
    env: {
      browser: true,
      es6: true,
      node: true,
    },
    plugins: ['react'],
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    settings: {
      react: {
        version: 'detect',
      },
    },
  };