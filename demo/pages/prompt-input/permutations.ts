import { html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import '../../../src/prompt-input/index.js';

@customElement('prompt-input-permutations-page')
export class PromptInputPermutationsPage extends PermutationsPageBase {
  static override styles = [...PermutationsPageBase.styles, css`
    .row { display: flex; flex-direction: column; gap: 12px; max-width: 500px; }
    `];

  @state() private _value1 = '';
  @state() private _value2 = 'Pre-filled text';

  override render() {
    return html`
      <h2>Prompt Input — Permutations</h2>

      <section>
        <h3>Default</h3>
        <div class="row">
          <cs-prompt-input
            .value=${this._value1}
            placeholder="Ask me anything..."
            aria-label="Chat input"
            @change=${(e: CustomEvent) => { this._value1 = e.detail.value; }}
          ></cs-prompt-input>
        </div>
      </section>

      <section>
        <h3>With value</h3>
        <div class="row">
          <cs-prompt-input
            .value=${this._value2}
            aria-label="Prompt"
            @change=${(e: CustomEvent) => { this._value2 = e.detail.value; }}
          ></cs-prompt-input>
        </div>
      </section>

      <section>
        <h3>Disabled</h3>
        <div class="row">
          <cs-prompt-input value="Cannot edit this" disabled aria-label="Disabled input"></cs-prompt-input>
        </div>
      </section>

      <section>
        <h3>Read only</h3>
        <div class="row">
          <cs-prompt-input value="Read-only content" read-only aria-label="Read-only input"></cs-prompt-input>
        </div>
      </section>
    `;
  }
}

export const tagName = 'prompt-input-permutations-page';
