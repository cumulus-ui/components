import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../../../src/token-group/index.js';
import type { TokenGroupProps } from '../../../src/token-group/interfaces.js';

@customElement('token-group-permutations-page')
export class TokenGroupPermutationsPage extends LitElement {
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
  `;

  @state()
  private _horizontalItems: TokenGroupProps.Item[] = [
    { label: 'Option 1', dismissLabel: 'Remove Option 1' },
    { label: 'Option 2', dismissLabel: 'Remove Option 2' },
    { label: 'Option 3', dismissLabel: 'Remove Option 3' },
  ];

  @state()
  private _verticalItems: TokenGroupProps.Item[] = [
    { label: 'us-east-1', description: 'US East (N. Virginia)', dismissLabel: 'Remove us-east-1' },
    { label: 'eu-west-1', description: 'Europe (Ireland)', dismissLabel: 'Remove eu-west-1' },
    { label: 'ap-southeast-1', description: 'Asia Pacific (Singapore)', dismissLabel: 'Remove ap-southeast-1' },
  ];

  private _limitItems: ReadonlyArray<TokenGroupProps.Item> = [
    { label: 'Item 1', dismissLabel: 'Remove Item 1' },
    { label: 'Item 2', dismissLabel: 'Remove Item 2' },
    { label: 'Item 3', dismissLabel: 'Remove Item 3' },
    { label: 'Item 4', dismissLabel: 'Remove Item 4' },
    { label: 'Item 5', dismissLabel: 'Remove Item 5' },
  ];

  private _readOnlyItems: ReadonlyArray<TokenGroupProps.Item> = [
    { label: 'Read-only 1' },
    { label: 'Read-only 2' },
  ];

  private _disabledItems: ReadonlyArray<TokenGroupProps.Item> = [
    { label: 'Enabled', dismissLabel: 'Remove Enabled' },
    { label: 'Disabled', disabled: true, dismissLabel: 'Remove Disabled' },
    { label: 'Also enabled', dismissLabel: 'Remove Also enabled' },
  ];

  private _onHorizontalDismiss(e: CustomEvent<TokenGroupProps.DismissDetail>) {
    const idx = e.detail.itemIndex;
    this._horizontalItems = this._horizontalItems.filter((_, i) => i !== idx);
  }

  private _onVerticalDismiss(e: CustomEvent<TokenGroupProps.DismissDetail>) {
    const idx = e.detail.itemIndex;
    this._verticalItems = this._verticalItems.filter((_, i) => i !== idx);
  }

  override render() {
    return html`
      <h2>Token Group — Permutations</h2>

      <section>
        <h3>Horizontal (default)</h3>
        <cs-token-group
          .items=${this._horizontalItems}
          @dismiss=${this._onHorizontalDismiss}
        ></cs-token-group>
      </section>

      <section>
        <h3>Vertical</h3>
        <cs-token-group
          alignment="vertical"
          .items=${this._verticalItems}
          @dismiss=${this._onVerticalDismiss}
        ></cs-token-group>
      </section>

      <section>
        <h3>With Limit (2)</h3>
        <cs-token-group
          .items=${this._limitItems}
          .limit=${2}
          disable-outer-padding
        ></cs-token-group>
      </section>

      <section>
        <h3>Read-only</h3>
        <cs-token-group
          read-only
          .items=${this._readOnlyItems}
        ></cs-token-group>
      </section>

      <section>
        <h3>Mixed Disabled Items</h3>
        <cs-token-group
          .items=${this._disabledItems}
        ></cs-token-group>
      </section>
    `;
  }
}

export const tagName = 'token-group-permutations-page';
