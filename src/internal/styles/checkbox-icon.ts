// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const checkboxIconStyles = css`
.root {
  position: absolute;
  inline-size: 100%;
  block-size: 100%;
  inset-block-start: 0;
  inset-inline-start: 0;
}
.root > .styled-box {
  fill: var(--color-background-control-default-4jb21l, #ffffff);
  stroke: var(--color-border-control-default-sh3548, #8c8c94);
  stroke-width: var(--border-width-field-2xc78x, 1px);
  transition: fill var(--motion-duration-transition-quick-mcm2y0, 90ms) var(--motion-easing-transition-quick-qxak3i, linear), stroke var(--motion-duration-transition-quick-mcm2y0, 90ms) var(--motion-easing-transition-quick-qxak3i, linear);
}
@media (prefers-reduced-motion: reduce) {
  .root > .styled-box {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .root > .styled-box, .awsui-mode-entering .root > .styled-box {
  animation: none;
  transition: none;
}
.root > .styled-box-checked, .root > .styled-box-indeterminate {
  fill: var(--color-background-control-checked-ka7kc2, #006ce0);
  stroke: var(--color-border-control-checked-bdv28l, #006ce0);
}
.root > .styled-box-disabled, .root > .styled-box-readonly {
  fill: var(--color-background-control-disabled-1f3718, #dedee3);
  stroke: var(--color-border-control-disabled-uj7t08, #dedee3);
}
.root > .styled-line {
  stroke: var(--color-foreground-control-default-eto4wy, #ffffff);
  stroke-width: 2;
  fill: none;
}
.root > .styled-line-disabled {
  stroke: var(--color-foreground-control-disabled-txi6cf, #ffffff);
}
.root > .styled-line-readonly {
  stroke: var(--color-foreground-control-read-only-7ydvuj, #656871);
}
`;
