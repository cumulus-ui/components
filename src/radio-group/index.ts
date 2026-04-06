import { CsRadioGroupInternal } from './internal.js';

export class CsRadioGroup extends CsRadioGroupInternal {}

customElements.define('cs-radio-group', CsRadioGroup);

export type { RadioGroupProps } from './interfaces.js';
