import { CsCollectionPreferencesInternal } from './internal.js';

export class CsCollectionPreferences extends CsCollectionPreferencesInternal {}

customElements.define('cs-collection-preferences', CsCollectionPreferences);

export type { CollectionPreferencesProps } from './interfaces.js';
