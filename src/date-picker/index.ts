import { CsDatePickerInternal } from './internal.js';

export class CsDatePicker extends CsDatePickerInternal {}

customElements.define('cs-date-picker', CsDatePicker);

export type { DatePickerProps } from './interfaces.js';
