import { CsTokenGroupInternal } from './internal.js';

export class CsTokenGroup extends CsTokenGroupInternal {}

customElements.define('cs-token-group', CsTokenGroup);

export type { TokenGroupProps } from './interfaces.js';
