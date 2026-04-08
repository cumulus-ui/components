import { CsInputInternal } from './internal.js';

export class CsInput extends CsInputInternal {}

customElements.define('cs-input', CsInput);

export type { InputProps } from './interfaces.js';
