import { html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import '../../../src/tiles/index.js';

@customElement('tiles-permutations-page')
export class TilesPermutationsPage extends PermutationsPageBase {
  static override styles = [...PermutationsPageBase.styles, css`
    .result {
      margin-top: 8px;
      font-size: 13px;
      color: #0972d3;
      font-family: monospace;
    }
    `];

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
          aria-label="Default tiles"
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
          aria-label="Two-column tiles"
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
          aria-label="Tiles with disabled option"
        ></cs-tiles>
      </section>

      <section>
        <h3>Disabled Group</h3>
        <cs-tiles
          disabled
          value="x"
          .items=${[
            { value: 'x', label: 'Selected', description: 'But the whole group is disabled' },
            { value: 'y', label: 'Other', description: 'Also disabled' },
          ]}
          aria-label="Fully disabled tiles"
        ></cs-tiles>
      </section>

      <section>
        <h3>Read Only</h3>
        <cs-tiles
          read-only
          value="ro-1"
          .items=${[
            { value: 'ro-1', label: 'Read-only selected', description: 'Cannot change' },
            { value: 'ro-2', label: 'Read-only other', description: 'Also cannot change' },
          ]}
          aria-label="Read-only tiles"
        ></cs-tiles>
      </section>
    `;
  }
}

export const tagName = 'tiles-permutations-page';
