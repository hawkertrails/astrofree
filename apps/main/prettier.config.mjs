/** @type {import("prettier").Config} */
export default {
  bracketSpacing: true,
  semi: true,
  trailingComma: 'all',
  printWidth: 100,
  tabWidth: 2,
  singleQuote: true,
  plugins: [
    'prettier-plugin-astro',
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  overrides: [
    {
      files: '*.astro',
      options: { parser: 'astro' },
    },
  ],
  importOrder: [
    '(^(react/(.*)$)|^(react$))',
    '<THIRD_PARTY_MODULES>',
    '^@/styles/(.*)$',
    '^@/lib/(.*)$',
    '^@/components/(.*)$',
    '^@/hooks/(.*)$',
    '^@/emails/(.*)$',
    '^@/pages/(.*)$',
  ],
  importOrderSortSpecifiers: true,
  importOrderSeparation: true,
  importOrderCaseInsensitive: true,
};
