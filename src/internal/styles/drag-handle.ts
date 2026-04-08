// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const dragHandleStyles = css`
.drag-handle--handle {
  appearance: none;
  color: var(--color-text-interactive-default-ugh9wp, #424650);
  background: transparent;
  inline-size: -moz-fit-content;
  inline-size: fit-content;

  touch-action: none;
}
.drag-handle--handle-size-normal {
  block-size: var(--line-height-body-m-2mh3ke, 20px);
  padding-inline: var(--space-scaled-xxxs-oo06c7, 2px);
}
.drag-handle--handle-size-small {
  block-size: var(--line-height-body-s-nu5hx1, 16px);
}
.drag-handle--handle-drag-indicator:not(.drag-handle--handle-disabled) {
  cursor: grab;
}
.drag-handle--handle-drag-indicator:not(.drag-handle--handle-disabled).drag-handle--active {
  cursor: grabbing;
}
.drag-handle--handle-resize-area {
  cursor: nwse-resize;

}
.drag-handle--handle-resize-area:dir(rtl) {
  cursor: nesw-resize;
}
.drag-handle--handle-resize-horizontal {
  cursor: ew-resize;
}
.drag-handle--handle-resize-vertical {
  cursor: ns-resize;
}
.drag-handle--handle:hover {
  color: var(--color-text-interactive-hover-6naf7i, #0f141a);
}
.drag-handle--handle:focus {
  outline: none;
  text-decoration: none;
}
:host-context([data-awsui-focus-visible=true]) .drag-handle--handle:focus:not(.drag-handle--hide-focus) {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .drag-handle--handle:focus:not(.drag-handle--hide-focus) {
  outline: 2px dotted transparent;
  outline-offset: calc(0px - 1px);
}
:host-context([data-awsui-focus-visible=true]) .drag-handle--handle:focus:not(.drag-handle--hide-focus)::before {
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

.drag-handle--resize-icon {
  stroke: var(--color-text-interactive-default-ugh9wp, #424650);
}
.drag-handle--resize-icon:hover {
  stroke: var(--color-text-interactive-hover-6naf7i, #0f141a);
}
.drag-handle--resize-icon-vertical {
  margin-block: auto;
  margin-inline: auto;
}
.drag-handle--resize-icon-horizontal {
  transform: rotate(90deg);
}

.drag-handle--prevent-pointer {
  pointer-events: none;
}
`;
