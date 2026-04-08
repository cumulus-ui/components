import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../../../src/segmented-control/index.js';

@customElement('segmented-control-permutations-page')
export class SegmentedControlPermutationsPage extends LitElement {
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
    .result { margin-top: 8px; font-size: 13px; color: #0972d3; font-family: monospace; }
  `;

  @state() private _selectedId1 = 'seg-1';
  @state() private _selectedId2 = 'day';
  @state() private _selectedId3 = 'map';

  override render() {
    return html`
      <h2>SegmentedControl — Permutations</h2>

      <section>
        <h3>Default (text only)</h3>
        <cs-segmented-control
          label="Choose segment"
          .selectedId=${this._selectedId1}
          .options=${[
            { id: 'seg-1', text: 'Segment 1' },
            { id: 'seg-2', text: 'Segment 2' },
            { id: 'seg-3', text: 'Segment 3' },
          ]}
          @change=${(e: CustomEvent<{ selectedId: string }>) => { this._selectedId1 = e.detail.selectedId; }}
        ></cs-segmented-control>
        <div class="result">Selected: ${this._selectedId1}</div>
      </section>

      <section>
        <h3>With icons and text</h3>
        <cs-segmented-control
          label="Time range"
          .selectedId=${this._selectedId2}
          .options=${[
            { id: 'day', text: 'Day', iconName: 'calendar' },
            { id: 'week', text: 'Week', iconName: 'calendar' },
            { id: 'month', text: 'Month', iconName: 'calendar' },
          ]}
          @change=${(e: CustomEvent<{ selectedId: string }>) => { this._selectedId2 = e.detail.selectedId; }}
        ></cs-segmented-control>
        <div class="result">Selected: ${this._selectedId2}</div>
      </section>

      <section>
        <h3>Icon only</h3>
        <cs-segmented-control
          label="View mode"
          .selectedId=${this._selectedId3}
          .options=${[
            { id: 'map', iconName: 'view-full', iconAlt: 'Map view' },
            { id: 'list', iconName: 'menu', iconAlt: 'List view' },
          ]}
          @change=${(e: CustomEvent<{ selectedId: string }>) => { this._selectedId3 = e.detail.selectedId; }}
        ></cs-segmented-control>
      </section>

      <section>
        <h3>With disabled segment</h3>
        <cs-segmented-control
          label="Options with disabled"
          selected-id="opt-a"
          .options=${[
            { id: 'opt-a', text: 'Option A' },
            { id: 'opt-b', text: 'Option B (disabled)', disabled: true },
            { id: 'opt-c', text: 'Option C' },
          ]}
        ></cs-segmented-control>
      </section>

      <section>
        <h3>No selection</h3>
        <cs-segmented-control
          label="No selection"
          .options=${[
            { id: 'x', text: 'Alpha' },
            { id: 'y', text: 'Beta' },
          ]}
        ></cs-segmented-control>
      </section>
    `;
  }
}

export const tagName = 'segmented-control-permutations-page';
