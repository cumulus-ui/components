import { CsButtonGroupInternal } from './internal.js';

export class CsButtonGroup extends CsButtonGroupInternal {}

customElements.define('cs-button-group', CsButtonGroup);

export type { ButtonGroupProps } from './interfaces.js';
