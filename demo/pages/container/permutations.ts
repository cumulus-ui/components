import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import '../../../src/container/index.js';
import '../../../src/header/index.js';
import '../../../src/button/index.js';

@customElement('container-permutations-page')
export class ContainerPermutationsPage extends PermutationsPageBase {
  static override styles = [...PermutationsPageBase.styles, css`
    .row {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    `];

  override render() {
    return html`
      <h2>Container — Permutations</h2>

      <section>
        <h3>Default Variant</h3>
        <div class="row">
          <cs-container>
            <cs-header slot="header" variant="h2">Default Container</cs-header>
            This is the default container content.
          </cs-container>
        </div>
      </section>

      <section>
        <h3>With Footer</h3>
        <div class="row">
          <cs-container>
            <cs-header slot="header" variant="h2">Container with Footer</cs-header>
            Container content with a footer below.
            <div slot="footer">Footer content here</div>
          </cs-container>
        </div>
      </section>

      <section>
        <h3>Stacked Variant</h3>
        <div class="row">
          <cs-container variant="stacked">
            <cs-header slot="header" variant="h2">Stacked Container 1</cs-header>
            First stacked container.
          </cs-container>
          <cs-container variant="stacked">
            <cs-header slot="header" variant="h2">Stacked Container 2</cs-header>
            Second stacked container.
          </cs-container>
        </div>
      </section>

      <section>
        <h3>Disabled Paddings</h3>
        <div class="row">
          <cs-container disable-content-paddings disable-header-paddings>
            <cs-header slot="header" variant="h2">No Padding Container</cs-header>
            Content without paddings.
          </cs-container>
        </div>
      </section>

      <section>
        <h3>Fit Height</h3>
        <div class="row" style="height: 200px;">
          <cs-container fit-height>
            <cs-header slot="header" variant="h2">Fit Height Container</cs-header>
            This container stretches to fill available height.
          </cs-container>
        </div>
      </section>

      <section>
        <h3>With Media</h3>
        <div class="row">
          <cs-container>
            <img slot="media" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='100'%3E%3Crect fill='%23e9ebed' width='400' height='100'/%3E%3Ctext x='200' y='55' text-anchor='middle' fill='%23687078'%3EMedia Slot%3C/text%3E%3C/svg%3E" alt="Placeholder" />
            <cs-header slot="header" variant="h2">Container with Media</cs-header>
            Container with a media slot above.
          </cs-container>
        </div>
      </section>
    `;
  }
}

export const tagName = 'container-permutations-page';
