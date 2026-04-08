import { CsTokenInternal } from './internal.js';

export class CsToken extends CsTokenInternal {}

customElements.define('cs-token', CsToken);

export type { TokenProps } from './interfaces.js';
