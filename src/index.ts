import type { OxfmtConfig } from 'oxfmt';

const config: OxfmtConfig = {
  ignorePatterns: ['dist/**', 'generated/**'],
  printWidth: 120,
  tabWidth: 2,
  singleQuote: true,
  arrowParens: 'avoid',
  endOfLine: 'lf',
  semi: true,
  bracketSameLine: true,
  bracketSpacing: true,
  insertFinalNewline: true,
  jsxSingleQuote: false,
  useTabs: false,
  trailingComma: 'all',
  embeddedLanguageFormatting: 'auto',
  objectWrap: 'preserve',
  singleAttributePerLine: false,
  quoteProps: 'as-needed',
  proseWrap: 'preserve',
  sortPackageJson: true,
  jsdoc: false,
  sortTailwindcss: true,
  sortImports: {
    groups: ['builtin', 'external', 'subpath', 'internal', 'index', 'sibling', 'parent', 'type', 'style', 'unknown'],
    newlinesBetween: false,
    internalPattern: ['~/', '@/'],
    customGroups: [],
    ignoreCase: true,
    order: 'asc',
    sortSideEffects: false,
    partitionByNewline: false,
    partitionByComment: false,
  },
};

export default config;
