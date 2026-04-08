import { CsCodeEditorInternal } from './internal.js';

export class CsCodeEditor extends CsCodeEditorInternal {}

customElements.define('cs-code-editor', CsCodeEditor);

export type { CodeEditorProps } from './interfaces.js';
