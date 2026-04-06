import { ComponentWrapper } from '../../core/component-wrapper.js';
import { ElementWrapper } from '../../core/element-wrapper.js';

export class TreeViewWrapper extends ComponentWrapper {
  static override rootSelector = 'cs-tree-view';

  findNodes(): ElementWrapper[] {
    return this.findAll('.node');
  }

  findNodeByIndex(index: number): ElementWrapper | null {
    const nodes = this.findNodes();
    return nodes[index] ?? null;
  }

  findNodeContent(node: ElementWrapper): ElementWrapper | null {
    return node.find('.node-primary');
  }

  findNodeSecondaryContent(node: ElementWrapper): ElementWrapper | null {
    return node.find('.node-secondary');
  }

  findNodeToggle(node: ElementWrapper): ElementWrapper | null {
    return node.find('.toggle');
  }

  findNodeIcon(node: ElementWrapper): ElementWrapper | null {
    return node.find('.node-icon');
  }

  findNodeActions(node: ElementWrapper): ElementWrapper | null {
    return node.find('.node-actions');
  }

  findChildren(node: ElementWrapper): ElementWrapper | null {
    return node.find('.tree');
  }
}
