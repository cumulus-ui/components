import { CsFlashbarInternal } from './internal.js';

export class CsFlashbar extends CsFlashbarInternal {}

customElements.define('cs-flashbar', CsFlashbar);

export type { FlashbarProps } from './interfaces.js';
