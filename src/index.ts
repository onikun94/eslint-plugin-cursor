import cursor from './rules/cursor';

export = {
  rules: {
    'no-mojibake': cursor,
  },
  configs: {
    recommended: {
      plugins: ['cursor'],
      rules: {
        'cursor/no-mojibake': 'error',
      },
    },
  },
}; 