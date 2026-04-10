import { html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import '../../../src/text-filter/index.js';

@customElement('text-filter-permutations-page')
export class TextFilterPermutationsPage extends PermutationsPageBase {
  static override styles = [...PermutationsPageBase.styles, css`
    .row { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }
    cs-text-filter { min-width: 300px; }
    `];

  @state() private _filterText = '';

  override render() {
    return html`
      <h2>TextFilter — Permutations</h2>

      <section>
        <h3>Default</h3>
        <div class="row">
          <cs-text-filter
            filtering-placeholder="Find resources"
            filtering-aria-label="Filter resources"
          ></cs-text-filter>
        </div>
      </section>

      <section>
        <h3>With filtering text and count</h3>
        <div class="row">
          <cs-text-filter
            .filteringText=${this._filterText}
            filtering-placeholder="Find items"
            filtering-aria-label="Filter items"
            count-text="3 matches"
            @change=${(e: CustomEvent<{ filteringText: string }>) => { this._filterText = e.detail.filteringText; }}
          ></cs-text-filter>
        </div>
      </section>

      <section>
        <h3>With pre-filled text</h3>
        <div class="row">
          <cs-text-filter
            filtering-text="instance"
            filtering-placeholder="Filter instances"
            filtering-aria-label="Filter instances"
            count-text="12 matches"
          ></cs-text-filter>
        </div>
      </section>

      <section>
        <h3>Disabled</h3>
        <div class="row">
          <cs-text-filter
            filtering-text="locked"
            filtering-placeholder="Find items"
            filtering-aria-label="Disabled filter"
            disabled
          ></cs-text-filter>
        </div>
      </section>

      <section>
        <h3>Empty state</h3>
        <div class="row">
          <cs-text-filter
            filtering-placeholder="Search…"
            filtering-aria-label="Search filter"
          ></cs-text-filter>
        </div>
      </section>
    `;
  }
}

export const tagName = 'text-filter-permutations-page';
