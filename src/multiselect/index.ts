import { CsMultiselectInternal } from './internal.js';

export class CsMultiselect extends CsMultiselectInternal {}

customElements.define('cs-multiselect', CsMultiselect);

export type { MultiselectProps } from './interfaces.js';
