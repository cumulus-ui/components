// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.progress::-webkit-progress-value {
  -webkit-transition: width var(--motion-duration-moderate, 135ms) linear;
  transition: width var(--motion-duration-moderate, 135ms) linear;
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
  animation: awsui_awsui-motion-fade-in_11huc_1uqsz_1 var(--motion-duration-transition-show-paced, 180ms) var(--motion-easing-transition-show-paced, ease-out);
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
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: var(--color-text-body-default, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
}

.with-result-button {
  padding-inline-end: var(--space-m, 16px);
}

.result-button {
  display: inline-block;
  margin-block: var(--space-scaled-xxs, 4px);
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
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  font-weight: var(--font-display-label-weight, 700);
  color: var(--color-text-label, #0f141a);
  margin-block-end: var(--space-scaled-xxxs, 2px);
}

.flash {
  color: inherit;
}

.progress-container {
  display: flex;
  align-items: center;
  max-inline-size: 800px;
  block-size: var(--line-height-body-m, 20px);
}

.percentage-container {
  inline-size: 33px;
  flex-shrink: 0;
  white-space: nowrap;
  text-align: end;
  font-size: var(--font-size-body-s, 12px);
  line-height: var(--line-height-body-s, 16px);
  letter-spacing: var(--letter-spacing-body-s, 0.005em);
}

.progress {
  inline-size: 100%;
  margin-inline-end: var(--space-s, 12px);
  min-inline-size: 0;
  block-size: var(--awsui-progress-bar-height, 4px);
  border-block: 0;
  border-inline: none;
  box-sizing: border-box;
  border-start-start-radius: var(--awsui-progress-bar-border-radius, 10px);
  border-start-end-radius: var(--awsui-progress-bar-border-radius, 10px);
  border-end-start-radius: var(--awsui-progress-bar-border-radius, 10px);
  border-end-end-radius: var(--awsui-progress-bar-border-radius, 10px);
  background-color: var(--awsui-progress-bar-background-color, var(--color-background-progress-bar-default, #ebebf0));
}
.progress::-webkit-progress-bar {
  block-size: var(--awsui-progress-bar-height, 4px);
  border-block: 0;
  border-inline: none;
  box-sizing: border-box;
  border-start-start-radius: var(--awsui-progress-bar-border-radius, 10px);
  border-start-end-radius: var(--awsui-progress-bar-border-radius, 10px);
  border-end-start-radius: var(--awsui-progress-bar-border-radius, 10px);
  border-end-end-radius: var(--awsui-progress-bar-border-radius, 10px);
  background-color: var(--awsui-progress-bar-background-color, var(--color-background-progress-bar-default, #ebebf0));
}
.progress::-webkit-progress-value {
  border-start-start-radius: var(--awsui-progress-bar-border-radius, 10px);
  border-start-end-radius: 0;
  border-end-start-radius: var(--awsui-progress-bar-border-radius, 10px);
  border-end-end-radius: 0;
  background-color: var(--awsui-progress-value-background-color, var(--color-background-progress-bar-value-default, #006ce0));
}
.progress.complete::-webkit-progress-value {
  border-start-start-radius: var(--awsui-progress-bar-border-radius, 10px);
  border-start-end-radius: var(--awsui-progress-bar-border-radius, 10px);
  border-end-start-radius: var(--awsui-progress-bar-border-radius, 10px);
  border-end-end-radius: var(--awsui-progress-bar-border-radius, 10px);
}
.progress::-moz-progress-bar {
  border-start-start-radius: var(--awsui-progress-bar-border-radius, 10px);
  border-start-end-radius: 0;
  border-end-start-radius: var(--awsui-progress-bar-border-radius, 10px);
  border-end-end-radius: 0;
  background-color: var(--awsui-progress-value-background-color, var(--color-background-progress-bar-value-default, #006ce0));
}
`;

export { componentStyles as progressBarStyles };
export { sharedStyles };
