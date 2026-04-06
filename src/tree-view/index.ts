import { CsTreeViewInternal } from './internal.js';

export class CsTreeView extends CsTreeViewInternal {}

customElements.define('cs-tree-view', CsTreeView);

export type { TreeViewProps } from './interfaces.js';
