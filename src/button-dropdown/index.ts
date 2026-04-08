import { CsButtonDropdownInternal } from './internal.js';

export class CsButtonDropdown extends CsButtonDropdownInternal {}

customElements.define('cs-button-dropdown', CsButtonDropdown);

export type { ButtonDropdownProps } from './interfaces.js';
