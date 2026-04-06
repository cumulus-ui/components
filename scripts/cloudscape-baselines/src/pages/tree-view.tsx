import TreeView from '@cloudscape-design/components/tree-view';
import { useState } from 'react';

const sectionStyle: React.CSSProperties = { marginBottom: 24, padding: 16, border: '1px solid #e9ebed', borderRadius: 8 };
const h3Style: React.CSSProperties = { marginTop: 0, marginBottom: '1em', fontSize: 14, lineHeight: 1.15, color: '#687078', textTransform: 'uppercase', letterSpacing: 0.5 };

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

const renderItem = (item: TreeNode) => ({
  content: item.label,
  icon: item.children ? <span style={{ fontSize: 14 }}>📁</span> : <span style={{ fontSize: 14 }}>📄</span>,
});

const getItemId = (item: TreeNode) => item.id;
const getItemChildren = (item: TreeNode) => item.children;

export default function TreeViewPermutations() {
  const [expandedItems, setExpandedItems] = useState(['src', 'components']);
  const [expandedWithLines, setExpandedWithLines] = useState(['src', 'tests']);

  return (
    <div style={{ display: 'block', padding: 24, fontFamily: 'system-ui, sans-serif', lineHeight: 1.15 }}>
      <h2 style={{ marginTop: 0, marginBottom: '0.83em', lineHeight: 1.15 }}>TreeView — Permutations</h2>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Default</h3>
        <TreeView
          items={fileTree}
          renderItem={renderItem}
          getItemId={getItemId}
          getItemChildren={getItemChildren}
          expandedItems={expandedItems}
          ariaLabel="File tree"
          onItemToggle={({ detail }) => {
            if (detail.expanded) {
              setExpandedItems(prev => [...prev, detail.id]);
            } else {
              setExpandedItems(prev => prev.filter(i => i !== detail.id));
            }
          }}
        />
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>With Connector Lines</h3>
        <TreeView
          items={fileTree}
          renderItem={renderItem}
          getItemId={getItemId}
          getItemChildren={getItemChildren}
          expandedItems={expandedWithLines}
          ariaLabel="File tree with connector lines"
          connectorLines="vertical"
          onItemToggle={({ detail }) => {
            if (detail.expanded) {
              setExpandedWithLines(prev => [...prev, detail.id]);
            } else {
              setExpandedWithLines(prev => prev.filter(i => i !== detail.id));
            }
          }}
        />
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>All Collapsed</h3>
        <TreeView
          items={fileTree}
          renderItem={renderItem}
          getItemId={getItemId}
          getItemChildren={getItemChildren}
          expandedItems={[]}
          ariaLabel="Collapsed tree"
        />
      </section>
    </div>
  );
}
