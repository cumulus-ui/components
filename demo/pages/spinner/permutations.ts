import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import { createPermutations } from '../../utils/create-permutations.js';
import { renderPermutations } from '../../utils/permutations-view.js';
import '../../../src/spinner/index.js';

const sizePermutations = createPermutations<{ size: string }>([
  { size: ['normal', 'big', 'large'] },
]);

const variantPermutations = createPermutations<{ variant: string }>([
  { variant: ['normal', 'disabled', 'inverted'] },
]);

const allCombinations = createPermutations<{ size: string; variant: string }>([
  { variant: ['normal', 'disabled'], size: ['normal', 'big', 'large'] },
]);

@customElement('spinner-permutations-page')
export class SpinnerPermutationsPage extends PermutationsPageBase {
  static override styles = [...PermutationsPageBase.styles, css`
    .row {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .inverted-bg {
      background: #0f1b2a;
      padding: 12px;
      border-radius: 4px;
    }
    `];

  override render() {
    return html`
      <h2>Spinner — Permutations</h2>

      <section>
        <h3>Sizes</h3>
        <div class="row">
          ${renderPermutations(sizePermutations, p => html`<cs-spinner size=${p.size}></cs-spinner>`)}
        </div>
      </section>

      <section>
        <h3>Variants</h3>
        <div class="row">
          ${renderPermutations(variantPermutations, p =>
            p.variant === 'inverted'
              ? html`<div class="inverted-bg"><cs-spinner variant=${p.variant}></cs-spinner></div>`
              : html`<cs-spinner variant=${p.variant}></cs-spinner>`
          )}
        </div>
      </section>

      <section>
        <h3>All Combinations</h3>
        <div class="row">
          ${renderPermutations(allCombinations, p => html`<cs-spinner size=${p.size} variant=${p.variant}></cs-spinner>`)}
        </div>
      </section>
    `;
  }
}

export const tagName = 'spinner-permutations-page';
