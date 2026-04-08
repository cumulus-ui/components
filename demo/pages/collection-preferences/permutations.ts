import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../../../src/collection-preferences/index.js';
import '../../../src/button/index.js';

@customElement('collection-preferences-permutations-page')
export class CollectionPreferencesPermutationsPage extends LitElement {
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
    .pref-output {
      margin-top: 8px;
      font-size: 13px;
      color: #687078;
      white-space: pre-wrap;
    }
  `;

  @state()
  private _preferences = {
    pageSize: 10,
    wrapLines: false,
    stripedRows: true,
    contentDensity: 'comfortable' as const,
    visibleContent: ['id', 'name', 'status'],
  };

  @state()
  private _lastConfirmed = '';

  private _onConfirm = (e: CustomEvent) => {
    this._preferences = { ...this._preferences, ...e.detail };
    this._lastConfirmed = JSON.stringify(e.detail, null, 2);
  };

  override render() {
    return html`
      <h2>Collection Preferences — Permutations</h2>

      <section>
        <h3>Basic Trigger</h3>
        <cs-collection-preferences
          title="Preferences"
          confirm-label="Confirm"
          cancel-label="Cancel"
          .preferences=${this._preferences}
          .pageSizePreference=${{
            title: 'Page size',
            options: [
              { value: 10, label: '10 resources' },
              { value: 25, label: '25 resources' },
              { value: 50, label: '50 resources' },
            ],
          }}
          .wrapLinesPreference=${{ label: 'Wrap lines', description: 'Enable text wrapping in table cells' }}
          .stripedRowsPreference=${{ label: 'Striped rows', description: 'Alternate row colors' }}
          .contentDensityPreference=${{ label: 'Compact mode', description: 'Reduce spacing between rows' }}
          .visibleContentPreference=${{
            title: 'Visible columns',
            options: [{
              label: 'Main properties',
              options: [
                { id: 'id', label: 'ID' },
                { id: 'name', label: 'Name' },
                { id: 'status', label: 'Status' },
                { id: 'type', label: 'Type' },
              ],
            }],
          }}
          @confirm=${this._onConfirm}
        ></cs-collection-preferences>
        <div class="pref-output">
          Current: ${JSON.stringify(this._preferences, null, 2)}
          ${this._lastConfirmed ? html`\nLast confirmed: ${this._lastConfirmed}` : ''}
        </div>
      </section>

      <section>
        <h3>Disabled</h3>
        <cs-collection-preferences
          disabled
          title="Preferences"
        ></cs-collection-preferences>
      </section>
    `;
  }
}

export const tagName = 'collection-preferences-permutations-page';
