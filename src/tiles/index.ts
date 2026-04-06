import { CsTilesInternal } from './internal.js';

export class CsTiles extends CsTilesInternal {}

customElements.define('cs-tiles', CsTiles);

export type { TilesProps } from './interfaces.js';
