// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const dragHandleWrapperStyles = css`
@keyframes awsui_drag-handle-entry_155yk_1rpq3_1 {
  from {
    transform: translate(var(--awsui-drag-handle-animation-inline-offset-6b9ypa), var(--awsui-drag-handle-animation-block-offset-6b9ypa));
  }
  to {
    transform: translate(0, 0);
  }
}
@keyframes awsui_drag-handle-exit_155yk_1rpq3_1 {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(var(--awsui-drag-handle-animation-inline-offset-6b9ypa), var(--awsui-drag-handle-animation-block-offset-6b9ypa));
  }
}
.drag-handle-wrapper--direction-button-wrapper {
  --awsui-drag-handle-animation-inline-offset-6b9ypa: 0;
  --awsui-drag-handle-animation-block-offset-6b9ypa: 0;
}
@keyframes awsui_awsui-motion-fade-in_155yk_1rpq3_1 {
  from {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
}
@keyframes awsui_awsui-motion-fade-out-0_155yk_1rpq3_1 {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.drag-handle-wrapper--direction-button-wrapper-motion-enter, .drag-handle-wrapper--direction-button-wrapper-motion-entering, .drag-handle-wrapper--direction-button-wrapper-motion-exit, .drag-handle-wrapper--direction-button-wrapper-motion-exiting {
  pointer-events: none;
}
.drag-handle-wrapper--direction-button-wrapper-motion-entering {
  animation: awsui_drag-handle-entry_155yk_1rpq3_1 var(--motion-duration-complex-tbdo30, 250ms) var(--motion-easing-responsive-hjj3ai, cubic-bezier(0, 0, 0, 1)), awsui_awsui-motion-fade-in_155yk_1rpq3_1 var(--motion-duration-complex-tbdo30, 250ms) var(--motion-easing-responsive-hjj3ai, cubic-bezier(0, 0, 0, 1));
}
@media (prefers-reduced-motion: reduce) {
  .drag-handle-wrapper--direction-button-wrapper-motion-entering {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .drag-handle-wrapper--direction-button-wrapper-motion-entering, .awsui-mode-entering .drag-handle-wrapper--direction-button-wrapper-motion-entering {
  animation: none;
  transition: none;
}
.drag-handle-wrapper--direction-button-wrapper-motion-exiting {
  animation: awsui_drag-handle-exit_155yk_1rpq3_1 var(--motion-duration-complex-tbdo30, 250ms) var(--motion-easing-responsive-hjj3ai, cubic-bezier(0, 0, 0, 1)) forwards, awsui_awsui-motion-fade-out-0_155yk_1rpq3_1 var(--motion-duration-complex-tbdo30, 250ms) var(--motion-easing-responsive-hjj3ai, cubic-bezier(0, 0, 0, 1)) forwards;
}
@media (prefers-reduced-motion: reduce) {
  .drag-handle-wrapper--direction-button-wrapper-motion-exiting {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .drag-handle-wrapper--direction-button-wrapper-motion-exiting, .awsui-mode-entering .drag-handle-wrapper--direction-button-wrapper-motion-exiting {
  animation: none;
  transition: none;
}
@media (prefers-reduced-motion: reduce) {
  .drag-handle-wrapper--direction-button-wrapper {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .drag-handle-wrapper--direction-button-wrapper, .awsui-mode-entering .drag-handle-wrapper--direction-button-wrapper {
  animation: none;
  transition: none;
}

.drag-handle-wrapper--direction-button-wrapper-block-start {
  --awsui-drag-handle-animation-block-offset-6b9ypa: 20px;
}

.drag-handle-wrapper--direction-button-wrapper-block-end {
  --awsui-drag-handle-animation-block-offset-6b9ypa: -20px;
}
.drag-handle-wrapper--direction-button-wrapper-inline-start:dir(ltr) {
  --awsui-drag-handle-animation-inline-offset-6b9ypa: 20px;
}
.drag-handle-wrapper--direction-button-wrapper-inline-start:dir(rtl) {
  --awsui-drag-handle-animation-inline-offset-6b9ypa: -20px;
}
.drag-handle-wrapper--direction-button-wrapper-inline-end:dir(ltr) {
  --awsui-drag-handle-animation-inline-offset-6b9ypa: -20px;
}
.drag-handle-wrapper--direction-button-wrapper-inline-end:dir(rtl) {
  --awsui-drag-handle-animation-inline-offset-6b9ypa: 20px;
}

.drag-handle-wrapper--contents {
  display: contents;
}

.drag-handle-wrapper--portal-overlay {
  position: absolute;
  inset-block-start: 0;
  inset-inline-start: 0;
  pointer-events: none;
  z-index: 7000;
}

.drag-handle-wrapper--portal-overlay-disabled {
  display: none;
}

.drag-handle-wrapper--portal-overlay-contents {
  pointer-events: auto;
}

.drag-handle-wrapper--drag-handle {
  position: relative;
  display: inline-flex;
}

.drag-handle-wrapper--direction-button-wrapper {
  position: absolute;
  block-size: var(--space-static-xl-4tedi6, 24px);
  inline-size: var(--space-static-xl-4tedi6, 24px);
  padding-block: var(--space-static-xxs-ns94dp, 4px);
  padding-inline: var(--space-static-xxs-ns94dp, 4px);
}

.drag-handle-wrapper--direction-button-wrapper-hidden {
  display: none;
}

.drag-handle-wrapper--direction-button-wrapper-block-start {
  inset-block-start: calc(-1 * (var(--space-static-xl-4tedi6, 24px) + 2 * var(--space-static-xxs-ns94dp, 4px)));
  inset-inline-start: calc(50% - (var(--space-static-xl-4tedi6, 24px) + 2 * var(--space-static-xxs-ns94dp, 4px)) / 2);
}

.drag-handle-wrapper--direction-button-wrapper-block-end {
  inset-block-end: calc(-1 * (var(--space-static-xl-4tedi6, 24px) + 2 * var(--space-static-xxs-ns94dp, 4px)));
  inset-inline-start: calc(50% - (var(--space-static-xl-4tedi6, 24px) + 2 * var(--space-static-xxs-ns94dp, 4px)) / 2);
}

.drag-handle-wrapper--direction-button-wrapper-inline-start {
  inset-inline-start: calc(-1 * (var(--space-static-xl-4tedi6, 24px) + 2 * var(--space-static-xxs-ns94dp, 4px)));
  inset-block-start: calc(50% - (var(--space-static-xl-4tedi6, 24px) + 2 * var(--space-static-xxs-ns94dp, 4px)) / 2);
}

.drag-handle-wrapper--direction-button-wrapper-inline-end {
  inset-inline-end: calc(-1 * (var(--space-static-xl-4tedi6, 24px) + 2 * var(--space-static-xxs-ns94dp, 4px)));
  inset-block-start: calc(50% - (var(--space-static-xl-4tedi6, 24px) + 2 * var(--space-static-xxs-ns94dp, 4px)) / 2);
}

.drag-handle-wrapper--direction-button-wrapper-forced {
  inset-inline-start: calc(50% - (var(--space-static-xl-4tedi6, 24px) + 2 * var(--space-static-xxs-ns94dp, 4px)) / 2);
}

.drag-handle-wrapper--direction-button-wrapper-forced-top-0 {
  inset-block-start: calc(-1 * (var(--space-static-xl-4tedi6, 24px) + 2 * var(--space-static-xxs-ns94dp, 4px)));
}

.drag-handle-wrapper--direction-button-wrapper-forced-top-1 {
  inset-block-start: calc(-2 * (var(--space-static-xl-4tedi6, 24px) + 2 * var(--space-static-xxs-ns94dp, 4px)));
}

.drag-handle-wrapper--direction-button-wrapper-forced-top-2 {
  inset-block-start: calc(-3 * (var(--space-static-xl-4tedi6, 24px) + 2 * var(--space-static-xxs-ns94dp, 4px)));
}

.drag-handle-wrapper--direction-button-wrapper-forced-top-3 {
  inset-block-start: calc(-4 * (var(--space-static-xl-4tedi6, 24px) + 2 * var(--space-static-xxs-ns94dp, 4px)));
}

.drag-handle-wrapper--direction-button-wrapper-forced-bottom-0 {
  inset-block-start: calc(1 * (var(--space-static-xl-4tedi6, 24px) + 2 * var(--space-static-xxs-ns94dp, 4px)));
}

.drag-handle-wrapper--direction-button-wrapper-forced-bottom-1 {
  inset-block-start: calc(2 * (var(--space-static-xl-4tedi6, 24px) + 2 * var(--space-static-xxs-ns94dp, 4px)));
}

.drag-handle-wrapper--direction-button-wrapper-forced-bottom-2 {
  inset-block-start: calc(3 * (var(--space-static-xl-4tedi6, 24px) + 2 * var(--space-static-xxs-ns94dp, 4px)));
}

.drag-handle-wrapper--direction-button-wrapper-forced-bottom-3 {
  inset-block-start: calc(4 * (var(--space-static-xl-4tedi6, 24px) + 2 * var(--space-static-xxs-ns94dp, 4px)));
}

.drag-handle-wrapper--direction-button {
  position: absolute;
  border-width: 0;
  cursor: pointer;
  display: inline-block;
  box-sizing: border-box;
  touch-action: manipulation;
  inline-size: var(--space-static-xl-4tedi6, 24px);
  block-size: var(--space-static-xl-4tedi6, 24px);
  padding-block: var(--space-xxs-hwfkai, 4px);
  padding-inline: var(--space-xxs-hwfkai, 4px);
  border-start-start-radius: 50%;
  border-start-end-radius: 50%;
  border-end-start-radius: 50%;
  border-end-end-radius: 50%;
  background-color: var(--color-background-direction-button-default-bvhbsn, #424650);
  color: var(--color-text-direction-button-default-p88lvb, #ffffff);
  box-shadow: var(--shadow-dropdown-isf0w4, 0px 4px 20px 1px rgba(0, 7, 22, 0.1));
}
.drag-handle-wrapper--direction-button:not(.drag-handle-wrapper--direction-button-disabled):hover {
  background-color: var(--color-background-direction-button-hover-74n5o1, #333843);
}
.drag-handle-wrapper--direction-button:not(.drag-handle-wrapper--direction-button-disabled):active {
  background-color: var(--color-background-direction-button-active-lvo0dy, #232b37);
}

.drag-handle-wrapper--direction-button-disabled {
  cursor: default;
  background-color: var(--color-background-direction-button-disabled-s9x4zq, #ebebf0);
  color: var(--color-text-direction-button-disabled-2jds36, #b4b4bb);
}
`;
