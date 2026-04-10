import { html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import '../../../src/form/index.js';
import '../../../src/button/index.js';
import '../../../src/alert/index.js';

@customElement('form-permutations-page')
export class FormPermutationsPage extends PermutationsPageBase {
  static override styles = [...PermutationsPageBase.styles, css`
    .row { display: flex; flex-direction: column; gap: 12px; }
    `];

  @state() private _errorText = '';
  @state() private _submitCount = 0;

  override render() {
    return html`
      <h2>Form — Permutations</h2>

      <section>
        <h3>Basic form with header</h3>
        <div class="row">
          <cs-form header="Create resource">
            <div>Form field content goes here</div>
            <cs-button slot="actions" variant="primary">Submit</cs-button>
            <cs-button slot="actions" variant="link">Cancel</cs-button>
          </cs-form>
        </div>
      </section>

      <section>
        <h3>Form with error</h3>
        <div class="row">
          <cs-form header="Edit resource" error-text="There are validation errors. Fix them before submitting.">
            <div>Form field content with errors</div>
            <cs-button slot="actions" variant="primary">Submit</cs-button>
          </cs-form>
        </div>
      </section>

      <section>
        <h3>Form with secondary actions</h3>
        <div class="row">
          <cs-form header="Configure settings">
            <div>Settings content</div>
            <cs-button slot="actions" variant="primary">Save</cs-button>
            <cs-button slot="actions" variant="link">Cancel</cs-button>
            <cs-button slot="secondaryActions" variant="normal">Reset to defaults</cs-button>
          </cs-form>
        </div>
      </section>

      <section>
        <h3>Interactive form</h3>
        <div class="row">
          <cs-form
            header="Interactive test"
            error-text=${this._errorText}
            @submit=${this._onSubmit}
          >
            <div>Submit count: ${this._submitCount}</div>
            <cs-button
              slot="actions"
              variant="primary"
              @click=${this._onSubmitClick}
            >Submit</cs-button>
          </cs-form>
        </div>
      </section>
    `;
  }

  private _onSubmitClick = (): void => {
    this._submitCount++;
    this._errorText = this._submitCount % 2 === 0 ? 'Validation failed' : '';
  };

  private _onSubmit = (): void => {
    this._submitCount++;
  };
}

export const tagName = 'form-permutations-page';
