import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../../../src/checkbox/index.js';

@customElement('checkbox-form-submit-page')
export class CheckboxFormSubmitPage extends LitElement {
  static override styles = css`
    :host {
      display: block;
      padding: 24px;
      font-family: system-ui, sans-serif;
    }
    h2 {
      margin-top: 0;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 16px;
      max-width: 400px;
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
    button:hover {
      background: #033160;
    }
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
      <h2>Checkbox — Form Submit</h2>

      <form @submit=${this._handleSubmit}>
        <cs-checkbox name="agree" value="yes">I agree to terms</cs-checkbox>
        <cs-checkbox name="newsletter" value="subscribe">Subscribe to newsletter</cs-checkbox>
        <cs-checkbox name="notifications" checked>Enable notifications</cs-checkbox>
        <button type="submit">Submit</button>
      </form>

      ${this._formResult ? html`
        <div class="result" id="form-result">${this._formResult}</div>
      ` : ''}
    `;
  }
}

export const tagName = 'checkbox-form-submit-page';
