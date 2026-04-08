import { CsSplitPanelInternal } from './internal.js';

export class CsSplitPanel extends CsSplitPanelInternal {}

customElements.define('cs-split-panel', CsSplitPanel);

export type { SplitPanelProps } from './interfaces.js';
