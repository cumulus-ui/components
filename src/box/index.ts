import { CsBoxInternal } from './internal.js';

export class CsBox extends CsBoxInternal {}

customElements.define('cs-box', CsBox);

export type { BoxProps } from './interfaces.js';
