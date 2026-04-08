import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../../../src/progress-bar/index.js';

@customElement('progress-bar-permutations-page')
export class ProgressBarPermutationsPage extends LitElement {
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
      margin-top: 0;
      margin-bottom: 1em;
      font-size: 14px;
      line-height: 1.15;
      color: #687078;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .row {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  `;

  @state() private _value = 42;

  override render() {
    return html`
      <h2>Progress Bar — Permutations</h2>

      <section>
        <h3>In Progress</h3>
        <div class="row">
          <cs-progress-bar value=${this._value}>
            <span slot="label">Uploading files</span>
            <span slot="description">Transfer is in progress</span>
            <span slot="additionalInfo">${this._value}% complete</span>
          </cs-progress-bar>
          <cs-progress-bar value=${0}>
            <span slot="label">Starting</span>
          </cs-progress-bar>
          <cs-progress-bar value=${100}>
            <span slot="label">Complete bar</span>
          </cs-progress-bar>
        </div>
      </section>

      <section>
        <h3>Success</h3>
        <div class="row">
          <cs-progress-bar status="success" result-button-text="View results">
            <span slot="label">Upload complete</span>
            <span slot="resultText">All files uploaded successfully</span>
          </cs-progress-bar>
        </div>
      </section>

      <section>
        <h3>Error</h3>
        <div class="row">
          <cs-progress-bar status="error" result-button-text="Retry">
            <span slot="label">Upload failed</span>
            <span slot="resultText">Connection lost during transfer</span>
          </cs-progress-bar>
        </div>
      </section>

      <section>
        <h3>Variants</h3>
        <div class="row">
          <cs-progress-bar value=${65} variant="standalone">
            <span slot="label">Standalone variant</span>
          </cs-progress-bar>
          <cs-progress-bar value=${80} variant="key-value">
            <span slot="label">Key-value variant</span>
          </cs-progress-bar>
        </div>
      </section>
    `;
  }
}

export const tagName = 'progress-bar-permutations-page';
