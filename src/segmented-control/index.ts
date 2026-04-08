import { CsSegmentedControlInternal } from './internal.js';

export class CsSegmentedControl extends CsSegmentedControlInternal {}

customElements.define('cs-segmented-control', CsSegmentedControl);

export type { SegmentedControlProps } from './interfaces.js';
