import { Rule } from 'eslint';

const MOJIBAKE_PATTERN = /[\uFFFD\u{FFFD}\u{FE63}\u{FF1F}]/gu;

const rule: Rule.RuleModule = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Detect mojibake (garbled characters) in source code',
      category: 'Possible Problems',
      recommended: true,
    },
    schema: [],
    messages: {
      mojibakeDetected: '文字化けが検出されました。文字コードを確認してください。',
    },
  },

  create(context) {
    return {
      Program(node) {
        const sourceCode = context.sourceCode;
        const text = sourceCode.text;
        let match;

        while ((match = MOJIBAKE_PATTERN.exec(text)) !== null) {
          const pos = sourceCode.getLocFromIndex(match.index);

          context.report({
            node,
            loc: {
              start: pos,
              end: {
                line: pos.line,
                column: pos.column + 1
              }
            },
            messageId: 'mojibakeDetected',
          });
        }
      },
    };
  },
};

export default rule; 