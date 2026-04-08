import { CsFileTokenGroupInternal } from './internal.js';

export class CsFileTokenGroup extends CsFileTokenGroupInternal {}

customElements.define('cs-file-token-group', CsFileTokenGroup);

export type { FileTokenGroupProps } from './interfaces.js';
