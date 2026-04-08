import { CsAutosuggestInternal } from './internal.js';

export class CsAutosuggest extends CsAutosuggestInternal {}

customElements.define('cs-autosuggest', CsAutosuggest);

export type { AutosuggestProps } from './interfaces.js';
