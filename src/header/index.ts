import { CsHeaderInternal } from './internal.js';

export class CsHeader extends CsHeaderInternal {}

customElements.define('cs-header', CsHeader);

export type { HeaderProps } from './interfaces.js';
