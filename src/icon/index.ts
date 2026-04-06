import { CsIconInternal } from './internal.js';

export class CsIcon extends CsIconInternal {}

customElements.define('cs-icon', CsIcon);

export type { IconProps } from './interfaces.js';
