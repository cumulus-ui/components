// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const tutorialPanelComponentsTutorialListStyles = css`
.tutorial-panel-components-tutorial-list--content-enter {
  animation: awsui_awsui-motion-fade-in_ig8mp_15k2z_1 var(--motion-duration-show-paced, 180ms) var(--motion-easing-show-paced, ease-out);
}
@keyframes awsui_awsui-motion-fade-in_ig8mp_15k2z_1 {
  from {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
}
@media (prefers-reduced-motion: reduce) {
  .tutorial-panel-components-tutorial-list--content-enter {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .tutorial-panel-components-tutorial-list--content-enter, .awsui-mode-entering .tutorial-panel-components-tutorial-list--content-enter {
  animation: none;
  transition: none;
}

.tutorial-panel-components-tutorial-list--tutorial-list {
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

.tutorial-panel-components-tutorial-list--tutorial-box {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: var(--color-text-body-default, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  list-style: none;
  border-block: var(--border-divider-section-width, 1px) solid var(--color-border-tutorial, #dedee3);
  border-inline: var(--border-divider-section-width, 1px) solid var(--color-border-tutorial, #dedee3);
  border-start-start-radius: var(--border-radius-tutorial-panel-item, 8px);
  border-start-end-radius: var(--border-radius-tutorial-panel-item, 8px);
  border-end-start-radius: var(--border-radius-tutorial-panel-item, 8px);
  border-end-end-radius: var(--border-radius-tutorial-panel-item, 8px);
  padding-block: var(--space-m, 16px);
  padding-inline: var(--space-m, 16px);
}
.tutorial-panel-components-tutorial-list--tutorial-box:not(:first-child) {
  margin-block-start: var(--space-l, 20px);
}

.tutorial-panel-components-tutorial-list--tutorial-box-title {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.tutorial-panel-components-tutorial-list--tutorial-description-plaintext {
  white-space: pre-line;
}
.tutorial-panel-components-tutorial-list--tutorial-description ul {
  list-style-type: initial;
}

.tutorial-panel-components-tutorial-list--expandable-section {
  display: none;
  margin-block-start: var(--space-m, 16px);
}
.tutorial-panel-components-tutorial-list--expandable-section.tutorial-panel-components-tutorial-list--expanded {
  display: block;
}

.tutorial-panel-components-tutorial-list--button-wrapper {
  margin-block: calc(-1 * var(--space-xxs, 4px) - var(--border-width-button, 2px));
  margin-inline: calc(-1 * var(--space-xxs, 4px) - var(--border-width-button, 2px));
}

.tutorial-panel-components-tutorial-list--download-link {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: var(--color-text-body-default, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  text-decoration: none;
  display: inline;
  white-space: inherit;
  letter-spacing: 0.005em;
  color: var(--color-text-body-secondary, #424650);
}
.tutorial-panel-components-tutorial-list--download-link:hover {
  cursor: pointer;
}
.tutorial-panel-components-tutorial-list--download-link:focus {
  outline: none;
}
.tutorial-panel-components-tutorial-list--download-link:active, .tutorial-panel-components-tutorial-list--download-link:focus, .tutorial-panel-components-tutorial-list--download-link:hover {
  text-decoration: underline;

  text-decoration-color: currentColor;
}
:host-context([data-awsui-focus-visible=true]) .tutorial-panel-components-tutorial-list--download-link:focus {
  outline: thin dotted;
  outline: var(--border-link-focus-ring-outline, 0);
  outline-offset: 2px;
  outline-color: var(--color-border-item-focused, #006ce0);
  border-start-start-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-start-end-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-end-start-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-end-end-radius: var(--border-radius-control-default-focus-ring, 4px);
  box-shadow: 0 0 0 var(--border-link-focus-ring-shadow-spread, 2px) var(--color-border-item-focused, #006ce0);
}
`;
