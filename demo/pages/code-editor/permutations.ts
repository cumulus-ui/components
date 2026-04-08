import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../../../src/code-editor/index.js';

const sampleCode = `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));`;

const pythonCode = `def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)`;

@customElement('code-editor-permutations-page')
export class CodeEditorPermutationsPage extends LitElement {
  static override styles = css`
    :host {
      display: block;
      padding: 24px;
      font-family: system-ui, sans-serif;
      line-height: 1.15;
    }
    h2 { margin-top: 0; margin-bottom: 0.83em; line-height: 1.15; }
    section {
      margin-bottom: 24px;
      padding: 16px;
      border: 1px solid #e9ebed;
      border-radius: 8px;
    }
    section h3 {
      margin-top: 0;
      margin-bottom: 1em;
      font-size: 14px;
      line-height: 1.15;
      color: #687078;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
  `;

  @state() private _value = sampleCode;

  override render() {
    return html`
      <h2>Code Editor — Permutations</h2>

      <section>
        <h3>Default (JavaScript)</h3>
        <cs-code-editor
          .value=${this._value}
          language="javascript"
          .editorContentHeight=${240}
          @change=${(e: CustomEvent) => { this._value = e.detail.value; }}
        ></cs-code-editor>
      </section>

      <section>
        <h3>Read Only (Python)</h3>
        <cs-code-editor
          .value=${pythonCode}
          language="python"
          read-only
          .editorContentHeight=${200}
        ></cs-code-editor>
      </section>

      <section>
        <h3>Loading State</h3>
        <cs-code-editor
          value=""
          language="javascript"
          loading
          .editorContentHeight=${200}
        ></cs-code-editor>
      </section>

      <section>
        <h3>Empty Editor</h3>
        <cs-code-editor
          value=""
          language="text"
          .editorContentHeight=${120}
        ></cs-code-editor>
      </section>
    `;
  }
}

export const tagName = 'code-editor-permutations-page';
