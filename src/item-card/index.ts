import { CsItemCardInternal } from './internal.js';

export class CsItemCard extends CsItemCardInternal {}

customElements.define('cs-item-card', CsItemCard);

export type { ItemCardProps, InternalItemCardProps } from './interfaces.js';
