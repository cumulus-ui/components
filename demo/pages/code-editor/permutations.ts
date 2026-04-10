import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
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
export class CodeEditorPermutationsPage extends PermutationsPageBase {

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
