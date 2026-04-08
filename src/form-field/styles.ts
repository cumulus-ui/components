// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.error-icon-shake-wrapper,
.warning-icon-shake-wrapper {
  animation: awsui_awsui-motion-shake-horizontally_14mhv_fzxwy_1 var(--motion-duration-refresh-only-medium-5rbn3k, 165ms);
}
@keyframes awsui_awsui-motion-shake-horizontally_14mhv_fzxwy_1 {
  0% {
    transform: translateX(-5px);
    animation-timing-function: linear;
  }
  50% {
    transform: translateX(5px);
    animation-timing-function: var(--motion-easing-refresh-only-a-ccyqaz, cubic-bezier(0, 0, 0, 1));
  }
  100% {
    transform: translateX(0px);
  }
}
@media (prefers-reduced-motion: reduce) {
  .error-icon-shake-wrapper,
  .warning-icon-shake-wrapper {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .error-icon-shake-wrapper, .awsui-mode-entering .error-icon-shake-wrapper, .awsui-motion-disabled .warning-icon-shake-wrapper, .awsui-mode-entering .warning-icon-shake-wrapper {
  animation: none;
  transition: none;
}

.error-icon-scale-wrapper,
.warning-icon-scale-wrapper {
  animation: awsui_awsui-motion-scale-popup_14mhv_fzxwy_1 var(--motion-duration-refresh-only-medium-5rbn3k, 165ms) var(--motion-easing-refresh-only-a-ccyqaz, cubic-bezier(0, 0, 0, 1));
}
@keyframes awsui_awsui-motion-scale-popup_14mhv_fzxwy_1 {
  0% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
}
@media (prefers-reduced-motion: reduce) {
  .error-icon-scale-wrapper,
  .warning-icon-scale-wrapper {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .error-icon-scale-wrapper, .awsui-mode-entering .error-icon-scale-wrapper, .awsui-motion-disabled .warning-icon-scale-wrapper, .awsui-mode-entering .warning-icon-scale-wrapper {
  animation: none;
  transition: none;
}

.warning,
.error {
  animation: awsui_awsui-motion-fade-in-0_14mhv_fzxwy_1 var(--motion-duration-refresh-only-medium-5rbn3k, 165ms) var(--motion-easing-refresh-only-a-ccyqaz, cubic-bezier(0, 0, 0, 1));
}
@keyframes awsui_awsui-motion-fade-in-0_14mhv_fzxwy_1 {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@media (prefers-reduced-motion: reduce) {
  .warning,
  .error {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .warning, .awsui-mode-entering .warning, .awsui-motion-disabled .error, .awsui-mode-entering .error {
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
  box-sizing: border-box;
}

.label {
  box-sizing: border-box;
  color: var(--color-text-form-label-6sbm75, #0f141a);
  display: inline;
  -webkit-font-smoothing: var(--font-smoothing-webkit-oemolo, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx-hbm0aq, grayscale);
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  font-weight: var(--font-display-label-weight-zavpeo, 700);
  margin-inline-end: var(--space-xs-ymlm0b, 8px);
}
.label:only-child {
  margin-block: 0;
  margin-inline: 0;
}

.info {
  display: inline-flex;
  padding-inline-start: var(--space-xs-ymlm0b, 8px);
  border-inline-start: var(--border-divider-section-width-uwo8my, 1px) solid var(--color-border-divider-default-nr68jt, #c6c6cd);
}

.description,
.constraint {
  color: var(--color-text-form-secondary-1nm780, #656871);
  font-size: var(--font-size-body-s-smc8cv, 12px);
  line-height: var(--line-height-body-s-nu5hx1, 16px);
  letter-spacing: var(--letter-spacing-body-s-gq78ok, 0.005em);
}

.hints,
.constraint-has-validation-text {
  padding-block-start: var(--space-xxs-hwfkai, 4px);
}

.controls:not(.label-hidden) {
  padding-block-start: var(--space-xxs-hwfkai, 4px);
}
.label-wrapper:empty + .controls {
  padding-block-start: 0;
}

.control {
  min-inline-size: 0;
  word-break: break-word;
}

.error {
  color: var(--color-text-status-error-ksqavh, #db0000);
  font-size: var(--font-size-body-s-smc8cv, 12px);
  line-height: var(--line-height-body-s-nu5hx1, 16px);
  letter-spacing: var(--letter-spacing-body-s-gq78ok, 0.005em);
  display: flex;
  align-items: flex-start;
}

.warning {
  color: var(--color-text-status-warning-6meo06, #855900);
  font-size: var(--font-size-body-s-smc8cv, 12px);
  line-height: var(--line-height-body-s-nu5hx1, 16px);
  letter-spacing: var(--letter-spacing-body-s-gq78ok, 0.005em);
  display: flex;
  align-items: flex-start;
}

.error__message,
.warning__message {
  margin-inline-start: var(--space-xxs-hwfkai, 4px);
}

.visually-hidden {
  position: absolute !important;
  inset-block-start: -9999px !important;
  inset-inline-start: -9999px !important;
}
`;

export { componentStyles as formFieldStyles };
export { sharedStyles };
