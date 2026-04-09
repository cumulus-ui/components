// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const tutorialPanelComponentsTutorialDetailViewStyles = css`
.tutorial-panel-components-tutorial-detail-view--tutorial-list {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: var(--color-text-body-default, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  padding-block: 0;
  padding-inline: 0;
  margin-block: 0;
  margin-inline: 0;
}

.tutorial-panel-components-tutorial-detail-view--tutorial-title {
  display: flex;
  align-items: flex-start;
  margin-inline-start: calc(-1 * var(--space-xxs, 4px));
  padding-block-end: var(--space-xxxs, 2px);
}

.tutorial-panel-components-tutorial-detail-view--task {
  list-style: none;
  padding-block-start: 0;
}
.tutorial-panel-components-tutorial-detail-view--task:not(:first-child) {
  margin-block-start: var(--space-xl, 24px);
}

.tutorial-panel-components-tutorial-detail-view--task-title {
  display: flex;
  align-items: flex-start;
  padding-inline-start: var(--border-divider-section-width, 1px);
  font-size: var(--font-size-heading-s, 16px);
  line-height: var(--line-height-heading-s, 20px);
  letter-spacing: var(--letter-spacing-heading-s, -0.005em);
}
.tutorial-panel-components-tutorial-detail-view--task-title--status {
  line-height: inherit;
}

.tutorial-panel-components-tutorial-detail-view--current-task {
  font-weight: 700;
}

.tutorial-panel-components-tutorial-detail-view--successful-task {
  color: var(--color-text-status-success, #00802f);
}

.tutorial-panel-components-tutorial-detail-view--congratulation-message {
  display: flex;
  font-size: var(--font-size-heading-s, 16px);
  line-height: var(--line-height-heading-s, 20px);
  letter-spacing: var(--letter-spacing-heading-s, -0.005em);
  font-weight: var(--font-weight-heading-xs, 700);
  color: var(--color-text-status-success, #00802f);
}
.tutorial-panel-components-tutorial-detail-view--congratulation-message--status {
  line-height: inherit;
  flex-shrink: 0;
}

.tutorial-panel-components-tutorial-detail-view--plaintext-congratulation-description {
  white-space: pre-line;
}

.tutorial-panel-components-tutorial-detail-view--divider {
  border-block-end: var(--border-divider-section-width, 1px) solid var(--color-border-divider-default, #c6c6cd);
}

.tutorial-panel-components-tutorial-detail-view--step-list {
  list-style: none;
  padding-block: 0;
  padding-inline-start: var(--space-xxxs, 2px);
  padding-inline-end: 0;
}

.tutorial-panel-components-tutorial-detail-view--step:not(:first-child) {
  padding-block-start: var(--space-xxs, 4px);
}

.tutorial-panel-components-tutorial-detail-view--expandable-section-wrapper {
  inline-size: 100%;
}

.tutorial-panel-components-tutorial-detail-view--expandable-section-header {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
}
`;
