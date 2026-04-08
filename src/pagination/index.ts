import { CsPaginationInternal } from './internal.js';

export class CsPagination extends CsPaginationInternal {}

customElements.define('cs-pagination', CsPagination);

export type { PaginationProps } from './interfaces.js';
