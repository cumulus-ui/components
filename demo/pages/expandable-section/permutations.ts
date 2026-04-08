import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../../../src/expandable-section/index.js';
import '../../../src/button/index.js';

@customElement('expandable-section-permutations-page')
export class ExpandableSectionPermutationsPage extends LitElement {
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

  @state()
  private _controlledExpanded = true;

  private _onControlledChange(e: CustomEvent<{ expanded: boolean }>) {
    this._controlledExpanded = e.detail.expanded;
  }

  override render() {
    return html`
      <h2>Expandable Section — Permutations</h2>

      <section>
        <h3>Default Variant</h3>
        <div class="row">
          <cs-expandable-section header-text="Default expandable section">
            This is the content of a default expandable section.
          </cs-expandable-section>
        </div>
      </section>

      <section>
        <h3>Default Expanded</h3>
        <div class="row">
          <cs-expandable-section header-text="Initially expanded" default-expanded>
            This section starts expanded by default.
          </cs-expandable-section>
        </div>
      </section>

      <section>
        <h3>Container Variant</h3>
        <div class="row">
          <cs-expandable-section
            variant="container"
            header-text="Container section"
            header-description="Additional details about this section"
            header-counter="(5)"
            default-expanded
          >
            Container variant content with description and counter.
          </cs-expandable-section>
        </div>
      </section>

      <section>
        <h3>Controlled Mode</h3>
        <div class="row">
          <cs-expandable-section
            header-text="Controlled expandable section"
            ?expanded=${this._controlledExpanded}
            @change=${this._onControlledChange}
          >
            This section is controlled externally.
          </cs-expandable-section>
        </div>
      </section>

      <section>
        <h3>Footer Variant</h3>
        <div class="row">
          <cs-expandable-section variant="footer" header-text="Footer section">
            Footer variant content goes here.
          </cs-expandable-section>
        </div>
      </section>

      <section>
        <h3>With Header Actions</h3>
        <div class="row">
          <cs-expandable-section
            variant="container"
            header-text="Section with actions"
            default-expanded
          >
            <cs-button slot="headerActions" variant="normal">Edit</cs-button>
            Content with header actions.
          </cs-expandable-section>
        </div>
      </section>

      <section>
        <h3>With Heading Tag Override</h3>
        <div class="row">
          <cs-expandable-section
            header-text="H3 heading override"
            heading-tag-override="h3"
            default-expanded
          >
            This section uses an h3 heading tag override.
          </cs-expandable-section>
        </div>
      </section>
    `;
  }
}

export const tagName = 'expandable-section-permutations-page';
