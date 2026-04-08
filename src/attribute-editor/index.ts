import { CsAttributeEditorInternal } from './internal.js';

export class CsAttributeEditor extends CsAttributeEditorInternal {}

customElements.define('cs-attribute-editor', CsAttributeEditor);

export type { AttributeEditorProps } from './interfaces.js';
