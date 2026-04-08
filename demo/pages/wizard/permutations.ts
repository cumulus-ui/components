import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../../../src/wizard/index.js';

@customElement('wizard-permutations-page')
export class WizardPermutationsPage extends LitElement {
  static override styles = css`
    :host {
      display: block;
      padding: 24px;
      font-family: system-ui, sans-serif;
      line-height: 1.15;
    }
    h2 { margin-top: 0; margin-bottom: 0.83em; line-height: 1.15; }
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
  `;

  @state() private _activeStep = 0;

  private readonly _steps = [
    { title: 'Choose instance type', content: 'Select t2.micro, t2.small, or t2.medium.', description: 'Pick the right size for your workload.' },
    { title: 'Configure storage', content: 'Set up EBS volumes and snapshots.', isOptional: true },
    { title: 'Review and launch', content: 'Confirm all settings before launching.', errorText: '' },
  ];

  private readonly _stepsWithError = [
    { title: 'Step 1', content: 'First step content.' },
    { title: 'Step 2', content: 'Second step content.', errorText: 'Validation failed: name is required.' },
    { title: 'Step 3', content: 'Third step content.' },
  ];

  override render() {
    return html`
      <h2>Wizard — Permutations</h2>

      <section>
        <h3>Basic Wizard</h3>
        <cs-wizard
          .steps=${this._steps}
          .activeStepIndex=${this._activeStep}
          .i18nStrings=${{ navigationAriaLabel: 'Launch instance steps' }}
          submit-button-text="Launch instance"
          @navigate=${(e: CustomEvent) => { this._activeStep = e.detail.requestedStepIndex; }}
          @cancel=${() => { this._activeStep = 0; }}
          @submit=${() => {}}
        ></cs-wizard>
      </section>

      <section>
        <h3>Wizard with Error</h3>
        <cs-wizard
          .steps=${this._stepsWithError}
          .activeStepIndex=${1}
          .i18nStrings=${{ navigationAriaLabel: 'Error wizard steps' }}
          submit-button-text="Submit"
        ></cs-wizard>
      </section>

      <section>
        <h3>Loading Next Step</h3>
        <cs-wizard
          .steps=${this._steps}
          .activeStepIndex=${0}
          .i18nStrings=${{ navigationAriaLabel: 'Loading wizard steps' }}
          is-loading-next-step
          submit-button-text="Submit"
        ></cs-wizard>
      </section>
    `;
  }
}

export const tagName = 'wizard-permutations-page';
