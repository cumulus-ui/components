import { CsSelectInternal } from './internal.js';

export class CsSelect extends CsSelectInternal {}

customElements.define('cs-select', CsSelect);

export type { SelectProps } from './interfaces.js';
