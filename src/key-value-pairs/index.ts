import { CsKeyValuePairsInternal } from './internal.js';

export class CsKeyValuePairs extends CsKeyValuePairsInternal {}

customElements.define('cs-key-value-pairs', CsKeyValuePairs);

export type { KeyValuePairsProps } from './interfaces.js';
