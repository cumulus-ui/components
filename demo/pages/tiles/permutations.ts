import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../../../src/tiles/index.js';

@customElement('tiles-permutations-page')
export class TilesPermutationsPage extends LitElement {
  static override styles = css`
    :host {
      display: block;
      padding: 24px;
      font-family: system-ui, sans-serif;
      line-height: 1.15;
    }
    h2 {
      margin-top: 0;
      margin-bottom: 0.83em;
      line-height: 1.15;
    }
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
    .result {
      margin-top: 8px;
      font-size: 13px;
      color: #0972d3;
      font-family: monospace;
    }
  `;

  @state() private _value1 = 't1';
  @state() private _value2 = '';

  override render() {
    return html`
      <h2>Tiles — Permutations</h2>

      <section>
        <h3>Default (3 columns)</h3>
        <cs-tiles
          .value=${this._value1}
          .items=${[
            { value: 't1', label: 'Tile One', description: 'First tile description' },
            { value: 't2', label: 'Tile Two', description: 'Second tile description' },
            { value: 't3', label: 'Tile Three', description: 'Third tile description' },
          ]}
          ariaLabel="Default tiles"
          @change=${(e: CustomEvent) => { this._value1 = e.detail.value; }}
        ></cs-tiles>
        <div class="result">Selected: ${this._value1}</div>
      </section>

      <section>
        <h3>2 Columns</h3>
        <cs-tiles
          .columns=${2}
          .value=${this._value2}
          .items=${[
            { value: 'a', label: 'Alpha', description: 'Option Alpha details' },
            { value: 'b', label: 'Beta', description: 'Option Beta details' },
            { value: 'c', label: 'Gamma', description: 'Option Gamma details' },
            { value: 'd', label: 'Delta', description: 'Option Delta details' },
          ]}
          ariaLabel="Two-column tiles"
          @change=${(e: CustomEvent) => { this._value2 = e.detail.value; }}
        ></cs-tiles>
        <div class="result">Selected: ${this._value2 || '(none)'}</div>
      </section>

      <section>
        <h3>With Disabled Tiles</h3>
        <cs-tiles
          value="enabled-a"
          .items=${[
            { value: 'enabled-a', label: 'Available', description: 'This tile is selectable' },
            { value: 'disabled-a', label: 'Unavailable', description: 'This tile is disabled', disabled: true },
            { value: 'enabled-b', label: 'Also Available', description: 'This tile is selectable too' },
          ]}
          ariaLabel="Tiles with disabled option"
        ></cs-tiles>
      </section>

      <section>
        <h3>Disabled Group</h3>
        <cs-tiles
          value="x"
          .items=${[
            { value: 'x', label: 'Selected', description: 'But the whole group is disabled' },
            { value: 'y', label: 'Other', description: 'Also disabled' },
          ]}
          ariaLabel="Fully disabled tiles"
        ></cs-tiles>
      </section>

      <section>
        <h3>Read Only</h3>
        <cs-tiles
          readOnly
          value="ro-1"
          .items=${[
            { value: 'ro-1', label: 'Read-only selected', description: 'Cannot change' },
            { value: 'ro-2', label: 'Read-only other', description: 'Also cannot change' },
          ]}
          ariaLabel="Read-only tiles"
        ></cs-tiles>
      </section>
    `;
  }
}

export const tagName = 'tiles-permutations-page';
