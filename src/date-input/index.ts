import { CsDateInputInternal } from './internal.js';

export class CsDateInput extends CsDateInputInternal {}

customElements.define('cs-date-input', CsDateInput);

export type { DateInputProps } from './interfaces.js';
