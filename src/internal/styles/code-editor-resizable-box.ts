// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const codeEditorResizableBoxStyles = css`
.code-editor-resizable-box--resizable-box {
  position: relative;
  inline-size: 100%;
}
.code-editor-resizable-box--resizable-box:not(.code-editor-resizable-box--cursor-active) {
  transition: height var(--motion-duration-complex, 250ms) var(--motion-easing-responsive, cubic-bezier(0, 0, 0, 1));
}
@media (prefers-reduced-motion: reduce) {
  .code-editor-resizable-box--resizable-box:not(.code-editor-resizable-box--cursor-active) {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .code-editor-resizable-box--resizable-box:not(.code-editor-resizable-box--cursor-active), .awsui-mode-entering .code-editor-resizable-box--resizable-box:not(.code-editor-resizable-box--cursor-active) {
  animation: none;
  transition: none;
}

.code-editor-resizable-box--resizable-box-handle {
  position: absolute;
  inset-inline-end: 0;
  inset-block-end: 0;
  z-index: 10;
  inline-size: var(--space-l, 20px);
  block-size: var(--space-l, 20px);
}

.code-editor-resizable-box--resize-active {
  -webkit-user-select: none;
          user-select: none;
}
`;
