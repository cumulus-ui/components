import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../../../src/alert/index.js';
import '../../../src/button/index.js';

@customElement('alert-permutations-page')
export class AlertPermutationsPage extends LitElement {
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
    .row {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
  `;

  override render() {
    return html`
      <h2>Alert — Permutations</h2>

      <section>
        <h3>Types</h3>
        <div class="row">
          <cs-alert type="info">This is an info alert.</cs-alert>
          <cs-alert type="success">This is a success alert.</cs-alert>
          <cs-alert type="warning">This is a warning alert.</cs-alert>
          <cs-alert type="error">This is an error alert.</cs-alert>
        </div>
      </section>

      <section>
        <h3>With Header</h3>
        <div class="row">
          <cs-alert type="info" header="Info header">This is an info alert with a header.</cs-alert>
          <cs-alert type="error" header="Error header">This is an error alert with a header.</cs-alert>
        </div>
      </section>

      <section>
        <h3>Dismissible</h3>
        <div class="row">
          <cs-alert type="info" dismissible dismiss-aria-label="Dismiss info">Dismissible info alert.</cs-alert>
          <cs-alert type="warning" dismissible dismiss-aria-label="Dismiss warning" header="Warning">Dismissible warning with header.</cs-alert>
        </div>
      </section>

      <section>
        <h3>With Action</h3>
        <div class="row">
          <cs-alert type="info" header="Action alert">
            Alert with an action button.
            <cs-button slot="action" variant="normal">Action</cs-button>
          </cs-alert>
        </div>
      </section>

      <section>
        <h3>Hidden</h3>
        <div class="row">
          <cs-alert type="info" .visible=${false}>This alert is hidden.</cs-alert>
        </div>
      </section>
    `;
  }
}

export const tagName = 'alert-permutations-page';
