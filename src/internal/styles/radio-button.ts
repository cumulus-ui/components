// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const radioButtonStyles = css`
.radio-control {
  margin-block-start: calc((var(--line-height-body-m-2mh3ke, 20px) - var(--size-control-adm93y, 16px)) / 2);
  min-block-size: var(--size-control-adm93y, 16px);
  min-inline-size: var(--size-control-adm93y, 16px);
  block-size: var(--size-control-adm93y, 16px);
  inline-size: var(--size-control-adm93y, 16px);
}

.outline {
  --awsui-style-focus-ring-box-shadow-6b9ypa: 0 0 0 var(--awsui-style-focus-ring-border-width-6b9ypa, 2px) var(--awsui-style-focus-ring-border-color-6b9ypa, var(--color-border-item-focused-uk47pl, #006ce0));
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
  border-start-start-radius: var(--awsui-style-focus-ring-border-radius-6b9ypa, var(--border-radius-control-circular-focus-ring-yjhscw, 4px));
  border-start-end-radius: var(--awsui-style-focus-ring-border-radius-6b9ypa, var(--border-radius-control-circular-focus-ring-yjhscw, 4px));
  border-end-start-radius: var(--awsui-style-focus-ring-border-radius-6b9ypa, var(--border-radius-control-circular-focus-ring-yjhscw, 4px));
  border-end-end-radius: var(--awsui-style-focus-ring-border-radius-6b9ypa, var(--border-radius-control-circular-focus-ring-yjhscw, 4px));
  box-shadow: var(--awsui-style-focus-ring-box-shadow-6b9ypa);
}

.styled-circle-border {
  stroke: var(--color-border-control-default-sh3548, #8c8c94);
  fill: var(--color-background-control-default-4jb21l, #ffffff);
}
.styled-circle-border.styled-circle-disabled, .styled-circle-border.styled-circle-readonly {
  fill: var(--color-background-control-disabled-1f3718, #dedee3);
  stroke: var(--color-background-control-disabled-1f3718, #dedee3);
}

.styled-circle-fill {
  stroke: var(--color-background-control-checked-ka7kc2, #006ce0);
  fill: var(--color-foreground-control-default-eto4wy, #ffffff);
  opacity: 0;
  transition: opacity var(--motion-duration-transition-quick-mcm2y0, 90ms) var(--motion-easing-transition-quick-qxak3i, linear);
}
@media (prefers-reduced-motion: reduce) {
  .styled-circle-fill {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .styled-circle-fill, .awsui-mode-entering .styled-circle-fill {
  animation: none;
  transition: none;
}
.styled-circle-fill.styled-circle-checked {
  opacity: 1;
}
.styled-circle-fill.styled-circle-disabled {
  fill: var(--color-foreground-control-disabled-txi6cf, #ffffff);
  stroke: var(--color-background-control-disabled-1f3718, #dedee3);
}
.styled-circle-fill.styled-circle-readonly {
  fill: var(--color-foreground-control-read-only-7ydvuj, #656871);
  stroke: var(--color-background-control-disabled-1f3718, #dedee3);
}
`;
