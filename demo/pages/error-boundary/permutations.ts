import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../../../src/error-boundary/index.js';
import '../../../src/button/index.js';

@customElement('error-boundary-permutations-page')
export class ErrorBoundaryPermutationsPage extends LitElement {
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
      flex-wrap: wrap;
      gap: 12px;
      align-items: center;
    }
  `;

  @state()
  private _simulateError = false;

  private _triggerError(): void {
    this._simulateError = true;
  }

  private _reset(): void {
    this._simulateError = false;
  }

  override render() {
    return html`
      <h2>Error Boundary — Permutations</h2>

      <section>
        <h3>Normal State (no error)</h3>
        <cs-error-boundary>
          <p>This content is wrapped in an error boundary. Everything is fine.</p>
        </cs-error-boundary>
      </section>

      <section>
        <h3>With Boundary ID</h3>
        <cs-error-boundary error-boundary-id="my-section">
          <p>This boundary has <code>error-boundary-id="my-section"</code>.</p>
        </cs-error-boundary>
      </section>

      <section>
        <h3>Simulated Error State</h3>
        <div class="row">
          <cs-button variant="normal" @click=${this._triggerError}>Simulate Error</cs-button>
          <cs-button variant="link" @click=${this._reset}>Reset</cs-button>
        </div>
        ${this._simulateError
          ? html`<p style="margin-top:12px; color: #d13212;">
              Error simulation active — in a real scenario the error boundary catches lifecycle errors.
            </p>`
          : html`<p style="margin-top:12px;">Click "Simulate Error" to see the error state description.</p>`
        }
      </section>
    `;
  }
}

export const tagName = 'error-boundary-permutations-page';
