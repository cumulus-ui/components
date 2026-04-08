import { CsStatusIndicatorInternal } from './internal.js';

export class CsStatusIndicator extends CsStatusIndicatorInternal {}

customElements.define('cs-status-indicator', CsStatusIndicator);

export type { StatusIndicatorProps } from './interfaces.js';
