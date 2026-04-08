// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const checkboxIconStyles = css`
.checkbox-icon--root {
  position: absolute;
  inline-size: 100%;
  block-size: 100%;
  inset-block-start: 0;
  inset-inline-start: 0;
}
.checkbox-icon--root > .checkbox-icon--styled-box {
  fill: var(--color-background-control-default, #ffffff);
  stroke: var(--color-border-control-default, #8c8c94);
  stroke-width: var(--border-width-field, 1px);
  transition: fill var(--motion-duration-transition-quick, 90ms) var(--motion-easing-transition-quick, linear), stroke var(--motion-duration-transition-quick, 90ms) var(--motion-easing-transition-quick, linear);
}
@media (prefers-reduced-motion: reduce) {
  .checkbox-icon--root > .checkbox-icon--styled-box {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .checkbox-icon--root > .checkbox-icon--styled-box, .awsui-mode-entering .checkbox-icon--root > .checkbox-icon--styled-box {
  animation: none;
  transition: none;
}
.checkbox-icon--root > .checkbox-icon--styled-box-checked, .checkbox-icon--root > .checkbox-icon--styled-box-indeterminate {
  fill: var(--color-background-control-checked, #006ce0);
  stroke: var(--color-border-control-checked, #006ce0);
}
.checkbox-icon--root > .checkbox-icon--styled-box-disabled, .checkbox-icon--root > .checkbox-icon--styled-box-readonly {
  fill: var(--color-background-control-disabled, #dedee3);
  stroke: var(--color-border-control-disabled, #dedee3);
}
.checkbox-icon--root > .checkbox-icon--styled-line {
  stroke: var(--color-foreground-control-default, #ffffff);
  stroke-width: 2;
  fill: none;
}
.checkbox-icon--root > .checkbox-icon--styled-line-disabled {
  stroke: var(--color-foreground-control-disabled, #ffffff);
}
.checkbox-icon--root > .checkbox-icon--styled-line-readonly {
  stroke: var(--color-foreground-control-read-only, #656871);
}
`;
