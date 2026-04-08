import { CsTableInternal } from './internal.js';

export class CsTable extends CsTableInternal {}

customElements.define('cs-table', CsTable);

export type { TableProps } from './interfaces.js';
