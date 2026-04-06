import { CsLiveRegionInternal } from './internal.js';

export class CsLiveRegion extends CsLiveRegionInternal {}

customElements.define('cs-live-region', CsLiveRegion);

export type { LiveRegionProps } from './interfaces.js';
