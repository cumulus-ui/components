// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
import { css } from 'lit';

export const dragHandleStyles = css`
.handle {
  appearance: none;
  color: var(--color-text-interactive-default-ugh9wp, #424650);
  background: transparent;
  inline-size: -moz-fit-content;
  inline-size: fit-content;

  touch-action: none;
}
.handle-size-normal {
  block-size: var(--line-height-body-m-2mh3ke, 20px);
  padding-inline: var(--space-scaled-xxxs-oo06c7, 2px);
}
.handle-size-small {
  block-size: var(--line-height-body-s-nu5hx1, 16px);
}
.handle-drag-indicator:not(.handle-disabled) {
  cursor: grab;
}
.handle-drag-indicator:not(.handle-disabled).active {
  cursor: grabbing;
}
.handle-resize-area {
  cursor: nwse-resize;

}
.handle-resize-area:dir(rtl) {
  cursor: nesw-resize;
}
.handle-resize-horizontal {
  cursor: ew-resize;
}
.handle-resize-vertical {
  cursor: ns-resize;
}
.handle:hover {
  color: var(--color-text-interactive-hover-6naf7i, #0f141a);
}
.handle:focus {
  outline: none;
  text-decoration: none;
}
:host-context([data-awsui-focus-visible=true]) .handle:focus:not(.hide-focus) {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .handle:focus:not(.hide-focus) {
  outline: 2px dotted transparent;
  outline-offset: calc(0px - 1px);
}
:host-context([data-awsui-focus-visible=true]) .handle:focus:not(.hide-focus)::before {
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

.resize-icon {
  stroke: var(--color-text-interactive-default-ugh9wp, #424650);
}
.resize-icon:hover {
  stroke: var(--color-text-interactive-hover-6naf7i, #0f141a);
}
.resize-icon-vertical {
  margin-block: auto;
  margin-inline: auto;
}
.resize-icon-horizontal {
  transform: rotate(90deg);
}

.prevent-pointer {
  pointer-events: none;
}
`;
