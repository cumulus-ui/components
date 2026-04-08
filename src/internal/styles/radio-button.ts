// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const radioButtonStyles = css`
.radio-button--radio-control {
  margin-block-start: calc((var(--line-height-body-m, 20px) - var(--size-control, 16px)) / 2);
  min-block-size: var(--size-control, 16px);
  min-inline-size: var(--size-control, 16px);
  block-size: var(--size-control, 16px);
  inline-size: var(--size-control, 16px);
}

.radio-button--outline {
  --awsui-style-focus-ring-box-shadow: 0 0 0 var(--awsui-style-focus-ring-border-width, 2px) var(--awsui-style-focus-ring-border-color, var(--color-border-item-focused, #006ce0));
  position: relative;
}
.radio-button--outline {
  outline: 2px dotted transparent;
  outline-offset: calc(2px - 1px);
}
.radio-button--outline::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * 2px);
  inset-block-start: calc(-1 * 2px);
  inline-size: calc(100% + 2px + 2px);
  block-size: calc(100% + 2px + 2px);
  border-start-start-radius: var(--awsui-style-focus-ring-border-radius, var(--border-radius-control-circular-focus-ring, 4px));
  border-start-end-radius: var(--awsui-style-focus-ring-border-radius, var(--border-radius-control-circular-focus-ring, 4px));
  border-end-start-radius: var(--awsui-style-focus-ring-border-radius, var(--border-radius-control-circular-focus-ring, 4px));
  border-end-end-radius: var(--awsui-style-focus-ring-border-radius, var(--border-radius-control-circular-focus-ring, 4px));
  box-shadow: var(--awsui-style-focus-ring-box-shadow);
}

.radio-button--styled-circle-border {
  stroke: var(--color-border-control-default, #8c8c94);
  fill: var(--color-background-control-default, #ffffff);
}
.radio-button--styled-circle-border.radio-button--styled-circle-disabled, .radio-button--styled-circle-border.radio-button--styled-circle-readonly {
  fill: var(--color-background-control-disabled, #dedee3);
  stroke: var(--color-background-control-disabled, #dedee3);
}

.radio-button--styled-circle-fill {
  stroke: var(--color-background-control-checked, #006ce0);
  fill: var(--color-foreground-control-default, #ffffff);
  opacity: 0;
  transition: opacity var(--motion-duration-transition-quick, 90ms) var(--motion-easing-transition-quick, linear);
}
@media (prefers-reduced-motion: reduce) {
  .radio-button--styled-circle-fill {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .radio-button--styled-circle-fill, .awsui-mode-entering .radio-button--styled-circle-fill {
  animation: none;
  transition: none;
}
.radio-button--styled-circle-fill.radio-button--styled-circle-checked {
  opacity: 1;
}
.radio-button--styled-circle-fill.radio-button--styled-circle-disabled {
  fill: var(--color-foreground-control-disabled, #ffffff);
  stroke: var(--color-background-control-disabled, #dedee3);
}
.radio-button--styled-circle-fill.radio-button--styled-circle-readonly {
  fill: var(--color-foreground-control-read-only, #656871);
  stroke: var(--color-background-control-disabled, #dedee3);
}
`;
