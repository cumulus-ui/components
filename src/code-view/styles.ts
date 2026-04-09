// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.root {
  position: relative;
  border-start-start-radius: var(--border-radius-tiles, 8px);
  border-start-end-radius: var(--border-radius-tiles, 8px);
  border-end-start-radius: var(--border-radius-tiles, 8px);
  border-end-end-radius: var(--border-radius-tiles, 8px);
  background-color: #f8f8f8;
}
:host-context(.awsui-dark-mode) .root, :host-context(.awsui-dark-mode) .root {
  background-color: #282c34;
}

.scroll-container {
  overflow-x: auto;
}

.code-table {
  padding-block-start: var(--space-static-xs, 8px);
  padding-block-end: var(--space-static-xs, 8px);
  table-layout: auto;
  inline-size: 100%;
  border-spacing: 0;
}
.code-table-with-actions {
  min-block-size: calc(2 * var(--space-scaled-xs, 8px) + var(--space-scaled-xxl, 32px));
  padding-inline-end: calc(2 * var(--space-static-xxxl, 40px));
}

.screenreader-only {
  position: absolute;
  inset-block-start: -9999px;
  inset-inline-start: -9999px;
}

.line-number {
  white-space: nowrap;
  position: sticky;
  inset-inline-start: 0;
  border-inline-end-width: 1px;
  border-inline-end-style: solid;
  border-inline-end-color: var(--color-border-divider-default, #c6c6cd);
  padding-inline-start: var(--space-static-xs, 8px);
  padding-inline-end: var(--space-static-xs, 8px);
  background-color: #f8f8f8;
}
:host-context(.awsui-dark-mode) .line-number, :host-context(.awsui-dark-mode) .line-number {
  background-color: #282c34;
}

.unselectable {
  -webkit-user-select: none;
  user-select: none;
}

.code-line {
  padding-inline-start: var(--space-static-xs, 8px);
  padding-inline-end: var(--space-static-xs, 8px);
}
.code-line-wrap {
  white-space: pre-wrap;
  word-break: break-word;
}
.code-line-nowrap {
  white-space: pre;
}

.code-table-with-line-wrapping .line-number,
.code-table-with-line-wrapping .code-line {
  vertical-align: text-top;
}
.code-table-with-line-wrapping.code-table-with-actions {
  padding-inline-end: var(--space-static-xxl, 32px);
}

.actions {
  position: absolute;
  inset-block-start: var(--space-scaled-xs, 8px);
  inset-inline-end: var(--space-scaled-xs, 8px);
  padding-inline-start: var(--space-container-horizontal, 20px);
}
`;

export { componentStyles as codeViewStyles };
export { sharedStyles };
