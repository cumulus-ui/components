import { CsTabsInternal } from './internal.js';

export class CsTabs extends CsTabsInternal {}

customElements.define('cs-tabs', CsTabs);

export type { TabsProps } from './interfaces.js';
