import { CsStepsInternal } from './internal.js';

export class CsSteps extends CsStepsInternal {}

customElements.define('cs-steps', CsSteps);

export type { StepsProps } from './interfaces.js';
