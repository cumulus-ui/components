import { CsColumnLayoutInternal } from './internal.js';

export class CsColumnLayout extends CsColumnLayoutInternal {}

customElements.define('cs-column-layout', CsColumnLayout);

export type { ColumnLayoutProps } from './interfaces.js';
