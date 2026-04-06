import { CsSpinnerInternal } from './internal.js';

export class CsSpinner extends CsSpinnerInternal {}

customElements.define('cs-spinner', CsSpinner);

export type { SpinnerProps } from './interfaces.js';
