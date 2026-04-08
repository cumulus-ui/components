import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../../../src/content-layout/index.js';

@customElement('content-layout-permutations-page')
export class ContentLayoutPermutationsPage extends LitElement {
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
    .header-box {
      background: #0972d3;
      color: #fff;
      padding: 24px;
      border-radius: 4px;
      font-size: 18px;
      font-weight: 700;
    }
    .content-box {
      background: #f2f3f3;
      padding: 24px;
      border-radius: 4px;
      min-height: 100px;
    }
  `;

  override render() {
    return html`
      <h2>Content Layout — Permutations</h2>

      <section>
        <h3>With Header</h3>
        <cs-content-layout>
          <div slot="header" class="header-box">Page Header</div>
          <div class="content-box">Main content area</div>
        </cs-content-layout>
      </section>

      <section>
        <h3>Default Padding</h3>
        <cs-content-layout default-padding>
          <div slot="header" class="header-box">Padded Header</div>
          <div class="content-box">Content with default padding</div>
        </cs-content-layout>
      </section>

      <section>
        <h3>Disabled Overlap</h3>
        <cs-content-layout disable-overlap>
          <div slot="header" class="header-box">No Overlap Header</div>
          <div class="content-box">Content without overlap</div>
        </cs-content-layout>
      </section>

      <section>
        <h3>With Divider</h3>
        <cs-content-layout header-variant="divider">
          <div slot="header" class="header-box">Divider Header</div>
          <div class="content-box">Content with divider</div>
        </cs-content-layout>
      </section>

      <section>
        <h3>Content Only (No Header)</h3>
        <cs-content-layout>
          <div class="content-box">Content without header</div>
        </cs-content-layout>
      </section>
    `;
  }
}

export const tagName = 'content-layout-permutations-page';
