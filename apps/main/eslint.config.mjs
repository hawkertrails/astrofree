import eslintConfigPrettier from 'eslint-config-prettier/flat';
import eslintPluginAstro from 'eslint-plugin-astro';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const scriptFiles = ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'];

export default [
  {
    ignores: ['dist/**', 'node_modules/**', '.astro/**'],
  },
  ...eslintPluginAstro.configs.recommended,
  ...tseslint.configs.recommended.map((c) => ({ ...c, files: scriptFiles })),
  {
    files: scriptFiles,
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'linebreak-style': ['error', 'unix'],
      quotes: 'off',
      '@typescript-eslint/quotes': 'off',
      semi: ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      indent: 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    files: ['**/*.test.ts', '**/*.test.tsx'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  eslintConfigPrettier,
];
