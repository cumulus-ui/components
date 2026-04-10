import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import '../../../src/link/index.js';

@customElement('link-permutations-page')
export class LinkPermutationsPage extends PermutationsPageBase {
  static override styles = [...PermutationsPageBase.styles, css`
    .row {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      align-items: center;
    }
    `];

  override render() {
    return html`
      <h2>Link — Permutations</h2>

      <section>
        <h3>Variants with href</h3>
        <div class="row">
          <cs-link variant="primary" href="https://example.com">Primary link</cs-link>
          <cs-link variant="secondary" href="https://example.com">Secondary link</cs-link>
          <cs-link variant="info" href="https://example.com">Info link</cs-link>
          <cs-link variant="recovery" href="https://example.com">Recovery link</cs-link>
        </div>
      </section>

      <section>
        <h3>Without href (button role)</h3>
        <div class="row">
          <cs-link variant="primary">Primary button-link</cs-link>
          <cs-link variant="secondary">Secondary button-link</cs-link>
        </div>
      </section>

      <section>
        <h3>External</h3>
        <div class="row">
          <cs-link href="https://example.com" external>External link</cs-link>
          <cs-link href="https://example.com" external variant="primary">External primary</cs-link>
        </div>
      </section>

      <section>
        <h3>Font sizes</h3>
        <div class="row">
          <cs-link href="https://example.com" font-size="body-s">Body S</cs-link>
          <cs-link href="https://example.com" font-size="body-m">Body M</cs-link>
          <cs-link href="https://example.com" font-size="heading-s">Heading S</cs-link>
          <cs-link href="https://example.com" font-size="heading-m">Heading M</cs-link>
          <cs-link href="https://example.com" font-size="heading-l">Heading L</cs-link>
          <cs-link href="https://example.com" font-size="display-l">Display L</cs-link>
        </div>
      </section>

      <section>
        <h3>With aria-label</h3>
        <div class="row">
          <cs-link href="https://example.com" aria-label="Custom accessible label">Link with aria-label</cs-link>
        </div>
      </section>
    `;
  }
}

export const tagName = 'link-permutations-page';
