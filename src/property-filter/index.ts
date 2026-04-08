import { CsPropertyFilterInternal } from './internal.js';

export class CsPropertyFilter extends CsPropertyFilterInternal {}

customElements.define('cs-property-filter', CsPropertyFilter);

export type { PropertyFilterProps } from './interfaces.js';
export type { SimpleToken, SimpleQuery } from './internal.js';
