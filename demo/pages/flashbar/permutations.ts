import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../../../src/flashbar/index.js';
import '../../../src/button/index.js';
import type { FlashbarProps } from '../../../src/flashbar/interfaces.js';

@customElement('flashbar-permutations-page')
export class FlashbarPermutationsPage extends LitElement {
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
      gap: 16px;
    }
  `;

  private _typesItems: ReadonlyArray<FlashbarProps.MessageDefinition> = [
    { type: 'info', content: 'This is an info flash message.' },
    { type: 'success', content: 'This is a success flash message.' },
    { type: 'warning', content: 'This is a warning flash message.' },
    { type: 'error', content: 'This is an error flash message.' },
  ];

  private _headerItems: ReadonlyArray<FlashbarProps.MessageDefinition> = [
    { type: 'info', header: 'Info Header', content: 'Flash with a header.' },
    { type: 'error', header: 'Error Header', content: 'Error flash with a header.' },
  ];

  private _dismissibleItems: ReadonlyArray<FlashbarProps.MessageDefinition> = [
    {
      type: 'info',
      content: 'Dismissible info flash.',
      dismissible: true,
      dismissLabel: 'Dismiss info',
      id: 'dismiss-1',
    },
    {
      type: 'warning',
      header: 'Warning',
      content: 'Dismissible warning flash.',
      dismissible: true,
      dismissLabel: 'Dismiss warning',
      id: 'dismiss-2',
    },
  ];

  private _actionItems: ReadonlyArray<FlashbarProps.MessageDefinition> = [
    {
      type: 'info',
      header: 'Action Flash',
      content: 'Flash with an action button.',
      buttonText: 'Retry',
      id: 'action-1',
    },
  ];

  private _loadingItems: ReadonlyArray<FlashbarProps.MessageDefinition> = [
    { loading: true, content: 'Loading in progress...' },
  ];

  override render() {
    return html`
      <h2>Flashbar — Permutations</h2>

      <section>
        <h3>Types</h3>
        <div class="row">
          <cs-flashbar .items=${this._typesItems}></cs-flashbar>
        </div>
      </section>

      <section>
        <h3>With Header</h3>
        <div class="row">
          <cs-flashbar .items=${this._headerItems}></cs-flashbar>
        </div>
      </section>

      <section>
        <h3>Dismissible</h3>
        <div class="row">
          <cs-flashbar .items=${this._dismissibleItems}></cs-flashbar>
        </div>
      </section>

      <section>
        <h3>With Action</h3>
        <div class="row">
          <cs-flashbar .items=${this._actionItems}></cs-flashbar>
        </div>
      </section>

      <section>
        <h3>Loading</h3>
        <div class="row">
          <cs-flashbar .items=${this._loadingItems}></cs-flashbar>
        </div>
      </section>
    `;
  }
}

export const tagName = 'flashbar-permutations-page';
