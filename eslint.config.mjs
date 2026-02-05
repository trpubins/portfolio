import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import next from '@next/eslint-plugin-next';

export default defineConfig([
  {
    files: ['{src}/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@next/next': next,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...next.configs.recommended.rules,
    },
  },
  {
    ignores: ['node_modules', '.next', 'out', 'dist', 'coverage'],
  },
]);
