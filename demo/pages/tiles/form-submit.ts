import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../../../src/tiles/index.js';

@customElement('tiles-form-submit-page')
export class TilesFormSubmitPage extends LitElement {
  static override styles = css`
    :host {
      display: block;
      padding: 24px;
      font-family: system-ui, sans-serif;
    }
    h2 { margin-top: 0; }
    form {
      display: flex;
      flex-direction: column;
      gap: 16px;
      max-width: 600px;
      padding: 20px;
      border: 1px solid #e9ebed;
      border-radius: 8px;
    }
    button {
      align-self: flex-start;
      padding: 8px 20px;
      background: #0972d3;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
    }
    button:hover { background: #033160; }
    .result {
      margin-top: 16px;
      padding: 16px;
      background: #f2f8fd;
      border: 1px solid #0972d3;
      border-radius: 4px;
      font-family: monospace;
      font-size: 13px;
      white-space: pre-wrap;
    }
  `;

  @state() private _formResult = '';

  private _handleSubmit(e: Event) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const entries: string[] = [];
    for (const [key, value] of data.entries()) {
      entries.push(`${key} = ${value}`);
    }
    this._formResult = entries.length > 0 ? entries.join('\n') : '(no form values)';
  }

  override render() {
    return html`
      <h2>Tiles — Form Submit</h2>

      <form @submit=${this._handleSubmit}>
        <label>Choose an instance type:</label>
        <cs-tiles
          name="instance"
          value="t3.medium"
          .columns=${2}
          .items=${[
            { value: 't3.small', label: 't3.small', description: '2 vCPU, 2 GiB RAM' },
            { value: 't3.medium', label: 't3.medium', description: '2 vCPU, 4 GiB RAM' },
            { value: 't3.large', label: 't3.large', description: '2 vCPU, 8 GiB RAM' },
            { value: 't3.xlarge', label: 't3.xlarge', description: '4 vCPU, 16 GiB RAM' },
          ]}
          aria-label="Instance type selection"
        ></cs-tiles>
        <button type="submit">Submit</button>
      </form>

      ${this._formResult ? html`
        <div class="result" id="form-result">${this._formResult}</div>
      ` : ''}
    `;
  }
}

export const tagName = 'tiles-form-submit-page';
