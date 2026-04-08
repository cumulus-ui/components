import { CsCardsInternal } from './internal.js';

export class CsCards extends CsCardsInternal {}

customElements.define('cs-cards', CsCards);

export type { CardsProps } from './interfaces.js';
