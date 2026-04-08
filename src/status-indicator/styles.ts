// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.icon-shake {
  display: inline-block;
  animation: awsui_awsui-motion-shake-horizontally_1cbgc_rbfxz_1 var(--motion-duration-refresh-only-medium-5rbn3k, 165ms);
}
@keyframes awsui_awsui-motion-shake-horizontally_1cbgc_rbfxz_1 {
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
  .icon-shake {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .icon-shake, .awsui-mode-entering .icon-shake {
  animation: none;
  transition: none;
}

.container-fade-in {
  animation: awsui_awsui-motion-fade-in-0_1cbgc_rbfxz_1 var(--motion-duration-refresh-only-medium-5rbn3k, 165ms) var(--motion-easing-refresh-only-a-ccyqaz, cubic-bezier(0, 0, 0, 1));
}
@keyframes awsui_awsui-motion-fade-in-0_1cbgc_rbfxz_1 {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@media (prefers-reduced-motion: reduce) {
  .container-fade-in {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .container-fade-in, .awsui-mode-entering .container-fade-in {
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
.root.status-error {
  color: var(--color-text-status-error-ksqavh, #db0000);
}
.root.status-warning {
  color: var(--color-text-status-warning-6meo06, #855900);
}
.root.status-success {
  color: var(--color-text-status-success-ybmii8, #00802f);
}
.root.status-info {
  color: var(--color-text-status-info-ue8bd2, #006ce0);
}
.root.status-stopped {
  color: var(--color-text-status-inactive-gy7337, #656871);
}
.root.status-pending {
  color: var(--color-text-status-inactive-gy7337, #656871);
}
.root.status-in-progress {
  color: var(--color-text-status-inactive-gy7337, #656871);
}
.root.status-loading {
  color: var(--color-text-status-inactive-gy7337, #656871);
}
.root.status-not-started {
  color: var(--color-text-status-inactive-gy7337, #656871);
}
.root.color-override-red {
  color: var(--color-text-status-error-ksqavh, #db0000);
}
.root.color-override-grey {
  color: var(--color-text-status-inactive-gy7337, #656871);
}
.root.color-override-blue {
  color: var(--color-text-status-info-ue8bd2, #006ce0);
}
.root.color-override-green {
  color: var(--color-text-status-success-ybmii8, #00802f);
}
.root.color-override-yellow {
  color: var(--color-text-status-warning-6meo06, #855900);
}

.container.display-inline {
  min-inline-size: 0;
  word-break: break-word;
  display: inline;
}
.container.display-inline > .icon {
  white-space: nowrap;
}
.container.display-inline-block {
  display: inline-block;
  word-wrap: break-word;
  word-break: break-all;
}
.container.display-inline-block > .icon {
  padding-inline-end: var(--space-xxs-hwfkai, 4px);
}

.overflow-ellipsis {
  max-inline-size: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: text-bottom;
}
`;

export { componentStyles as statusIndicatorStyles };
export { sharedStyles };
