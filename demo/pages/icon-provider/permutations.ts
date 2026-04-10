import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import '../../../src/icon-provider/index.js';
import '../../../src/icon/index.js';

export const tagName = 'icon-provider-permutations-page';

@customElement(tagName)
export class IconProviderPermutationsPage extends PermutationsPageBase {
  override createRenderRoot(): this { return this; }

  override render() {
    return html`
      <style>
        :host { display: block; padding: 24px; }
        section { margin-bottom: 24px; padding: 16px; border: 1px solid #e9ebed; border-radius: 8px; }
        h3 { margin: 0 0 12px; font-size: 12px; text-transform: uppercase; color: #5f6b7a; }
      </style>

      <section>
        <h3>Default icons (no provider)</h3>
        <cs-icon name="settings"></cs-icon>
        <cs-icon name="search"></cs-icon>
        <cs-icon name="close"></cs-icon>
      </section>

      <section>
        <h3>With icon override</h3>
        <cs-icon-provider id="custom-provider">
          <cs-icon name="settings"></cs-icon>
          <cs-icon name="search"></cs-icon>
          <cs-icon name="close"></cs-icon>
        </cs-icon-provider>
      </section>

      <section>
        <h3>Reset to defaults (icons=null)</h3>
        <cs-icon-provider>
          <cs-icon name="settings"></cs-icon>
        </cs-icon-provider>
      </section>
    `;
  }
}
