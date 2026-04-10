import { html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import '../../../src/radio-group/index.js';

@customElement('radio-group-permutations-page')
export class RadioGroupPermutationsPage extends PermutationsPageBase {
  static override styles = [...PermutationsPageBase.styles, css`
    .result {
      margin-top: 8px;
      font-size: 13px;
      color: #0972d3;
      font-family: monospace;
    }
    `];

  @state() private _value1 = 'option-1';
  @state() private _value2 = '';
  @state() private _value3 = 'opt-a';

  override render() {
    return html`
      <h2>RadioGroup — Permutations</h2>

      <section>
        <h3>Default (Vertical)</h3>
        <cs-radio-group
          .value=${this._value1}
          .items=${[
            { value: 'option-1', label: 'Option 1' },
            { value: 'option-2', label: 'Option 2' },
            { value: 'option-3', label: 'Option 3' },
          ]}
          aria-label="Default radio group"
          @change=${(e: CustomEvent) => { this._value1 = e.detail.value; }}
        ></cs-radio-group>
        <div class="result">Selected: ${this._value1}</div>
      </section>

      <section>
        <h3>Horizontal</h3>
        <cs-radio-group
          direction="horizontal"
          .value=${this._value2}
          .items=${[
            { value: 'sm', label: 'Small' },
            { value: 'md', label: 'Medium' },
            { value: 'lg', label: 'Large' },
          ]}
          aria-label="Size selection"
          @change=${(e: CustomEvent) => { this._value2 = e.detail.value; }}
        ></cs-radio-group>
        <div class="result">Selected: ${this._value2 || '(none)'}</div>
      </section>

      <section>
        <h3>With Descriptions</h3>
        <cs-radio-group
          .value=${this._value3}
          .items=${[
            { value: 'opt-a', label: 'Option A', description: 'First option with extra info' },
            { value: 'opt-b', label: 'Option B', description: 'Second option with details' },
            { value: 'opt-c', label: 'Option C', description: 'Third option explained' },
          ]}
          aria-label="Options with descriptions"
          @change=${(e: CustomEvent) => { this._value3 = e.detail.value; }}
        ></cs-radio-group>
      </section>

      <section>
        <h3>With Disabled Items</h3>
        <cs-radio-group
          value="enabled-1"
          .items=${[
            { value: 'enabled-1', label: 'Enabled' },
            { value: 'disabled-1', label: 'Disabled item', disabled: true },
            { value: 'enabled-2', label: 'Also enabled' },
          ]}
          aria-label="Group with disabled items"
        ></cs-radio-group>
      </section>

      <section>
        <h3>Disabled Group</h3>
        <cs-radio-group
          disabled
          value="x"
          .items=${[
            { value: 'x', label: 'Selected but disabled' },
            { value: 'y', label: 'Another disabled' },
          ]}
          aria-label="Fully disabled group"
        ></cs-radio-group>
      </section>

      <section>
        <h3>Read Only</h3>
        <cs-radio-group
          read-only
          value="ro-1"
          .items=${[
            { value: 'ro-1', label: 'Read-only selected' },
            { value: 'ro-2', label: 'Read-only unselected' },
          ]}
          aria-label="Read-only group"
        ></cs-radio-group>
      </section>
    `;
  }
}

export const tagName = 'radio-group-permutations-page';
