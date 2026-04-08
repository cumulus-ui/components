import { CsHotspotInternal } from './internal.js';

export class CsHotspot extends CsHotspotInternal {}

customElements.define('cs-hotspot', CsHotspot);

export type { HotspotProps } from './interfaces.js';
