import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../../../src/space-between/index.js';

@customElement('space-between-permutations-page')
export class SpaceBetweenPermutationsPage extends LitElement {
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
    .item {
      background: #f2f3f3;
      border: 1px solid #d1d5db;
      border-radius: 4px;
      padding: 8px 12px;
      font-size: 13px;
    }
  `;

  override render() {
    return html`
      <h2>SpaceBetween — Permutations</h2>

      <section>
        <h3>Vertical - Size S (default)</h3>
        <cs-space-between size="s">
          <div class="item">Item 1</div>
          <div class="item">Item 2</div>
          <div class="item">Item 3</div>
        </cs-space-between>
      </section>

      <section>
        <h3>Vertical - Size XS</h3>
        <cs-space-between size="xs">
          <div class="item">Item 1</div>
          <div class="item">Item 2</div>
          <div class="item">Item 3</div>
        </cs-space-between>
      </section>

      <section>
        <h3>Vertical - Size M</h3>
        <cs-space-between size="m">
          <div class="item">Item 1</div>
          <div class="item">Item 2</div>
          <div class="item">Item 3</div>
        </cs-space-between>
      </section>

      <section>
        <h3>Vertical - Size L</h3>
        <cs-space-between size="l">
          <div class="item">Item 1</div>
          <div class="item">Item 2</div>
          <div class="item">Item 3</div>
        </cs-space-between>
      </section>

      <section>
        <h3>Vertical - Size XL</h3>
        <cs-space-between size="xl">
          <div class="item">Item 1</div>
          <div class="item">Item 2</div>
          <div class="item">Item 3</div>
        </cs-space-between>
      </section>

      <section>
        <h3>Horizontal - Size S</h3>
        <cs-space-between direction="horizontal" size="s">
          <div class="item">Item A</div>
          <div class="item">Item B</div>
          <div class="item">Item C</div>
        </cs-space-between>
      </section>

      <section>
        <h3>Horizontal - Size L</h3>
        <cs-space-between direction="horizontal" size="l">
          <div class="item">Item A</div>
          <div class="item">Item B</div>
          <div class="item">Item C</div>
        </cs-space-between>
      </section>

      <section>
        <h3>Horizontal - Align Center</h3>
        <cs-space-between direction="horizontal" size="m" align-items="center">
          <div class="item" style="padding: 4px 12px;">Short</div>
          <div class="item" style="padding: 24px 12px;">Tall</div>
          <div class="item" style="padding: 12px;">Medium</div>
        </cs-space-between>
      </section>

      <section>
        <h3>Horizontal - Align End</h3>
        <cs-space-between direction="horizontal" size="m" align-items="end">
          <div class="item" style="padding: 4px 12px;">Short</div>
          <div class="item" style="padding: 24px 12px;">Tall</div>
          <div class="item" style="padding: 12px;">Medium</div>
        </cs-space-between>
      </section>

      <section>
        <h3>Size XXXS (tightest)</h3>
        <cs-space-between size="xxxs">
          <div class="item">Tight 1</div>
          <div class="item">Tight 2</div>
          <div class="item">Tight 3</div>
        </cs-space-between>
      </section>
    `;
  }
}

export const tagName = 'space-between-permutations-page';
