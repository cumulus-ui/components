// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const panelResizeHandleStyles = css`
.panel-resize-handle--slider {
  padding-block: 0;
  padding-inline: 0;
  cursor: ns-resize;
  margin-block: 0;
  margin-inline: 0;
  block-size: 18px;
  touch-action: none;
}
.panel-resize-handle--slider:focus {
  outline: none;
}
:host-context([data-awsui-focus-visible=true]) .panel-resize-handle--slider:focus {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .panel-resize-handle--slider:focus {
  outline: 2px dotted transparent;
  outline-offset: calc(0px - 1px);
}
:host-context([data-awsui-focus-visible=true]) .panel-resize-handle--slider:focus::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * 0px);
  inset-block-start: calc(-1 * 0px);
  inline-size: calc(100% + 0px + 0px);
  block-size: calc(100% + 0px + 0px);
  border-start-start-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-start-end-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-end-start-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-end-end-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  box-shadow: 0 0 0 2px var(--color-border-item-focused-uk47pl, #006ce0);
}

.panel-resize-handle--slider-side,
.panel-resize-handle--slider-side-start {
  cursor: ew-resize;
  margin-block: 0;
  margin-inline-end: 0;
}
`;
