import { CsTextFilterInternal } from './internal.js';

export class CsTextFilter extends CsTextFilterInternal {}

customElements.define('cs-text-filter', CsTextFilter);

export type { TextFilterProps } from './interfaces.js';
