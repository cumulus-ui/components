import { html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import '../../../src/autosuggest/index.js';

const PROGRAMMING_LANGUAGES = [
  { value: 'typescript', label: 'TypeScript' },
  { value: 'javascript', label: 'JavaScript' },
  { value: 'python', label: 'Python' },
  { value: 'rust', label: 'Rust' },
  { value: 'go', label: 'Go' },
  { value: 'java', label: 'Java' },
  { value: 'csharp', label: 'C#' },
  { value: 'ruby', label: 'Ruby' },
];

@customElement('autosuggest-permutations-page')
export class AutosuggestPermutationsPage extends PermutationsPageBase {
  static override styles = [...PermutationsPageBase.styles, css`
    .row { display: flex; flex-wrap: wrap; gap: 12px; align-items: flex-start; }
    cs-autosuggest { min-width: 250px; }
    .result { margin-top: 8px; font-size: 13px; color: #0972d3; font-family: monospace; }
    `];

  @state() private _value1 = '';
  @state() private _value2 = 'Python';
  @state() private _selectedOption = '';

  override render() {
    return html`
      <h2>Autosuggest — Permutations</h2>

      <section>
        <h3>Default</h3>
        <div class="row">
          <cs-autosuggest
            aria-label="Programming language"
            placeholder="Search languages…"
            .value=${this._value1}
            .options=${PROGRAMMING_LANGUAGES}
            @change=${(e: CustomEvent<{ value: string }>) => { this._value1 = e.detail.value; }}
            @select=${(e: CustomEvent<{ value: string }>) => { this._selectedOption = e.detail.value; }}
          ></cs-autosuggest>
        </div>
        <div class="result">Value: ${this._value1 || '(empty)'}</div>
        <div class="result">Last selected: ${this._selectedOption || '(none)'}</div>
      </section>

      <section>
        <h3>With initial value</h3>
        <div class="row">
          <cs-autosuggest
            aria-label="Language with value"
            .value=${this._value2}
            .options=${PROGRAMMING_LANGUAGES}
            @change=${(e: CustomEvent<{ value: string }>) => { this._value2 = e.detail.value; }}
          ></cs-autosuggest>
        </div>
      </section>

      <section>
        <h3>With disabled options</h3>
        <div class="row">
          <cs-autosuggest
            aria-label="With disabled options"
            placeholder="Some options disabled…"
            .options=${[
              { value: 'active', label: 'Active option' },
              { value: 'disabled1', label: 'Disabled option', disabled: true },
              { value: 'another', label: 'Another active' },
            ]}
          ></cs-autosuggest>
        </div>
      </section>

      <section>
        <h3>Disabled</h3>
        <div class="row">
          <cs-autosuggest
            aria-label="Disabled autosuggest"
            value="Cannot edit"
            disabled
            .options=${PROGRAMMING_LANGUAGES}
          ></cs-autosuggest>
        </div>
      </section>

      <section>
        <h3>Read-only</h3>
        <div class="row">
          <cs-autosuggest
            aria-label="Read-only autosuggest"
            value="Read only text"
            read-only
            .options=${PROGRAMMING_LANGUAGES}
          ></cs-autosuggest>
        </div>
      </section>

      <section>
        <h3>Invalid</h3>
        <div class="row">
          <cs-autosuggest
            aria-label="Invalid autosuggest"
            value="Bad value"
            invalid
            .options=${PROGRAMMING_LANGUAGES}
          ></cs-autosuggest>
        </div>
      </section>
    `;
  }
}

export const tagName = 'autosuggest-permutations-page';
