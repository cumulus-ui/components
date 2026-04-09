import { tokenize } from 'ace-code/src/ext/simple_tokenizer';

export function createHighlight(rules: any): (code: string) => string {
  return (code: string) => {
    const tokens = tokenize(code, rules);
    return tokens
      .map(lineTokens =>
        lineTokens
          .map(token => token.className ? `<span class="${token.className}">${escape(token.value)}</span>` : escape(token.value))
          .join('')
      )
      .join('\n');
  };
}

function escape(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
