// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const treeViewTreeItemStyles = css`
.tree-view-tree-item--treeitem-group {
  list-style: none;
  margin-block: 0;
  margin-inline: 0;
  padding-block: 0;
  padding-inline: 0;
  position: relative;
}

.tree-view-tree-item--treeitem {
  list-style: none;
  margin-block: 0;
  margin-inline: 0;
  padding-block: 0;
  padding-inline: 0;
  position: relative;
}
.tree-view-tree-item--treeitem.tree-view-tree-item--offset {
  margin-inline-start: var(--space-tree-view-indentation, 24px);
}
.tree-view-tree-item--treeitem > .tree-view-tree-item--treeitem-content-wrapper {
  display: grid;
  grid-template-columns: 28px 1fr;
  align-items: baseline;
}
:host-context([data-awsui-focus-visible=true]) .tree-view-tree-item--treeitem > .tree-view-tree-item--treeitem-content-wrapper:has(.tree-view-tree-item--tree-item-focus-target:focus) {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .tree-view-tree-item--treeitem > .tree-view-tree-item--treeitem-content-wrapper:has(.tree-view-tree-item--tree-item-focus-target:focus) {
  outline: 2px dotted transparent;
  outline-offset: calc(0px - 1px);
}
:host-context([data-awsui-focus-visible=true]) .tree-view-tree-item--treeitem > .tree-view-tree-item--treeitem-content-wrapper:has(.tree-view-tree-item--tree-item-focus-target:focus)::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * 0px);
  inset-block-start: calc(-1 * 0px);
  inline-size: calc(100% + 0px + 0px);
  block-size: calc(100% + 0px + 0px);
  border-start-start-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-start-end-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-end-start-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-end-end-radius: var(--border-radius-control-default-focus-ring, 4px);
  box-shadow: 0 0 0 2px var(--color-border-item-focused, #006ce0);
}
.tree-view-tree-item--treeitem > .tree-view-tree-item--treeitem-content-wrapper > .tree-view-tree-item--expand-toggle-wrapper {
  display: grid;
  grid-column: 1;
  grid-row: 1;
}
.tree-view-tree-item--treeitem > .tree-view-tree-item--treeitem-content-wrapper > .tree-view-tree-item--expand-toggle-wrapper > .tree-view-tree-item--toggle {
  justify-self: center;
  position: relative;
  inset-block-start: 2px;
  inset-inline-start: -2px;
}
.tree-view-tree-item--treeitem > .tree-view-tree-item--treeitem-content-wrapper > .tree-view-tree-item--structured-item-wrapper {
  grid-column: 2;
  grid-row: 1/span 2;
  padding-block: var(--space-scaled-xxxs, 2px);
  position: relative;
}

.tree-view-tree-item--tree-item-structured-item {
  /* used in keyboard navigation */
}

.tree-view-tree-item--tree-item-focus-target {
  outline: none;
}
`;
