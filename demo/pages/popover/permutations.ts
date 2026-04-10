import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import '../../../src/popover/index.js';

@customElement('popover-permutations-page')
export class PopoverPermutationsPage extends PermutationsPageBase {
  static override styles = [...PermutationsPageBase.styles, css`
    .row {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      align-items: center;
      padding: 40px 80px;
    }
    `];

  override render() {
    return html`
      <h2>Popover — Permutations</h2>

      <section>
        <h3>Basic (text trigger)</h3>
        <div class="row">
          <cs-popover header="Popover header">
            Click me
            <div slot="content">This is the popover body content.</div>
          </cs-popover>
        </div>
      </section>

      <section>
        <h3>With header</h3>
        <div class="row">
          <cs-popover header="Status info">
            Status
            <div slot="content">Everything is running normally.</div>
          </cs-popover>
        </div>
      </section>

      <section>
        <h3>Sizes</h3>
        <div class="row">
          <cs-popover size="small" header="Small">
            Small popover
            <div slot="content">Small size content.</div>
          </cs-popover>
          <cs-popover size="medium" header="Medium">
            Medium popover
            <div slot="content">Medium size content with a bit more text.</div>
          </cs-popover>
          <cs-popover size="large" header="Large">
            Large popover
            <div slot="content">Large size content with even more detailed information.</div>
          </cs-popover>
        </div>
      </section>

      <section>
        <h3>Positions</h3>
        <div class="row">
          <cs-popover position="top" header="Top">
            Top
            <div slot="content">Popover positioned on top.</div>
          </cs-popover>
          <cs-popover position="right" header="Right">
            Right
            <div slot="content">Popover positioned on the right.</div>
          </cs-popover>
          <cs-popover position="bottom" header="Bottom">
            Bottom
            <div slot="content">Popover positioned on the bottom.</div>
          </cs-popover>
          <cs-popover position="left" header="Left">
            Left
            <div slot="content">Popover positioned on the left.</div>
          </cs-popover>
        </div>
      </section>

      <section>
        <h3>Without dismiss button</h3>
        <div class="row">
          <cs-popover header="No dismiss" .dismissButton=${false}>
            No dismiss
            <div slot="content">This popover has no dismiss button.</div>
          </cs-popover>
        </div>
      </section>

      <section>
        <h3>Fixed width</h3>
        <div class="row">
          <cs-popover header="Fixed width" fixed-width>
            Fixed width
            <div slot="content">Short.</div>
          </cs-popover>
        </div>
      </section>

      <section>
        <h3>Custom trigger</h3>
        <div class="row">
          <cs-popover header="Custom trigger" trigger-type="custom">
            <cs-button variant="normal">Open popover</cs-button>
            <div slot="content">Triggered by a custom button.</div>
          </cs-popover>
        </div>
      </section>
    `;
  }
}

export const tagName = 'popover-permutations-page';
