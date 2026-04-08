// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
@keyframes awsui_spinner-rotator_1612d_1krck_1 {
  0% {
    transform: rotate(var(--awsui-spinner-rotator-from));
  }
  100% {
    transform: rotate(var(--awsui-spinner-rotator-to));
  }
}
@keyframes awsui_spinner-line-left_1612d_1krck_1 {
  0% {
    transform: rotate(var(--awsui-spinner-line-left-from));
  }
  50% {
    transform: rotate(var(--awsui-spinner-line-left-to));
  }
  100% {
    transform: rotate(var(--awsui-spinner-line-left-from));
  }
}
@keyframes awsui_spinner-line-right_1612d_1krck_1 {
  0% {
    transform: rotate(var(--awsui-spinner-line-right-from));
  }
  50% {
    transform: rotate(var(--awsui-spinner-line-right-to));
  }
  100% {
    transform: rotate(var(--awsui-spinner-line-right-from));
  }
}
.root {
  --awsui-spinner-rotator-from: 0deg;
  --awsui-spinner-rotator-to: 360deg;
  --awsui-spinner-line-left-from: 0deg;
  --awsui-spinner-line-left-to: 120deg;
  --awsui-spinner-line-right-from: 90deg;
  --awsui-spinner-line-right-to: -30deg;
  display: inline-block;
  vertical-align: top;

  animation: awsui_spinner-rotator_1612d_1krck_1 0.7s linear infinite;
  box-sizing: border-box;
  line-height: 0;

}
.root.size-normal {
  inline-size: var(--size-icon-normal, 16px);
  block-size: var(--size-icon-normal, 16px);
  padding-block: calc((var(--size-icon-normal, 16px) - 12px) / 2);
  padding-inline: calc((var(--size-icon-normal, 16px) - 12px) / 2);
  margin-block: calc((var(--line-height-body-m, 20px) - var(--size-icon-normal, 16px)) / 2);
  box-sizing: border-box;
}
.root.size-big {
  inline-size: var(--size-icon-big, 32px);
  block-size: var(--size-icon-big, 32px);
  padding-block: calc((var(--size-icon-big, 32px) - 24px) / 2);
  padding-inline: calc((var(--size-icon-big, 32px) - 24px) / 2);
  margin-block: calc((var(--line-height-heading-xl, 30px) - var(--size-icon-big, 32px)) / 2);
  box-sizing: border-box;
}
.root.size-large {
  inline-size: var(--size-icon-large, 48px);
  block-size: var(--size-icon-large, 48px);
  padding-block: calc((var(--size-icon-large, 48px) - 36px) / 2);
  padding-inline: calc((var(--size-icon-large, 48px) - 36px) / 2);
  margin-block: calc((var(--line-height-display-l, 48px) - var(--size-icon-large, 48px)) / 2);
  box-sizing: border-box;
}
.root.variant-normal {
  color: currentColor;
}
.root.variant-disabled {
  color: var(--color-text-interactive-disabled, #b4b4bb);
}
.root.variant-inverted {
  color: var(--color-text-inverted, #ffffff);
}
.root:dir(rtl) {
  --awsui-spinner-rotator-from: 360deg;
  --awsui-spinner-rotator-to: 0deg;
  --awsui-spinner-line-left-from: 0deg;
  --awsui-spinner-line-left-to: -120deg;
  --awsui-spinner-line-right-from: -90deg;
  --awsui-spinner-line-right-to: 30deg;
}

.circle {
  display: inline-block;
  inline-size: 50%;
  block-size: 100%;
  overflow: hidden;
  position: relative;
}
.circle:after {
  position: absolute;
  box-sizing: border-box;
  content: "";
  border-start-start-radius: 50%;
  border-start-end-radius: 50%;
  border-end-start-radius: 50%;
  border-end-end-radius: 50%;
  border-block: 2px solid;
  border-inline: 2px solid;
  border-inline-end-color: transparent;
  border-block-end-color: transparent;
}
.circle:after {

  animation: 1.5s ease-in-out infinite;
  inset-block-start: 0;
  inset-inline-start: 0;
  block-size: 100%;
  inline-size: 200%;
}
.circle.circle-left:after {
  inset-inline-start: 0;

  animation-name: awsui_spinner-line-left_1612d_1krck_1;
}
.circle.circle-right:after {
  inset-inline-start: -100%;

  animation-name: awsui_spinner-line-right_1612d_1krck_1;
}
`;

export { componentStyles as spinnerStyles };
export { sharedStyles };
