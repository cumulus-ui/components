import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../../../src/tree-view/index.js';
import '../../../src/icon/index.js';

interface TreeNode {
  id: string;
  label: string;
  children?: TreeNode[];
}

const fileTree: TreeNode[] = [
  {
    id: 'src',
    label: 'src',
    children: [
      {
        id: 'components',
        label: 'components',
        children: [
          { id: 'button', label: 'Button.tsx' },
          { id: 'input', label: 'Input.tsx' },
          { id: 'modal', label: 'Modal.tsx' },
        ],
      },
      {
        id: 'utils',
        label: 'utils',
        children: [
          { id: 'helpers', label: 'helpers.ts' },
          { id: 'constants', label: 'constants.ts' },
        ],
      },
      { id: 'index', label: 'index.ts' },
    ],
  },
  {
    id: 'tests',
    label: 'tests',
    children: [
      { id: 'button-test', label: 'Button.test.tsx' },
      { id: 'input-test', label: 'Input.test.tsx' },
    ],
  },
  { id: 'readme', label: 'README.md' },
  { id: 'package', label: 'package.json' },
];

@customElement('tree-view-permutations-page')
export class TreeViewPermutationsPage extends LitElement {
  static override styles = css`
    :host {
      display: block;
      padding: 24px;
      font-family: system-ui, sans-serif;
      line-height: 1.15;
    }
    h2 {
      margin-top: 0;
      margin-bottom: 0.83em;
      line-height: 1.15;
    }
    section {
      margin-bottom: 24px;
      padding: 16px;
      border: 1px solid #e9ebed;
      border-radius: 8px;
    }
    section h3 {
      margin-top: 0;
      margin-bottom: 1em;
      font-size: 14px;
      line-height: 1.15;
      color: #687078;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
  `;

  @state() private _expandedItems = ['src', 'components'];
  @state() private _expandedWithLines = ['src', 'tests'];

  private _renderItem = (item: TreeNode) => ({
    content: item.label,
    icon: item.children ? html`<cs-icon name="folder"></cs-icon>` : html`<cs-icon name="file"></cs-icon>`,
  });

  private _getItemId = (item: TreeNode) => item.id;
  private _getItemChildren = (item: TreeNode) => item.children;

  private _handleToggle = (e: CustomEvent<{ id: string; expanded: boolean }>) => {
    const { id, expanded } = e.detail;
    if (expanded) {
      this._expandedItems = [...this._expandedItems, id];
    } else {
      this._expandedItems = this._expandedItems.filter(i => i !== id);
    }
  };

  private _handleToggleWithLines = (e: CustomEvent<{ id: string; expanded: boolean }>) => {
    const { id, expanded } = e.detail;
    if (expanded) {
      this._expandedWithLines = [...this._expandedWithLines, id];
    } else {
      this._expandedWithLines = this._expandedWithLines.filter(i => i !== id);
    }
  };

  override render() {
    return html`
      <h2>TreeView — Permutations</h2>

      <section>
        <h3>Default</h3>
        <cs-tree-view
          .items=${fileTree}
          .renderItem=${this._renderItem}
          .getItemId=${this._getItemId}
          .getItemChildren=${this._getItemChildren}
          .expandedItems=${this._expandedItems}
          aria-label="File tree"
          @itemToggle=${this._handleToggle}
        ></cs-tree-view>
      </section>

      <section>
        <h3>With Connector Lines</h3>
        <cs-tree-view
          .items=${fileTree}
          .renderItem=${this._renderItem}
          .getItemId=${this._getItemId}
          .getItemChildren=${this._getItemChildren}
          .expandedItems=${this._expandedWithLines}
          aria-label="File tree with connector lines"
          connector-lines="vertical"
          @itemToggle=${this._handleToggleWithLines}
        ></cs-tree-view>
      </section>

      <section>
        <h3>All Collapsed</h3>
        <cs-tree-view
          .items=${fileTree}
          .renderItem=${this._renderItem}
          .getItemId=${this._getItemId}
          .getItemChildren=${this._getItemChildren}
          .expandedItems=${[]}
          aria-label="Collapsed tree"
        ></cs-tree-view>
      </section>
    `;
  }
}

export const tagName = 'tree-view-permutations-page';
