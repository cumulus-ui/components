import { CsDateRangePickerInternal } from './internal.js';

export class CsDateRangePicker extends CsDateRangePickerInternal {}

customElements.define('cs-date-range-picker', CsDateRangePicker);

export type { DateRangePickerProps } from './interfaces.js';
