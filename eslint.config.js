import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    files: ['src/**/*.{js,jsx}', 'scripts/**/*.{js,mjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^React$' }],
      'no-console': 'off',
      'no-empty': 'off',
    },

  },
  {
    ignores: ['dist/**', 'node_modules/**', '.temp_asset_build/**', 'source-assets/**'],
  },
];
