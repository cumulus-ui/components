import { CsListInternal } from './internal.js';

export class CsList extends CsListInternal {}

customElements.define('cs-list', CsList);

export type { ListProps } from './interfaces.js';
