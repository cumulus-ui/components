import { CsToggleInternal } from './internal.js';

export class CsToggle extends CsToggleInternal {}

customElements.define('cs-toggle', CsToggle);

export type { ToggleProps } from './interfaces.js';
