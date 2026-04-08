// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.progress::-webkit-progress-value {
  -webkit-transition: width var(--motion-duration-moderate-c9utmg, 135ms) linear;
  transition: width var(--motion-duration-moderate-c9utmg, 135ms) linear;
}
@media (prefers-reduced-motion: reduce) {
  .progress::-webkit-progress-value {
    animation: none;
    -webkit-transition: none;
    transition: none;
  }
}
.awsui-motion-disabled .progress::-webkit-progress-value, .awsui-mode-entering .progress::-webkit-progress-value {
  animation: none;
  -webkit-transition: none;
  transition: none;
}

.result-state {
  animation: awsui_awsui-motion-fade-in_11huc_1uqsz_1 var(--motion-duration-transition-show-paced-t8d1os, 180ms) var(--motion-easing-transition-show-paced-x2k7uh, ease-out);
}
@keyframes awsui_awsui-motion-fade-in_11huc_1uqsz_1 {
  from {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
}
@media (prefers-reduced-motion: reduce) {
  .result-state {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .result-state, .awsui-mode-entering .result-state {
  animation: none;
  transition: none;
}

.root {
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  color: var(--color-text-body-default-vvtq8u, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base-gmnpzl, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
}

.with-result-button {
  padding-inline-end: var(--space-m-dsumyt, 16px);
}

.result-button {
  display: inline-block;
  margin-block: var(--space-scaled-xxs-pfm1nx, 4px);
  margin-inline: 0;
}

.word-wrap {
  min-inline-size: 0;
  word-break: break-word;
}

.label-flash {
  color: inherit;
  font-weight: 700;
}
.label-key-value {
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  font-weight: var(--font-display-label-weight-zavpeo, 700);
  color: var(--color-text-label-28gfmc, #0f141a);
  margin-block-end: var(--space-scaled-xxxs-oo06c7, 2px);
}

.flash {
  color: inherit;
}

.progress-container {
  display: flex;
  align-items: center;
  max-inline-size: 800px;
  block-size: var(--line-height-body-m-2mh3ke, 20px);
}

.percentage-container {
  inline-size: 33px;
  flex-shrink: 0;
  white-space: nowrap;
  text-align: end;
  font-size: var(--font-size-body-s-smc8cv, 12px);
  line-height: var(--line-height-body-s-nu5hx1, 16px);
  letter-spacing: var(--letter-spacing-body-s-gq78ok, 0.005em);
}

.progress {
  inline-size: 100%;
  margin-inline-end: var(--space-s-tvghoh, 12px);
  min-inline-size: 0;
  block-size: var(--awsui-progress-bar-height-6b9ypa, 4px);
  border-block: 0;
  border-inline: none;
  box-sizing: border-box;
  border-start-start-radius: var(--awsui-progress-bar-border-radius-6b9ypa, 10px);
  border-start-end-radius: var(--awsui-progress-bar-border-radius-6b9ypa, 10px);
  border-end-start-radius: var(--awsui-progress-bar-border-radius-6b9ypa, 10px);
  border-end-end-radius: var(--awsui-progress-bar-border-radius-6b9ypa, 10px);
  background-color: var(--awsui-progress-bar-background-color-6b9ypa, var(--color-background-progress-bar-default-j8kyxd, #ebebf0));
}
.progress::-webkit-progress-bar {
  block-size: var(--awsui-progress-bar-height-6b9ypa, 4px);
  border-block: 0;
  border-inline: none;
  box-sizing: border-box;
  border-start-start-radius: var(--awsui-progress-bar-border-radius-6b9ypa, 10px);
  border-start-end-radius: var(--awsui-progress-bar-border-radius-6b9ypa, 10px);
  border-end-start-radius: var(--awsui-progress-bar-border-radius-6b9ypa, 10px);
  border-end-end-radius: var(--awsui-progress-bar-border-radius-6b9ypa, 10px);
  background-color: var(--awsui-progress-bar-background-color-6b9ypa, var(--color-background-progress-bar-default-j8kyxd, #ebebf0));
}
.progress::-webkit-progress-value {
  border-start-start-radius: var(--awsui-progress-bar-border-radius-6b9ypa, 10px);
  border-start-end-radius: 0;
  border-end-start-radius: var(--awsui-progress-bar-border-radius-6b9ypa, 10px);
  border-end-end-radius: 0;
  background-color: var(--awsui-progress-value-background-color-6b9ypa, var(--color-background-progress-bar-value-default-69ydqg, #006ce0));
}
.progress.complete::-webkit-progress-value {
  border-start-start-radius: var(--awsui-progress-bar-border-radius-6b9ypa, 10px);
  border-start-end-radius: var(--awsui-progress-bar-border-radius-6b9ypa, 10px);
  border-end-start-radius: var(--awsui-progress-bar-border-radius-6b9ypa, 10px);
  border-end-end-radius: var(--awsui-progress-bar-border-radius-6b9ypa, 10px);
}
.progress::-moz-progress-bar {
  border-start-start-radius: var(--awsui-progress-bar-border-radius-6b9ypa, 10px);
  border-start-end-radius: 0;
  border-end-start-radius: var(--awsui-progress-bar-border-radius-6b9ypa, 10px);
  border-end-end-radius: 0;
  background-color: var(--awsui-progress-value-background-color-6b9ypa, var(--color-background-progress-bar-value-default-69ydqg, #006ce0));
}
`;

export { componentStyles as progressBarStyles };
export { sharedStyles };
