import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../../../src/modal/index.js';
import '../../../src/button/index.js';

@customElement('modal-permutations-page')
export class ModalPermutationsPage extends LitElement {
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
      margin-top: 0; margin-bottom: 1em; font-size: 14px; line-height: 1.15;
      color: #687078; text-transform: uppercase; letter-spacing: 0.5px;
    }
    .row { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }
  `;

  @state() private _smallVisible = false;
  @state() private _mediumVisible = false;
  @state() private _largeVisible = false;
  @state() private _maxVisible = false;

  override render() {
    return html`
      <h2>Modal — Permutations</h2>

      <section>
        <h3>Sizes</h3>
        <div class="row">
          <cs-button variant="normal" @click=${() => { this._smallVisible = true; }}>Open small</cs-button>
          <cs-button variant="normal" @click=${() => { this._mediumVisible = true; }}>Open medium</cs-button>
          <cs-button variant="normal" @click=${() => { this._largeVisible = true; }}>Open large</cs-button>
          <cs-button variant="normal" @click=${() => { this._maxVisible = true; }}>Open max</cs-button>
        </div>
      </section>

      <cs-modal
        size="small"
        header="Small modal"
        .visible=${this._smallVisible}
        @dismiss=${() => { this._smallVisible = false; }}
      >
        <p>This is a small modal dialog.</p>
        <cs-button slot="footer" variant="primary" @click=${() => { this._smallVisible = false; }}>OK</cs-button>
      </cs-modal>

      <cs-modal
        size="medium"
        header="Medium modal"
        .visible=${this._mediumVisible}
        @dismiss=${() => { this._mediumVisible = false; }}
      >
        <p>This is a medium modal dialog.</p>
        <cs-button slot="footer" variant="primary" @click=${() => { this._mediumVisible = false; }}>OK</cs-button>
        <cs-button slot="footer" variant="link" @click=${() => { this._mediumVisible = false; }}>Cancel</cs-button>
      </cs-modal>

      <cs-modal
        size="large"
        header="Large modal"
        .visible=${this._largeVisible}
        @dismiss=${() => { this._largeVisible = false; }}
      >
        <p>This is a large modal dialog with more content area.</p>
        <cs-button slot="footer" variant="primary" @click=${() => { this._largeVisible = false; }}>OK</cs-button>
      </cs-modal>

      <cs-modal
        size="max"
        header="Max modal"
        .visible=${this._maxVisible}
        @dismiss=${() => { this._maxVisible = false; }}
      >
        <p>This is a max-width modal dialog.</p>
        <cs-button slot="footer" variant="primary" @click=${() => { this._maxVisible = false; }}>OK</cs-button>
      </cs-modal>

      <section>
        <h3>Always-visible modal (for testing)</h3>
        <cs-modal
          size="medium"
          header="Static modal"
          .visible=${true}
          close-aria-label="Close dialog"
          style="position:relative;z-index:1"
        >
          <p>This modal is always visible for integration testing.</p>
          <cs-button slot="footer" variant="primary">Confirm</cs-button>
        </cs-modal>
      </section>
    `;
  }
}

export const tagName = 'modal-permutations-page';
