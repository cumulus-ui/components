import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import '../../../src/steps/index.js';

@customElement('steps-permutations-page')
export class StepsPermutationsPage extends PermutationsPageBase {

  override render() {
    const verticalSteps = [
      { status: 'success' as const, header: 'Step 1: Order placed', details: 'Order #12345 confirmed', statusIconAriaLabel: 'Complete' },
      { status: 'success' as const, header: 'Step 2: Payment processed', statusIconAriaLabel: 'Complete' },
      { status: 'loading' as const, header: 'Step 3: Shipping', details: 'Package in transit', statusIconAriaLabel: 'In progress' },
      { status: 'pending' as const, header: 'Step 4: Delivered', statusIconAriaLabel: 'Pending' },
    ];

    const statusSteps = [
      { status: 'success' as const, header: 'Success step' },
      { status: 'error' as const, header: 'Error step', details: 'Something went wrong' },
      { status: 'warning' as const, header: 'Warning step' },
      { status: 'info' as const, header: 'Info step' },
      { status: 'loading' as const, header: 'Loading step' },
      { status: 'pending' as const, header: 'Pending step' },
    ];

    const horizontalSteps = [
      { status: 'success' as const, header: 'Configure' },
      { status: 'success' as const, header: 'Review' },
      { status: 'in-progress' as const, header: 'Deploy' },
      { status: 'pending' as const, header: 'Verify' },
    ];

    return html`
      <h2>Steps — Permutations</h2>

      <section>
        <h3>Vertical (Default)</h3>
        <cs-steps .steps=${verticalSteps} aria-label="Order tracking"></cs-steps>
      </section>

      <section>
        <h3>All Status Types</h3>
        <cs-steps .steps=${statusSteps} aria-label="Status examples"></cs-steps>
      </section>

      <section>
        <h3>Horizontal</h3>
        <cs-steps .steps=${horizontalSteps} orientation="horizontal" aria-label="Deployment pipeline"></cs-steps>
      </section>
    `;
  }
}

export const tagName = 'steps-permutations-page';
