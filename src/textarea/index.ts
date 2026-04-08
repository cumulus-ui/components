import { CsTextareaInternal } from './internal.js';

export class CsTextarea extends CsTextareaInternal {}

customElements.define('cs-textarea', CsTextarea);

export type { TextareaProps } from './interfaces.js';
