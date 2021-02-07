module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react-hooks'],
  rules: {
    'prettier/prettier': 1,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/camelcase': 0,
    'react-hooks/exhaustive-deps': 0,
    'arrow-parens': ['warn', 'as-needed'],
    'react/jsx-sort-props': [
      1,
      {
        shorthandLast: true,
      },
    ],
    'sort-imports': [
      1,
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    '@typescript-eslint/no-non-null-assertion': 0,
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  ignorePatterns: ['node_modules/*', 'public/*', 'build/*'],
};
