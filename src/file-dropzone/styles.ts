// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.root {
  padding-block: var(--space-static-l, 20px);
  padding-inline: var(--space-static-l, 20px);
  border-start-start-radius: var(--border-radius-dropzone, 12px);
  border-start-end-radius: var(--border-radius-dropzone, 12px);
  border-end-start-radius: var(--border-radius-dropzone, 12px);
  border-end-end-radius: var(--border-radius-dropzone, 12px);
  color: var(--color-dropzone-text-default, #424650);
  background-color: var(--color-dropzone-background-default, #ffffff);
  border-color: var(--color-dropzone-border-default, #8c8c94);
  border-block: 1px dashed var(--color-dropzone-border-default, #8c8c94);
  border-inline: 1px dashed var(--color-dropzone-border-default, #8c8c94);
}
.root.hovered {
  color: var(--color-dropzone-text-hover, #424650);
  background-color: var(--color-dropzone-background-hover, #f0fbff);
  border-block: 1px dashed var(--color-dropzone-border-hover, #002b66);
  border-inline: 1px dashed var(--color-dropzone-border-hover, #002b66);
}

.content {
  display: flex;
  flex-direction: column;
  gap: var(--space-static-xxs, 4px);
  align-items: center;
  justify-content: center;
}
`;

export { componentStyles as fileDropzoneStyles };
export { sharedStyles };
