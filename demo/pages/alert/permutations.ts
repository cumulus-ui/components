import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import '../../../src/alert/index.js';
import '../../../src/button/index.js';

@customElement('alert-permutations-page')
export class AlertPermutationsPage extends PermutationsPageBase {
  static override styles = [...PermutationsPageBase.styles, css`
    .row {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    `];

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
