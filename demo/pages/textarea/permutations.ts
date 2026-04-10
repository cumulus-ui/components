import { html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import '../../../src/textarea/index.js';

@customElement('textarea-permutations-page')
export class TextareaPermutationsPage extends PermutationsPageBase {
  static override styles = [...PermutationsPageBase.styles, css`
    .row { display: flex; flex-wrap: wrap; gap: 12px; align-items: flex-start; }
    cs-textarea { min-width: 250px; }
    `];

  @state() private _value = 'Some text content';

  override render() {
    return html`
      <h2>Textarea — Permutations</h2>

      <section>
        <h3>Default</h3>
        <div class="row">
          <cs-textarea aria-label="Default textarea" placeholder="Enter text…"></cs-textarea>
        </div>
      </section>

      <section>
        <h3>With value</h3>
        <div class="row">
          <cs-textarea
            aria-label="Textarea with value"
            .value=${this._value}
            @change=${(e: CustomEvent<{ value: string }>) => { this._value = e.detail.value; }}
          ></cs-textarea>
        </div>
      </section>

      <section>
        <h3>Custom rows</h3>
        <div class="row">
          <cs-textarea aria-label="Textarea with 6 rows" rows="6" placeholder="6 rows tall"></cs-textarea>
        </div>
      </section>

      <section>
        <h3>Disabled</h3>
        <div class="row">
          <cs-textarea aria-label="Disabled textarea" value="Cannot edit" disabled></cs-textarea>
        </div>
      </section>

      <section>
        <h3>Read-only</h3>
        <div class="row">
          <cs-textarea aria-label="Read-only textarea" value="Read only text" read-only></cs-textarea>
        </div>
      </section>

      <section>
        <h3>Invalid</h3>
        <div class="row">
          <cs-textarea aria-label="Invalid textarea" value="Bad value" invalid></cs-textarea>
        </div>
      </section>

      <section>
        <h3>Warning</h3>
        <div class="row">
          <cs-textarea aria-label="Warning textarea" value="Caution" warning></cs-textarea>
        </div>
      </section>
    `;
  }
}

export const tagName = 'textarea-permutations-page';
