import { CsTooltipInternal } from './internal.js';

export class CsTooltip extends CsTooltipInternal {}

customElements.define('cs-tooltip', CsTooltip);

export type { TooltipProps } from './interfaces.js';
