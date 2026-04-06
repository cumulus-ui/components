import { CsGridInternal } from './internal.js';

export class CsGrid extends CsGridInternal {}

customElements.define('cs-grid', CsGrid);

export type { GridProps } from './interfaces.js';
