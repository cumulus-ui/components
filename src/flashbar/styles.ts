// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.flash-with-motion.enter {
  opacity: 0;
  transform: translateY(-20px);
}
@media (prefers-reduced-motion: reduce) {
  .flash-with-motion.enter {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .flash-with-motion.enter, .awsui-mode-entering .flash-with-motion.enter {
  animation: none;
  transition: none;
}
.flash-with-motion.enter > .flash-body > .flash-message > .flash-header,
.flash-with-motion.enter > .flash-body > .flash-message > .flash-content,
.flash-with-motion.enter > .flash-body > .action-button-wrapper,
.flash-with-motion.enter > .dismiss-button-wrapper {
  opacity: 0;
  transform: translateY(-8px);
}
@media (prefers-reduced-motion: reduce) {
  .flash-with-motion.enter > .flash-body > .flash-message > .flash-header,
  .flash-with-motion.enter > .flash-body > .flash-message > .flash-content,
  .flash-with-motion.enter > .flash-body > .action-button-wrapper,
  .flash-with-motion.enter > .dismiss-button-wrapper {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .flash-with-motion.enter > .flash-body > .flash-message > .flash-header, .awsui-mode-entering .flash-with-motion.enter > .flash-body > .flash-message > .flash-header, .awsui-motion-disabled .flash-with-motion.enter > .flash-body > .flash-message > .flash-content, .awsui-mode-entering .flash-with-motion.enter > .flash-body > .flash-message > .flash-content, .awsui-motion-disabled .flash-with-motion.enter > .flash-body > .action-button-wrapper, .awsui-mode-entering .flash-with-motion.enter > .flash-body > .action-button-wrapper, .awsui-motion-disabled .flash-with-motion.enter > .dismiss-button-wrapper, .awsui-mode-entering .flash-with-motion.enter > .dismiss-button-wrapper {
  animation: none;
  transition: none;
}
.flash-with-motion.enter > .flash-icon {
  opacity: 0;
}
@media (prefers-reduced-motion: reduce) {
  .flash-with-motion.enter > .flash-icon {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .flash-with-motion.enter > .flash-icon, .awsui-mode-entering .flash-with-motion.enter > .flash-icon {
  animation: none;
  transition: none;
}
.flash-with-motion.entering {
  transition-property: transform, opacity;
  transition-duration: var(--motion-duration-complex-tbdo30, 250ms);
  transition-timing-function: var(--motion-easing-expressive-o5jqzg, cubic-bezier(0.84, 0, 0.16, 1));
  opacity: 1;
  transform: translateY(0);
}
@media (prefers-reduced-motion: reduce) {
  .flash-with-motion.entering {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .flash-with-motion.entering, .awsui-mode-entering .flash-with-motion.entering {
  animation: none;
  transition: none;
}
.flash-with-motion.entering > .flash-icon,
.flash-with-motion.entering > .flash-body > .flash-message > .flash-header,
.flash-with-motion.entering > .flash-body > .flash-message > .flash-content,
.flash-with-motion.entering > .flash-body > .action-button-wrapper,
.flash-with-motion.entering > .dismiss-button-wrapper,
.flash-with-motion.entered > .flash-icon,
.flash-with-motion.entered > .flash-body > .flash-message > .flash-header,
.flash-with-motion.entered > .flash-body > .flash-message > .flash-content,
.flash-with-motion.entered > .flash-body > .action-button-wrapper,
.flash-with-motion.entered > .dismiss-button-wrapper {
  opacity: 1;
  transform: translateY(0);
  transition-property: transform, opacity;
  transition-duration: var(--motion-duration-complex-tbdo30, 250ms);
  transition-timing-function: var(--motion-easing-expressive-o5jqzg, cubic-bezier(0.84, 0, 0.16, 1));
}
@media (prefers-reduced-motion: reduce) {
  .flash-with-motion.entering > .flash-icon,
  .flash-with-motion.entering > .flash-body > .flash-message > .flash-header,
  .flash-with-motion.entering > .flash-body > .flash-message > .flash-content,
  .flash-with-motion.entering > .flash-body > .action-button-wrapper,
  .flash-with-motion.entering > .dismiss-button-wrapper,
  .flash-with-motion.entered > .flash-icon,
  .flash-with-motion.entered > .flash-body > .flash-message > .flash-header,
  .flash-with-motion.entered > .flash-body > .flash-message > .flash-content,
  .flash-with-motion.entered > .flash-body > .action-button-wrapper,
  .flash-with-motion.entered > .dismiss-button-wrapper {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .flash-with-motion.entering > .flash-icon, .awsui-mode-entering .flash-with-motion.entering > .flash-icon, .awsui-motion-disabled .flash-with-motion.entering > .flash-body > .flash-message > .flash-header, .awsui-mode-entering .flash-with-motion.entering > .flash-body > .flash-message > .flash-header, .awsui-motion-disabled .flash-with-motion.entering > .flash-body > .flash-message > .flash-content, .awsui-mode-entering .flash-with-motion.entering > .flash-body > .flash-message > .flash-content, .awsui-motion-disabled .flash-with-motion.entering > .flash-body > .action-button-wrapper, .awsui-mode-entering .flash-with-motion.entering > .flash-body > .action-button-wrapper, .awsui-motion-disabled .flash-with-motion.entering > .dismiss-button-wrapper, .awsui-mode-entering .flash-with-motion.entering > .dismiss-button-wrapper, .awsui-motion-disabled .flash-with-motion.entered > .flash-icon, .awsui-mode-entering .flash-with-motion.entered > .flash-icon, .awsui-motion-disabled .flash-with-motion.entered > .flash-body > .flash-message > .flash-header, .awsui-mode-entering .flash-with-motion.entered > .flash-body > .flash-message > .flash-header, .awsui-motion-disabled .flash-with-motion.entered > .flash-body > .flash-message > .flash-content, .awsui-mode-entering .flash-with-motion.entered > .flash-body > .flash-message > .flash-content, .awsui-motion-disabled .flash-with-motion.entered > .flash-body > .action-button-wrapper, .awsui-mode-entering .flash-with-motion.entered > .flash-body > .action-button-wrapper, .awsui-motion-disabled .flash-with-motion.entered > .dismiss-button-wrapper, .awsui-mode-entering .flash-with-motion.entered > .dismiss-button-wrapper {
  animation: none;
  transition: none;
}
.flash-with-motion.entering > .flash-icon, .flash-with-motion.entered > .flash-icon {
  transition-delay: calc(var(--motion-duration-complex-tbdo30, 250ms) - 50ms);
}
@media (prefers-reduced-motion: reduce) {
  .flash-with-motion.entering > .flash-icon, .flash-with-motion.entered > .flash-icon {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .flash-with-motion.entering > .flash-icon, .awsui-mode-entering .flash-with-motion.entering > .flash-icon, .awsui-motion-disabled .flash-with-motion.entered > .flash-icon, .awsui-mode-entering .flash-with-motion.entered > .flash-icon {
  animation: none;
  transition: none;
}
.flash-with-motion.entering > .flash-body > .flash-message > .flash-header, .flash-with-motion.entered > .flash-body > .flash-message > .flash-header {
  transition-delay: calc(var(--motion-duration-complex-tbdo30, 250ms) + 10ms);
}
@media (prefers-reduced-motion: reduce) {
  .flash-with-motion.entering > .flash-body > .flash-message > .flash-header, .flash-with-motion.entered > .flash-body > .flash-message > .flash-header {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .flash-with-motion.entering > .flash-body > .flash-message > .flash-header, .awsui-mode-entering .flash-with-motion.entering > .flash-body > .flash-message > .flash-header, .awsui-motion-disabled .flash-with-motion.entered > .flash-body > .flash-message > .flash-header, .awsui-mode-entering .flash-with-motion.entered > .flash-body > .flash-message > .flash-header {
  animation: none;
  transition: none;
}
.flash-with-motion.entering > .flash-body > .flash-message > .flash-content, .flash-with-motion.entered > .flash-body > .flash-message > .flash-content {
  transition-delay: calc(var(--motion-duration-complex-tbdo30, 250ms) + 10ms);
}
@media (prefers-reduced-motion: reduce) {
  .flash-with-motion.entering > .flash-body > .flash-message > .flash-content, .flash-with-motion.entered > .flash-body > .flash-message > .flash-content {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .flash-with-motion.entering > .flash-body > .flash-message > .flash-content, .awsui-mode-entering .flash-with-motion.entering > .flash-body > .flash-message > .flash-content, .awsui-motion-disabled .flash-with-motion.entered > .flash-body > .flash-message > .flash-content, .awsui-mode-entering .flash-with-motion.entered > .flash-body > .flash-message > .flash-content {
  animation: none;
  transition: none;
}
.flash-with-motion.entering > .dismiss-button-wrapper,
.flash-with-motion.entering > .flash-body > .action-button-wrapper,
.flash-with-motion.entered > .dismiss-button-wrapper,
.flash-with-motion.entered > .flash-body > .action-button-wrapper {
  transition-delay: calc(var(--motion-duration-complex-tbdo30, 250ms) * 2 - 100ms);
}
@media (prefers-reduced-motion: reduce) {
  .flash-with-motion.entering > .dismiss-button-wrapper,
  .flash-with-motion.entering > .flash-body > .action-button-wrapper,
  .flash-with-motion.entered > .dismiss-button-wrapper,
  .flash-with-motion.entered > .flash-body > .action-button-wrapper {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .flash-with-motion.entering > .dismiss-button-wrapper, .awsui-mode-entering .flash-with-motion.entering > .dismiss-button-wrapper, .awsui-motion-disabled .flash-with-motion.entering > .flash-body > .action-button-wrapper, .awsui-mode-entering .flash-with-motion.entering > .flash-body > .action-button-wrapper, .awsui-motion-disabled .flash-with-motion.entered > .dismiss-button-wrapper, .awsui-mode-entering .flash-with-motion.entered > .dismiss-button-wrapper, .awsui-motion-disabled .flash-with-motion.entered > .flash-body > .action-button-wrapper, .awsui-mode-entering .flash-with-motion.entered > .flash-body > .action-button-wrapper {
  animation: none;
  transition: none;
}
.flash-with-motion.exiting {
  opacity: 0;
  transform: translateY(-20px);
  transition-property: transform, opacity;
  transition-duration: var(--motion-duration-responsive-mehora, 115ms);
  transition-timing-function: var(--motion-easing-expressive-o5jqzg, cubic-bezier(0.84, 0, 0.16, 1));
}
@media (prefers-reduced-motion: reduce) {
  .flash-with-motion.exiting {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .flash-with-motion.exiting, .awsui-mode-entering .flash-with-motion.exiting {
  animation: none;
  transition: none;
}

.stack > .animation-running > .item,
.stack > .animation-running > .flash-list-item,
.stack > .animation-running.notification-bar {
  transition-timing-function: var(--motion-easing-responsive-hjj3ai, cubic-bezier(0, 0, 0, 1));
  transition-duration: var(--motion-duration-responsive-mehora, 115ms);
}
@media (prefers-reduced-motion: reduce) {
  .stack > .animation-running > .item,
  .stack > .animation-running > .flash-list-item,
  .stack > .animation-running.notification-bar {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .stack > .animation-running > .item, .awsui-mode-entering .stack > .animation-running > .item, .awsui-motion-disabled .stack > .animation-running > .flash-list-item, .awsui-mode-entering .stack > .animation-running > .flash-list-item, .awsui-motion-disabled .stack > .animation-running.notification-bar, .awsui-mode-entering .stack > .animation-running.notification-bar {
  animation: none;
  transition: none;
}
.stack > .collapsed.animation-ready > .expanded-only,
.stack > .collapsed.animation-running > .expanded-only {
  display: none;
}

.stack {
  display: grid;
  grid-template-columns: 30px 1fr 30px;
}

.stack > .expanded {
  grid-column: 1/4;
}

.stack > .collapsed {
  display: grid;
  grid-column: 1/4;
  grid-template-columns: repeat(var(--awsui-flashbar-stack-depth-6b9ypa), 10px) 1fr repeat(var(--awsui-flashbar-stack-depth-6b9ypa), 10px);
  row-gap: 8px;
  z-index: 0;
}
.stack > .collapsed > .item {
  grid-column-start: calc(var(--awsui-flashbar-stack-index-6b9ypa) + 1);
  grid-column-end: calc(var(--awsui-flashbar-stack-depth-6b9ypa) * 2 + 1 - var(--awsui-flashbar-stack-index-6b9ypa) + 1);
  grid-row-start: 1;
  grid-row-end: calc(var(--awsui-flashbar-stack-index-6b9ypa) + 2);
  z-index: calc(var(--awsui-flashbar-stack-depth-6b9ypa) - var(--awsui-flashbar-stack-index-6b9ypa));
}
.stack > .collapsed > .item:not(:first-of-type) {
  align-self: end;
  /* Give placeholder elements in the stacked state the height of a notification
     with one single line of text.
     This makes them look better during the collapse animation, in which they are already empty.
   */
  min-block-size: calc(var(--line-height-body-m-2mh3ke, 20px) + (var(--space-scaled-xs-xwoogq, 8px) + var(--border-width-field-2xc78x, 1px) + var(--space-scaled-xxs-pfm1nx, 4px)) * 2);
}
.stack > .collapsed > .item:not(:last-child) > .flash,
.stack > .collapsed > .item.flash {
  box-shadow: var(--shadow-flash-collapsed-b68ip6, 0px 4px 4px rgba(0, 0, 0, 0.25));
}

.stack > .expanded.animation-running > .flash-list-item {
  position: relative;
  z-index: calc(var(--awsui-flashbar-stack-depth-6b9ypa) - var(--awsui-flashbar-stack-index-6b9ypa));
}

.stack.collapsible:not(.expanded) {
  /*
  Since the notification bar is anchored to the bottom of the Flashbar, we need to push it up to account for the
  missing third item when there are only 2 items in the stack.
   */
}
.stack.collapsible:not(.expanded):not(.short-list):not(.visual-refresh) {
  /*
  The default bottom margin (custom-props.$stackedNotificationsDefaultBottomMargin) is just enough to prevent the
  notification bar from overlapping the elements below. But if using disableContentPaddings,
  $stackedNotificationsBottomMargin will be set at the App Layout level so that this distance is increased to prevent the
  main area from touching the notifications area.
  */
  /* $notification-bar-line-height + 2 * $notification-bar-padding-vertical + 2 * $border-width
  is the full height of the notification bar */
  --awsui-stacked-notifications-default-bottom-margin-6b9ypa: calc(var(--line-height-body-m-2mh3ke, 20px) + 2 * var(--space-scaled-xxs-pfm1nx, 4px) + 2 * 1px - calc(var(--space-scaled-xl-dunxp5, 24px) + 3px));
  margin-block-end: calc(var(--awsui-stacked-notifications-bottom-margin-6b9ypa, var(--awsui-stacked-notifications-default-bottom-margin-6b9ypa)) + 0px + 0px);
}
.stack.collapsible:not(.expanded):not(.short-list):not(.visual-refresh) > .notification-bar {
  margin-block-start: calc(-1 * calc(var(--space-scaled-xl-dunxp5, 24px) + 3px) + 0px);
  /* $notification-bar-line-height + 2 * $notification-bar-padding-vertical + 2 * $border-width
  is the full height of the notification bar */
  margin-block-end: calc(calc(var(--space-scaled-xl-dunxp5, 24px) + 3px) - var(--line-height-body-m-2mh3ke, 20px) - 2 * var(--space-scaled-xxs-pfm1nx, 4px) - 2 * 1px - 0px);
  padding-block: var(--space-scaled-xxs-pfm1nx, 4px);
}
.stack.collapsible:not(.expanded):not(.short-list).visual-refresh {
  /*
  The default bottom margin (custom-props.$stackedNotificationsDefaultBottomMargin) is just enough to prevent the
  notification bar from overlapping the elements below. But if using disableContentPaddings,
  $stackedNotificationsBottomMargin will be set at the App Layout level so that this distance is increased to prevent the
  main area from touching the notifications area.
  */
  /* $notification-bar-line-height + 2 * $notification-bar-padding-vertical + 2 * $border-width
  is the full height of the notification bar */
  --awsui-stacked-notifications-default-bottom-margin-6b9ypa: calc(var(--line-height-body-m-2mh3ke, 20px) + 2 * var(--space-scaled-xxs-pfm1nx, 4px) + 2 * 2px - calc(var(--space-scaled-xl-dunxp5, 24px) + 3px));
  margin-block-end: calc(var(--awsui-stacked-notifications-bottom-margin-6b9ypa, var(--awsui-stacked-notifications-default-bottom-margin-6b9ypa)) + 0px + 0px);
}
.stack.collapsible:not(.expanded):not(.short-list).visual-refresh > .notification-bar {
  margin-block-start: calc(-1 * calc(var(--space-scaled-xl-dunxp5, 24px) + 3px) + 0px);
  /* $notification-bar-line-height + 2 * $notification-bar-padding-vertical + 2 * $border-width
  is the full height of the notification bar */
  margin-block-end: calc(calc(var(--space-scaled-xl-dunxp5, 24px) + 3px) - var(--line-height-body-m-2mh3ke, 20px) - 2 * var(--space-scaled-xxs-pfm1nx, 4px) - 2 * 2px - 0px);
  padding-block: var(--space-scaled-xxs-pfm1nx, 4px);
}
.stack.collapsible:not(.expanded).short-list:not(.visual-refresh) {
  /*
  The default bottom margin (custom-props.$stackedNotificationsDefaultBottomMargin) is just enough to prevent the
  notification bar from overlapping the elements below. But if using disableContentPaddings,
  $stackedNotificationsBottomMargin will be set at the App Layout level so that this distance is increased to prevent the
  main area from touching the notifications area.
  */
  /* $notification-bar-line-height + 2 * $notification-bar-padding-vertical + 2 * $border-width
  is the full height of the notification bar */
  --awsui-stacked-notifications-default-bottom-margin-6b9ypa: calc(var(--line-height-body-m-2mh3ke, 20px) + 2 * var(--space-scaled-xxs-pfm1nx, 4px) + 2 * 1px - calc(var(--space-scaled-xl-dunxp5, 24px) + 3px));
  margin-block-end: calc(var(--awsui-stacked-notifications-bottom-margin-6b9ypa, var(--awsui-stacked-notifications-default-bottom-margin-6b9ypa)) + 0px + 8px);
}
.stack.collapsible:not(.expanded).short-list:not(.visual-refresh) > .notification-bar {
  margin-block-start: calc(-1 * calc(var(--space-scaled-xl-dunxp5, 24px) + 3px) + 8px);
  /* $notification-bar-line-height + 2 * $notification-bar-padding-vertical + 2 * $border-width
  is the full height of the notification bar */
  margin-block-end: calc(calc(var(--space-scaled-xl-dunxp5, 24px) + 3px) - var(--line-height-body-m-2mh3ke, 20px) - 2 * var(--space-scaled-xxs-pfm1nx, 4px) - 2 * 1px - 8px);
  padding-block: var(--space-scaled-xxs-pfm1nx, 4px);
}
.stack.collapsible:not(.expanded).short-list.visual-refresh {
  /*
  The default bottom margin (custom-props.$stackedNotificationsDefaultBottomMargin) is just enough to prevent the
  notification bar from overlapping the elements below. But if using disableContentPaddings,
  $stackedNotificationsBottomMargin will be set at the App Layout level so that this distance is increased to prevent the
  main area from touching the notifications area.
  */
  /* $notification-bar-line-height + 2 * $notification-bar-padding-vertical + 2 * $border-width
  is the full height of the notification bar */
  --awsui-stacked-notifications-default-bottom-margin-6b9ypa: calc(var(--line-height-body-m-2mh3ke, 20px) + 2 * var(--space-scaled-xxs-pfm1nx, 4px) + 2 * 2px - calc(var(--space-scaled-xl-dunxp5, 24px) + 3px));
  margin-block-end: calc(var(--awsui-stacked-notifications-bottom-margin-6b9ypa, var(--awsui-stacked-notifications-default-bottom-margin-6b9ypa)) + 0px + 8px);
}
.stack.collapsible:not(.expanded).short-list.visual-refresh > .notification-bar {
  margin-block-start: calc(-1 * calc(var(--space-scaled-xl-dunxp5, 24px) + 3px) + 8px);
  /* $notification-bar-line-height + 2 * $notification-bar-padding-vertical + 2 * $border-width
  is the full height of the notification bar */
  margin-block-end: calc(calc(var(--space-scaled-xl-dunxp5, 24px) + 3px) - var(--line-height-body-m-2mh3ke, 20px) - 2 * var(--space-scaled-xxs-pfm1nx, 4px) - 2 * 2px - 8px);
  padding-block: var(--space-scaled-xxs-pfm1nx, 4px);
}
.stack.collapsible.expanded:not(.visual-refresh) {
  /*
  Give a bit more bottom margin when expanded, but only in Classic because in Visual Refresh the margin around the
  notifications slot already gives it enough space.
   */
  /*
  The default bottom margin (custom-props.$stackedNotificationsDefaultBottomMargin) is just enough to prevent the
  notification bar from overlapping the elements below. But if using disableContentPaddings,
  $stackedNotificationsBottomMargin will be set at the App Layout level so that this distance is increased to prevent the
  main area from touching the notifications area.
  */
  /* $notification-bar-line-height + 2 * $notification-bar-padding-vertical + 2 * $border-width
  is the full height of the notification bar */
  --awsui-stacked-notifications-default-bottom-margin-6b9ypa: calc(var(--line-height-body-m-2mh3ke, 20px) + 2 * var(--space-scaled-xxs-pfm1nx, 4px) + 2 * 1px - var(--space-scaled-s-8ozaad, 12px));
  margin-block-end: calc(var(--awsui-stacked-notifications-bottom-margin-6b9ypa, var(--awsui-stacked-notifications-default-bottom-margin-6b9ypa)) + var(--space-scaled-m-m892r9, 16px) + 0px);
}
.stack.collapsible.expanded:not(.visual-refresh) > .notification-bar {
  margin-block-start: calc(-1 * var(--space-scaled-s-8ozaad, 12px) + 0px);
  /* $notification-bar-line-height + 2 * $notification-bar-padding-vertical + 2 * $border-width
  is the full height of the notification bar */
  margin-block-end: calc(var(--space-scaled-s-8ozaad, 12px) - var(--line-height-body-m-2mh3ke, 20px) - 2 * var(--space-scaled-xxs-pfm1nx, 4px) - 2 * 1px - 0px);
  padding-block: var(--space-scaled-xxs-pfm1nx, 4px);
}
.stack.collapsible.expanded.visual-refresh {
  /*
  The default bottom margin (custom-props.$stackedNotificationsDefaultBottomMargin) is just enough to prevent the
  notification bar from overlapping the elements below. But if using disableContentPaddings,
  $stackedNotificationsBottomMargin will be set at the App Layout level so that this distance is increased to prevent the
  main area from touching the notifications area.
  */
  /* $notification-bar-line-height + 2 * $notification-bar-padding-vertical + 2 * $border-width
  is the full height of the notification bar */
  --awsui-stacked-notifications-default-bottom-margin-6b9ypa: calc(var(--line-height-body-m-2mh3ke, 20px) + 2 * var(--space-scaled-xxs-pfm1nx, 4px) + 2 * 2px - var(--space-scaled-s-8ozaad, 12px));
  margin-block-end: calc(var(--awsui-stacked-notifications-bottom-margin-6b9ypa, var(--awsui-stacked-notifications-default-bottom-margin-6b9ypa)) + 0px + 0px);
}
.stack.collapsible.expanded.visual-refresh > .notification-bar {
  margin-block-start: calc(-1 * var(--space-scaled-s-8ozaad, 12px) + 0px);
  /* $notification-bar-line-height + 2 * $notification-bar-padding-vertical + 2 * $border-width
  is the full height of the notification bar */
  margin-block-end: calc(var(--space-scaled-s-8ozaad, 12px) - var(--line-height-body-m-2mh3ke, 20px) - 2 * var(--space-scaled-xxs-pfm1nx, 4px) - 2 * 2px - 0px);
  padding-block: var(--space-scaled-xxs-pfm1nx, 4px);
}

.stack > .notification-bar {
  min-inline-size: 0;
  word-break: break-word;
  background: var(--awsui-style-background-default-6b9ypa, var(--color-background-notification-stack-bar-qe5n4w, #232b37));
  border-color: var(--awsui-style-border-color-default-6b9ypa, var(--color-border-notification-stack-bar-aszsse, #232b37));
  border-start-start-radius: var(--border-radius-button-7bgkcs, 20px);
  border-start-end-radius: var(--border-radius-button-7bgkcs, 20px);
  border-end-start-radius: var(--border-radius-button-7bgkcs, 20px);
  border-end-end-radius: var(--border-radius-button-7bgkcs, 20px);
  border-block-style: solid;
  border-inline-style: solid;
  box-shadow: var(--shadow-panel-toggle-qddz27, 0px 6px 12px 1px rgba(0, 7, 22, 0.12));
  color: var(--awsui-style-color-default-6b9ypa, var(--color-text-notification-stack-bar-tjj0ek, #ffffff));
  cursor: pointer;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  grid-column: 2;
  grid-row: 2;
  column-gap: calc(var(--space-m-dsumyt, 16px) + var(--space-xxs-hwfkai, 4px));
  justify-content: center;
  letter-spacing: var(--font-button-letter-spacing-ufowe3, 0.005em);
  margin-inline: auto;
  row-gap: 0;
  text-align: center;
  text-decoration: none;
  z-index: 1;
}
.stack > .notification-bar > .status > .header,
.stack > .notification-bar > .status > .item-count,
.stack > .notification-bar > .button {
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  color: var(--color-text-body-default-vvtq8u, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base-gmnpzl, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  color: var(--color-text-notification-stack-bar-tjj0ek, #ffffff);
  cursor: pointer;
  margin-block: 0;
  padding-block: 0;
}
.stack > .notification-bar > .status {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: var(--space-m-dsumyt, 16px);
  justify-content: center;
  row-gap: 0;
}
.stack > .notification-bar > .status > .header {
  font-weight: var(--font-weight-button-0eg20c, 700);
  display: inline-block;
}
.stack > .notification-bar > .status > .item-count {
  column-gap: var(--space-s-tvghoh, 12px);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 0;
}
.stack > .notification-bar > .status > .item-count > .type-count > .count-number {
  margin-inline-start: var(--space-xxs-hwfkai, 4px);
}
.stack > .notification-bar:hover {
  background: var(--awsui-style-background-hover-6b9ypa, var(--color-background-notification-stack-bar-hover-jh82oo, #424650));
  border-color: var(--awsui-style-border-color-hover-6b9ypa, var(--color-background-notification-stack-bar-hover-jh82oo, #424650));
  color: var(--awsui-style-color-hover-6b9ypa, var(--color-text-notification-stack-bar-tjj0ek, #ffffff));
}
.stack > .notification-bar:active {
  background: var(--awsui-style-background-active-6b9ypa, var(--color-background-notification-stack-bar-active-a4h9r8, #232b37));
  border-color: var(--awsui-style-border-color-active-6b9ypa, var(--color-background-notification-stack-bar-qe5n4w, #232b37));
  color: var(--awsui-style-color-active-6b9ypa, var(--color-text-notification-stack-bar-tjj0ek, #ffffff));
}
.stack > .notification-bar.visual-refresh {
  border-block-width: 2px;
  border-inline-width: 2px;
  padding-inline: var(--space-l-2ud1p3, 20px);
}
.stack > .notification-bar:not(.visual-refresh) {
  border-block-width: 1px;
  border-inline-width: 1px;
  padding-inline: var(--space-s-tvghoh, 12px);
}
.stack > .notification-bar:not(.visual-refresh):focus {
  text-decoration: none;
}
.stack > .notification-bar:not(.visual-refresh):hover {
  text-decoration: none;
}
.stack > .notification-bar > .button {
  display: inline-block;
  flex-grow: 1;
  background: none;
  border-block: 0;
  border-inline: none;
  padding-block: 0;
  --awsui-style-focus-ring-box-shadow-6b9ypa: 0 0 0 var(--awsui-style-focus-ring-border-width-6b9ypa, 2px) var(--awsui-style-focus-ring-border-color-6b9ypa, var(--color-border-item-focused-uk47pl, #006ce0));
}
.stack > .notification-bar > .button > .icon {
  transition: transform var(--motion-duration-rotate-90-lyzb0k, 135ms) var(--motion-easing-rotate-90-jhbqg9, cubic-bezier(0.165, 0.84, 0.44, 1));
}
@media (prefers-reduced-motion: reduce) {
  .stack > .notification-bar > .button > .icon {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .stack > .notification-bar > .button > .icon, .awsui-mode-entering .stack > .notification-bar > .button > .icon {
  animation: none;
  transition: none;
}
.stack > .notification-bar > .button.expanded > .icon {
  transform: rotate(180deg);
}
.stack > .notification-bar > .button:focus {
  outline: none;
}
:host-context([data-awsui-focus-visible=true]) .stack > .notification-bar > .button:focus {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .stack > .notification-bar > .button:focus {
  outline: 2px dotted transparent;
  outline-offset: calc(0px - 1px);
}
:host-context([data-awsui-focus-visible=true]) .stack > .notification-bar > .button:focus::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * 0px);
  inset-block-start: calc(-1 * 0px);
  inline-size: calc(100% + 0px + 0px);
  block-size: calc(100% + 0px + 0px);
  border-start-start-radius: var(--awsui-style-focus-ring-border-radius-6b9ypa, var(--border-radius-control-default-focus-ring-1uabki, 4px));
  border-start-end-radius: var(--awsui-style-focus-ring-border-radius-6b9ypa, var(--border-radius-control-default-focus-ring-1uabki, 4px));
  border-end-start-radius: var(--awsui-style-focus-ring-border-radius-6b9ypa, var(--border-radius-control-default-focus-ring-1uabki, 4px));
  border-end-end-radius: var(--awsui-style-focus-ring-border-radius-6b9ypa, var(--border-radius-control-default-focus-ring-1uabki, 4px));
  box-shadow: var(--awsui-style-focus-ring-box-shadow-6b9ypa);
}

.stack.expanded:not(.floating) {
  padding-block-end: var(--awsui-flashbar-sticky-bottom-margin-6b9ypa, 0);
}

.flashbar {
  position: relative;

}
.flashbar > li + li {
  padding-block-start: 0;
}

.flashbar,
.flash {
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  color: var(--color-text-body-default-vvtq8u, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base-gmnpzl, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
}

.flash {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding-block: var(--space-flashbar-vertical-th71op, 8px);
  padding-inline: var(--space-flashbar-horizontal-l63501, 16px);
  border-start-start-radius: var(--border-radius-flashbar-pp1ptu, 12px);
  border-start-end-radius: var(--border-radius-flashbar-pp1ptu, 12px);
  border-end-start-radius: var(--border-radius-flashbar-pp1ptu, 12px);
  border-end-end-radius: var(--border-radius-flashbar-pp1ptu, 12px);
  color: var(--color-text-notification-default-1iey72, #f9f9fa);
  overflow-wrap: break-word;
  word-wrap: break-word;
  box-shadow: var(--shadow-flash-sticky-k69vye, 0px 4px 8px rgba(0, 7, 22, 0.1));
  --awsui-style-focus-ring-box-shadow-6b9ypa: 0 0 0 var(--awsui-style-focus-ring-border-width-6b9ypa, 2px) var(--awsui-style-focus-ring-border-color-6b9ypa, var(--color-border-item-focused-uk47pl, #006ce0));
}

.initial-hidden {
  overflow: hidden;
  block-size: 0;
}

.flash-list {
  list-style: none;
  padding-block: 0;
  padding-inline: 0;
  margin-block: 0;
  margin-inline: 0;
}
.flash-list:not(.collapsed) > li:not(:last-child) {
  margin-block-end: var(--space-xxxs-pajhad, 2px);
}

.flash-body {
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  min-inline-size: 0;
  column-gap: var(--space-flashbar-action-left-rqk3ap, 12px);
}

.flash-focus-container {
  display: flex;
  flex: 1;
  min-inline-size: 70%;
}
.flash-focus-container:focus {
  outline: none;
}
:host-context([data-awsui-focus-visible=true]) .flash-focus-container:focus {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .flash-focus-container:focus {
  outline: 2px dotted transparent;
  outline-offset: calc(var(--space-button-focus-outline-gutter-jj138g, 4px) - 1px);
}
:host-context([data-awsui-focus-visible=true]) .flash-focus-container:focus::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * var(--space-button-focus-outline-gutter-jj138g, 4px));
  inset-block-start: calc(-1 * var(--space-button-focus-outline-gutter-jj138g, 4px));
  inline-size: calc(100% + var(--space-button-focus-outline-gutter-jj138g, 4px) + var(--space-button-focus-outline-gutter-jj138g, 4px));
  block-size: calc(100% + var(--space-button-focus-outline-gutter-jj138g, 4px) + var(--space-button-focus-outline-gutter-jj138g, 4px));
  border-start-start-radius: var(--awsui-style-focus-ring-border-radius-6b9ypa, var(--border-radius-control-default-focus-ring-1uabki, 4px));
  border-start-end-radius: var(--awsui-style-focus-ring-border-radius-6b9ypa, var(--border-radius-control-default-focus-ring-1uabki, 4px));
  border-end-start-radius: var(--awsui-style-focus-ring-border-radius-6b9ypa, var(--border-radius-control-default-focus-ring-1uabki, 4px));
  border-end-end-radius: var(--awsui-style-focus-ring-border-radius-6b9ypa, var(--border-radius-control-default-focus-ring-1uabki, 4px));
  box-shadow: var(--awsui-style-focus-ring-box-shadow-6b9ypa);
}

.flash-text {
  margin-block: var(--border-item-width-miijiw, 2px);
  margin-inline: 0;
  padding-block: var(--space-scaled-xxs-pfm1nx, 4px);
  padding-inline: var(--space-xxs-hwfkai, 4px);
}

.flash-icon {
  flex: 0 0 auto;
  padding-inline-start: 0;
}

.flash-message {
  flex: 1 1 0%;
  word-wrap: break-word;
  max-inline-size: 100%;
  overflow: hidden;
}

.hidden {
  display: none;
}

.flash-header,
.header-replacement {
  font-weight: var(--font-weight-flashbar-header-fg5kye, 700);
}

.flash-content,
.content-replacement {
  /* Only used as a selector for test-utils */
}

.dismiss-button-wrapper {
  flex: 0 0 auto;
  margin-inline: var(--space-s-tvghoh, 12px) calc(-1 * var(--space-xxs-hwfkai, 4px));
  padding-inline-end: var(--space-flashbar-dismiss-right-ckhj91, 0px);
}

.dismiss-button {
  /* Only used as a selector for test-utils */
}

.action-button-wrapper {
  white-space: nowrap;
}

.action-wrapped {
  margin-inline-start: var(--space-l-2ud1p3, 20px);
  padding-inline-start: var(--space-xxs-hwfkai, 4px);
  margin-block-end: var(--space-xxs-hwfkai, 4px);
}

.action-button,
.action-slot {
  /* Only used as a selector for test-utils */
}

.flash-type-success {
  background-color: var(--color-background-notification-green-2rkyvu, #00802f);
}

.flash-type-error {
  background-color: var(--color-background-notification-red-0487ea, #db0000);
}

.flash-type-info,
.flash-type-in-progress {
  background-color: var(--color-background-notification-blue-4vnob8, #006ce0);
}

.flash-type-warning {
  color: var(--color-text-notification-yellow-vjtdxk, #0f141a);
  background-color: var(--color-background-notification-yellow-y6us5r, #ffe347);
}
`;

export { componentStyles as flashbarStyles };
export { sharedStyles };
