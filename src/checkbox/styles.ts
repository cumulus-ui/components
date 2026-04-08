// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.root.root {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: var(--color-text-body-default, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  display: flex;
}

.checkbox-control {
  margin-block-start: calc((var(--line-height-body-m, 20px) - var(--size-control, 16px)) / 2);
  min-block-size: var(--size-control, 16px);
  min-inline-size: var(--size-control, 16px);
  block-size: var(--size-control, 16px);
  inline-size: var(--size-control, 16px);
}

.outline {
  --awsui-style-focus-ring-box-shadow: 0 0 0 var(--awsui-style-focus-ring-border-width, 2px) var(--awsui-style-focus-ring-border-color, var(--color-border-item-focused, #006ce0));
  position: relative;
}
.outline {
  outline: 2px dotted transparent;
  outline-offset: calc(2px - 1px);
}
.outline::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * 2px);
  inset-block-start: calc(-1 * 2px);
  inline-size: calc(100% + 2px + 2px);
  block-size: calc(100% + 2px + 2px);
  border-start-start-radius: var(--awsui-style-focus-ring-border-radius, var(--border-radius-control-default-focus-ring, 4px));
  border-start-end-radius: var(--awsui-style-focus-ring-border-radius, var(--border-radius-control-default-focus-ring, 4px));
  border-end-start-radius: var(--awsui-style-focus-ring-border-radius, var(--border-radius-control-default-focus-ring, 4px));
  border-end-end-radius: var(--awsui-style-focus-ring-border-radius, var(--border-radius-control-default-focus-ring, 4px));
  box-shadow: var(--awsui-style-focus-ring-box-shadow);
}
`;

export { componentStyles as checkboxStyles };
export { sharedStyles };
