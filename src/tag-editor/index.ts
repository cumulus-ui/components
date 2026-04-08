import { CsTagEditorInternal } from './internal.js';

export class CsTagEditor extends CsTagEditorInternal {}

customElements.define('cs-tag-editor', CsTagEditor);

export type { TagEditorProps } from './interfaces.js';
