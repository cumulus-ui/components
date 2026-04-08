import { CsSliderInternal } from './internal.js';

export class CsSlider extends CsSliderInternal {}

customElements.define('cs-slider', CsSlider);

export type { SliderProps } from './interfaces.js';
