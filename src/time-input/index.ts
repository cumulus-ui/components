import { CsTimeInputInternal } from './internal.js';

export class CsTimeInput extends CsTimeInputInternal {}

customElements.define('cs-time-input', CsTimeInput);

export type { TimeInputProps } from './interfaces.js';
