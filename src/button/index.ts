import { CsButtonInternal } from './internal.js';

export class CsButton extends CsButtonInternal {}

customElements.define('cs-button', CsButton);

export type { ButtonProps } from './interfaces.js';
