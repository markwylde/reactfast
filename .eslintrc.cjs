module.exports = {
  extends: [
    'standard'
  ],
  plugins: [
    '@typescript-eslint'
  ],
  globals: {
    JSX: 'readonly'
  },
  ignorePatterns: ['dist'],
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error']
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    jsxPragma: 'h',
    jsxFragmentName: 'Component',
    ecmaVersion: 2021,
    sourceType: 'module'
  },

  rules: {
    'object-property-newline': [
      'error',
      { allowAllPropertiesOnSameLine: false }
    ],
    'semi': ['error', 'always'],
    'no-extra-semi': 'error',
    'quote-props': ['error', 'consistent-as-needed'],
    'no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^Component$'
      }
    ]
  }
};
