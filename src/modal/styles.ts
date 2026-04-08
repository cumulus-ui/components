// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
@keyframes awsui_modal-slide-up_1d2i7_rypew_1 {
  0% {
    transform: translate(0, 10px);
  }
  100% {
    transform: translate(0, 0);
  }
}
.dialog {
  animation: awsui_modal-slide-up_1d2i7_rypew_1 var(--motion-duration-slow, 180ms) ease-out, awsui_awsui-motion-fade-in-0_1d2i7_rypew_1 var(--motion-duration-slow, 180ms) ease-out;
  animation-delay: var(--motion-duration-fast, 90ms);
  animation-fill-mode: both;
}
@keyframes awsui_awsui-motion-fade-in-0_1d2i7_rypew_1 {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@media (prefers-reduced-motion: reduce) {
  .dialog {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .dialog, .awsui-mode-entering .dialog {
  animation: none;
  transition: none;
}
.dialog.refresh {
  animation: awsui_awsui-motion-scale-popup_1d2i7_rypew_1, awsui_awsui-motion-fade-in-0_1d2i7_rypew_1;
  animation-duration: var(--motion-duration-refresh-only-fast, 115ms);
  animation-timing-function: var(--motion-easing-refresh-only-a, cubic-bezier(0, 0, 0, 1));
  animation-fill-mode: both;
}
@keyframes awsui_awsui-motion-fade-in-0_1d2i7_rypew_1 {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes awsui_awsui-motion-scale-popup_1d2i7_rypew_1 {
  0% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
}
@media (prefers-reduced-motion: reduce) {
  .dialog.refresh {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .dialog.refresh, .awsui-mode-entering .dialog.refresh {
  animation: none;
  transition: none;
}

.root {
  animation: awsui_awsui-motion-fade-in_1d2i7_rypew_1 var(--motion-duration-extra-slow, 270ms) ease-out;
  animation-fill-mode: both;
}
@keyframes awsui_awsui-motion-fade-in_1d2i7_rypew_1 {
  from {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
}
@media (prefers-reduced-motion: reduce) {
  .root {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .root, .awsui-mode-entering .root {
  animation: none;
  transition: none;
}
.root.refresh {
  animation-duration: var(--motion-duration-refresh-only-fast, 115ms);
}
@media (prefers-reduced-motion: reduce) {
  .root.refresh {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .root.refresh, .awsui-mode-entering .root.refresh {
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
  background-color: var(--color-background-modal-overlay, rgba(35, 43, 55, 0.7));
  display: flex;
  align-items: center;
  justify-items: center;
  inset: 0;
  position: fixed;
  z-index: 5000;
  outline: 0;
  overflow: auto;
  cursor: pointer;
}
.root.hidden {
  display: none;
}

.focus-lock {
  align-self: flex-start;
  margin-inline: auto;
  padding-block: var(--space-s, 12px);
  padding-inline: 0;
  z-index: 5000;
  pointer-events: none;
}
.focus-lock.position-top {
  margin-block-start: 0;
}
.focus-lock.position-center {
  margin-block: auto;
}

.dialog {
  position: static;
  inset-block-start: 0;
  transform: translate(0, 0);
  inline-size: calc(100vw - var(--space-s, 12px) * 2);
  box-sizing: border-box;
  outline: none;
  z-index: 5000;
  pointer-events: all;
}
.dialog.small {
  max-inline-size: 320px;
}
.dialog.medium {
  max-inline-size: 600px;
}
.dialog.large {
  max-inline-size: 820px;
}
.dialog.x-large {
  max-inline-size: 1024px;
}
.dialog.xx-large {
  max-inline-size: 1280px;
}
.dialog.custom-width {
  max-inline-size: var(--awsui-modal-custom-width);
}
.dialog.max.breakpoint-xs {
  max-inline-size: calc(100vw - (8 * 10px + var(--space-xxxl, 40px)));
  margin-block: auto;
  margin-inline: auto;
}
.dialog.custom-height {
  block-size: var(--awsui-modal-custom-height);
  max-block-size: calc(100vh - 2 * var(--space-s, 12px));
}

.container {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: var(--color-text-body-default, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  display: block;
  background-color: var(--color-background-container-content, #ffffff);
  word-wrap: break-word;
  border-block-start: var(--border-container-top-width, 0px) solid var(--color-border-container-top, transparent);
  border-start-start-radius: var(--border-radius-container, 16px);
  border-start-end-radius: var(--border-radius-container, 16px);
  border-end-start-radius: var(--border-radius-container, 16px);
  border-end-end-radius: var(--border-radius-container, 16px);
  box-shadow: var(--shadow-modal, 0px 4px 20px 1px rgba(0, 7, 22, 0.1));
}
.container.custom-height-container {
  display: flex;
  flex-direction: column;
  block-size: 100%;
}

.content {
  padding-block-start: var(--space-container-content-top, 4px);
  padding-block-end: var(--space-modal-content-bottom, 16px);
  padding-inline: var(--space-modal-horizontal, 20px);
}
.content.no-paddings {
  padding-block: 0;
  padding-inline: 0;
}
.content.custom-height-content {
  flex-grow: 1;
  overflow-y: auto;
}

.header {
  padding-block-start: var(--space-container-header-top, 12px);
  padding-block-end: var(--space-container-header-bottom, 8px);
  padding-inline: var(--space-modal-horizontal, 20px);
  background-color: var(--color-background-container-header, #ffffff);
  border-block-end: 1px solid var(--color-border-container-divider, transparent);
  border-start-start-radius: var(--border-radius-container, 16px);
  border-start-end-radius: var(--border-radius-container, 16px);
  border-end-start-radius: 0;
  border-end-end-radius: 0;
}

.footer {
  border-block-start: var(--border-divider-section-width, 1px) solid var(--color-border-divider-default, #c6c6cd);
  padding-block: var(--space-scaled-s, 12px);
  padding-inline: var(--space-container-horizontal, 20px);
  background-color: var(--color-background-container-content, #ffffff);
  position: sticky;
  inset-block-end: 0;
  z-index: 800;
}
.footer--rounded {
  border-start-start-radius: 0;
  border-start-end-radius: 0;
  border-end-start-radius: var(--border-radius-container, 16px);
  border-end-end-radius: var(--border-radius-container, 16px);
}
.footer:after {
  content: "";
  display: table;
  clear: both;
}

.modal-open {
  overflow: hidden;
  /*
   * When padding-right is added to account for scrollbar being turned
   * off by overflow:hidden, that padding will go offscreen and have no
   * effect if box-sizing is content-box and body width is 100%.  Set
   * border-box to avoid this; this should be safe as box-sizing isn't
   * inherited by child elements normally.
   */
  box-sizing: border-box;
}
`;

export { componentStyles as modalStyles };
export { sharedStyles };
