import { CsProgressBarInternal } from './internal.js';

export class CsProgressBar extends CsProgressBarInternal {}

customElements.define('cs-progress-bar', CsProgressBar);

export type { ProgressBarProps } from './interfaces.js';
