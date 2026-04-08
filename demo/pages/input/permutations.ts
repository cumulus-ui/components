import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../../../src/input/index.js';

@customElement('input-permutations-page')
export class InputPermutationsPage extends LitElement {
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
      margin-top: 0; margin-bottom: 1em;
      font-size: 14px; line-height: 1.15;
      color: #687078; text-transform: uppercase; letter-spacing: 0.5px;
    }
    .row { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }
    cs-input { min-width: 200px; }
  `;

  @state() private _value = 'Hello world';

  override render() {
    return html`
      <h2>Input — Permutations</h2>

      <section>
        <h3>Default</h3>
        <div class="row">
          <cs-input aria-label="Default input" placeholder="Type something…"></cs-input>
        </div>
      </section>

      <section>
        <h3>With value</h3>
        <div class="row">
          <cs-input
            aria-label="Input with value"
            .value=${this._value}
            @change=${(e: CustomEvent<{ value: string }>) => { this._value = e.detail.value; }}
          ></cs-input>
        </div>
      </section>

      <section>
        <h3>Disabled</h3>
        <div class="row">
          <cs-input aria-label="Disabled input" value="Cannot edit" disabled></cs-input>
        </div>
      </section>

      <section>
        <h3>Read-only</h3>
        <div class="row">
          <cs-input aria-label="Read-only input" value="Read only text" read-only></cs-input>
        </div>
      </section>

      <section>
        <h3>Invalid</h3>
        <div class="row">
          <cs-input aria-label="Invalid input" value="Bad value" invalid></cs-input>
        </div>
      </section>

      <section>
        <h3>Warning</h3>
        <div class="row">
          <cs-input aria-label="Warning input" value="Caution" warning></cs-input>
        </div>
      </section>

      <section>
        <h3>With clear button</h3>
        <div class="row">
          <cs-input aria-label="Clearable input" value="Clear me" clear-aria-label="Clear input"></cs-input>
        </div>
      </section>

      <section>
        <h3>Types</h3>
        <div class="row">
          <cs-input aria-label="Password input" type="password" placeholder="Password"></cs-input>
          <cs-input aria-label="Number input" type="number" placeholder="Number" step="1"></cs-input>
          <cs-input aria-label="Search input" type="search" placeholder="Search…"></cs-input>
        </div>
      </section>
    `;
  }
}

export const tagName = 'input-permutations-page';
