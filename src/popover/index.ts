import { CsPopoverInternal } from './internal.js';

export class CsPopover extends CsPopoverInternal {}

customElements.define('cs-popover', CsPopover);

export type { PopoverProps } from './interfaces.js';
