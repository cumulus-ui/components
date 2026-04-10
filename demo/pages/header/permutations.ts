import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import '../../../src/header/index.js';
import '../../../src/button/index.js';

@customElement('header-permutations-page')
export class HeaderPermutationsPage extends PermutationsPageBase {
  static override styles = [...PermutationsPageBase.styles, css`
    .row {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    `];

  override render() {
    return html`
      <h2>Header — Permutations</h2>

      <section>
        <h3>Variants</h3>
        <div class="row">
          <cs-header variant="h1">Heading Variant H1</cs-header>
          <cs-header variant="h2">Heading Variant H2</cs-header>
          <cs-header variant="h3">Heading Variant H3</cs-header>
        </div>
      </section>

      <section>
        <h3>With Counter</h3>
        <div class="row">
          <cs-header variant="h1" counter="(10)">Heading with Counter</cs-header>
          <cs-header variant="h2" counter="(5)">Another Counter</cs-header>
        </div>
      </section>

      <section>
        <h3>With Description</h3>
        <div class="row">
          <cs-header variant="h1" description="This is a description for the H1 heading.">H1 with Description</cs-header>
          <cs-header variant="h2" description="This is a description for the H2 heading.">H2 with Description</cs-header>
          <cs-header variant="h3" description="This is a description for the H3 heading.">H3 with Description</cs-header>
        </div>
      </section>

      <section>
        <h3>With Actions</h3>
        <div class="row">
          <cs-header variant="h1">
            H1 with Actions
            <cs-button slot="actions" variant="primary">Create</cs-button>
          </cs-header>
          <cs-header variant="h2">
            H2 with Actions
            <cs-button slot="actions" variant="normal">Edit</cs-button>
          </cs-header>
        </div>
      </section>

      <section>
        <h3>With Info Slot</h3>
        <div class="row">
          <cs-header variant="h2">
            Heading with Info
            <span slot="info">Info</span>
          </cs-header>
        </div>
      </section>

      <section>
        <h3>Heading Tag Override</h3>
        <div class="row">
          <cs-header variant="h1" heading-tag-override="h3">Visually H1, semantically H3</cs-header>
        </div>
      </section>

      <section>
        <h3>Full Combo</h3>
        <div class="row">
          <cs-header variant="h1" counter="(42)" description="Full featured header with all options.">
            Full Featured Header
            <span slot="info">Info</span>
            <cs-button slot="actions" variant="primary">Action</cs-button>
          </cs-header>
        </div>
      </section>
    `;
  }
}

export const tagName = 'header-permutations-page';
