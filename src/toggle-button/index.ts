import { CsToggleButtonInternal } from './internal.js';

export class CsToggleButton extends CsToggleButtonInternal {}

customElements.define('cs-toggle-button', CsToggleButton);

export type { ToggleButtonProps } from './interfaces.js';
