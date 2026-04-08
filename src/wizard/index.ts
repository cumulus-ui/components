import { CsWizardInternal } from './internal.js';

export class CsWizard extends CsWizardInternal {}

customElements.define('cs-wizard', CsWizard);

export type { WizardProps } from './interfaces.js';
