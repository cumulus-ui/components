import { CsAlertInternal } from './internal.js';

export class CsAlert extends CsAlertInternal {}

customElements.define('cs-alert', CsAlert);

export type { AlertProps } from './interfaces.js';
