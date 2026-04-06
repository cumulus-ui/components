import { CsCheckboxInternal } from './internal.js';

export class CsCheckbox extends CsCheckboxInternal {}

customElements.define('cs-checkbox', CsCheckbox);

export type { CheckboxProps } from './interfaces.js';
