// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.help-panel {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: var(--color-text-body-default, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  word-wrap: break-word;
  padding-block-start: var(--space-panel-header-vertical, 20px);
  padding-block-end: 0;


}
.help-panel hr {
  border-block: none;
  border-inline: none;
  border-block-start: var(--border-divider-section-width, 1px) solid var(--color-border-divider-default, #c6c6cd);
  margin-block: var(--space-scaled-xl, 24px);
  margin-inline: calc(-1 * var(--space-panel-divider-margin-horizontal, 8px));
}
.help-panel ol,
.help-panel ul {
  padding-inline-start: var(--space-l, 20px);
  list-style-position: outside;
  margin-block: var(--space-s, 12px);
  margin-inline: 0;
}
.help-panel li {
  margin-block: var(--space-scaled-xxs, 4px);
  margin-inline: 0;
}
.help-panel a,
.help-panel h2,
.help-panel h3,
.help-panel h4,
.help-panel h5,
.help-panel pre,
.help-panel code {
  margin-block: var(--space-xs, 8px);
  margin-inline: 0;
  padding-block: 0;
}
.help-panel code {
  font-size: var(--font-size-body-s, 12px);
  line-height: var(--line-height-body-s, 16px);
  letter-spacing: var(--letter-spacing-body-s, 0.005em);
  font-family: var(--font-family-monospace, Monaco, Menlo, Consolas, "Courier Prime", Courier, "Courier New", monospace);
  background-color: var(--color-background-layout-main, #ffffff);
  padding-block: 0;
  padding-inline: var(--space-xxs, 4px);
  word-wrap: break-word;
  white-space: pre-wrap;
}
.help-panel pre {
  font-size: var(--font-size-body-s, 12px);
  line-height: var(--line-height-body-s, 16px);
  letter-spacing: var(--letter-spacing-body-s, 0.005em);
  font-family: var(--font-family-monospace, Monaco, Menlo, Consolas, "Courier Prime", Courier, "Courier New", monospace);
  background-color: var(--color-background-layout-main, #ffffff);
  padding-block: 0;
  padding-inline: var(--space-xxs, 4px);
  word-wrap: break-word;
  white-space: pre-wrap;
  padding-block: var(--space-xxs, 4px);
  padding-inline: var(--space-xxs, 4px);
}
.help-panel dl {
  margin-block: var(--space-s, 12px);
  margin-inline: 0;

}
.help-panel dl * {
  margin-block: 0;
}
.help-panel dt {
  margin-block-start: var(--space-xs, 8px);
  font-weight: 700;
}
.help-panel dd {
  margin-block-start: 0;
  margin-block-end: var(--space-xs, 8px);
  margin-inline: 0;
}
.help-panel h2,
.help-panel h3,
.help-panel h4,
.help-panel h5,
.help-panel h6 {
  margin-block-start: var(--space-xl, 24px);
  color: var(--color-text-heading-default, #0f141a);
}
.help-panel > :last-child {
  margin-block-end: var(--space-panel-content-bottom, 40px);
}
.help-panel p {
  color: inherit;
  text-decoration: none;
  margin-block: var(--space-s, 12px);
  margin-inline: 0;
}
.help-panel h1 {
  font-family: var(--font-family-heading, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  font-size: var(--font-size-heading-xl, 24px);
  line-height: var(--line-height-heading-xl, 30px);
  letter-spacing: var(--letter-spacing-heading-xl, -0.02em);
  font-weight: var(--font-weight-heading-xl, 700);
  -webkit-font-smoothing: var(--font-smoothing-webkit, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx, grayscale);
}
.help-panel h2 {
  font-family: var(--font-family-heading, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  font-size: var(--font-size-heading-l, 20px);
  line-height: var(--line-height-heading-l, 24px);
  letter-spacing: var(--letter-spacing-heading-l, -0.015em);
  font-weight: var(--font-weight-heading-l, 700);
  -webkit-font-smoothing: var(--font-smoothing-webkit, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx, grayscale);
}
.help-panel h3 {
  font-family: var(--font-family-heading, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  font-size: var(--font-size-heading-m, 18px);
  line-height: var(--line-height-heading-m, 22px);
  letter-spacing: var(--letter-spacing-heading-m, -0.01em);
  font-weight: var(--font-weight-heading-m, 700);
  -webkit-font-smoothing: var(--font-smoothing-webkit, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx, grayscale);
}
.help-panel h4 {
  font-family: var(--font-family-heading, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  font-size: var(--font-size-heading-s, 16px);
  line-height: var(--line-height-heading-s, 20px);
  letter-spacing: var(--letter-spacing-heading-s, -0.005em);
  font-weight: var(--font-weight-heading-s, 700);
  -webkit-font-smoothing: var(--font-smoothing-webkit, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx, grayscale);
}
.help-panel h5 {
  font-family: var(--font-family-heading, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  font-size: var(--font-size-heading-xs, 14px);
  line-height: var(--line-height-heading-xs, 18px);
  letter-spacing: var(--letter-spacing-heading-xs, normal);
  font-weight: var(--font-weight-heading-xs, 700);
  -webkit-font-smoothing: var(--font-smoothing-webkit, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx, grayscale);
}
.help-panel b,
.help-panel strong {
  font-weight: 700;
}

.loading {
  padding-inline-start: var(--space-panel-side-left, 28px);
  padding-inline-end: var(--space-panel-side-right, 24px);
}

.header {
  font-size: var(--font-panel-header-size, 18px);
  letter-spacing: var(--letter-spacing-heading-m, -0.01em);
  line-height: var(--font-panel-header-line-height, 22px);
  font-weight: var(--font-weight-heading-l, 700);
  -webkit-font-smoothing: var(--font-smoothing-webkit, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx, grayscale);
  color: var(--color-text-heading-default, #0f141a);
  padding-block-end: var(--space-panel-header-vertical, 20px);
  padding-inline: var(--space-panel-side-left, 28px) calc(var(--space-xl, 24px) + var(--space-scaled-xxl, 32px));
  border-block: none;
  border-inline: none;
  border-block-end: var(--border-divider-section-width, 1px) solid var(--color-border-panel-header, #c6c6cd);
  margin-block-start: 0;
  margin-block-end: var(--space-panel-content-top, 20px);


}
.with-toolbar > .header {
  border-color: transparent;
  margin-block-end: 0px;
}
.header h2,
.header h3,
.header h4,
.header h5,
.header h6 {
  font-size: var(--font-panel-header-size, 18px);
  letter-spacing: var(--letter-spacing-heading-m, -0.01em);
  line-height: var(--font-panel-header-line-height, 22px);
  font-weight: var(--font-weight-heading-l, 700);
  -webkit-font-smoothing: var(--font-smoothing-webkit, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx, grayscale);
  padding-block: 0;
  margin-block: 0;
}

.content {
  color: var(--color-text-body-secondary, #424650);
  padding-inline-start: var(--space-panel-side-left, 28px);
  padding-inline-end: var(--space-panel-side-right, 24px);


}
.content h2:first-child,
.content h3:first-child,
.content h4:first-child,
.content h5:first-child,
.content h6:first-child,
.content p:first-child {
  margin-block-start: 0;
}
.content a {
  text-underline-offset: 0.25em;
  text-decoration-thickness: 1px;
  color: var(--awsui-style-color-default, var(--color-text-link-default, #006ce0));
  font-weight: inherit;
  letter-spacing: normal;
  text-decoration-line: underline;
  text-decoration-color: currentColor;
  transition-property: color, -webkit-text-decoration;
  transition-property: color, text-decoration;
  transition-property: color, text-decoration, -webkit-text-decoration;
  transition-duration: var(--motion-duration-refresh-only-medium, 165ms);
}
@media (prefers-reduced-motion: reduce) {
  .content a {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .content a, .awsui-mode-entering .content a {
  animation: none;
  transition: none;
}
.content a:hover {
  cursor: pointer;
  color: var(--awsui-style-color-hover, var(--color-text-link-hover, #002b66));
}
.content a:focus {
  outline: none;
}
.content a:active {
  color: var(--awsui-style-color-active, var(--color-text-link-hover, #002b66));
}
.content a:active, .content a:focus, .content a:hover {
  text-decoration-line: underline;
  text-decoration-color: currentColor;
}

.footer {
  color: var(--color-text-body-secondary, #424650);
  padding-block: 0;
  padding-inline-start: var(--space-panel-side-left, 28px);
  padding-inline-end: var(--space-panel-side-right, 24px);


}
.footer ul {
  list-style: none;
  padding-inline-start: 0;
}
.footer a {
  text-underline-offset: 0.25em;
  text-decoration-thickness: 1px;
  color: var(--awsui-style-color-default, var(--color-text-link-default, #006ce0));
  font-weight: inherit;
  letter-spacing: normal;
  text-decoration-line: none;
  text-decoration-color: transparent;
  transition-property: color, -webkit-text-decoration;
  transition-property: color, text-decoration;
  transition-property: color, text-decoration, -webkit-text-decoration;
  transition-duration: var(--motion-duration-refresh-only-medium, 165ms);
}
@media (prefers-reduced-motion: reduce) {
  .footer a {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .footer a, .awsui-mode-entering .footer a {
  animation: none;
  transition: none;
}
.footer a:hover {
  cursor: pointer;
  color: var(--awsui-style-color-hover, var(--color-text-link-hover, #002b66));
}
.footer a:focus {
  outline: none;
}
.footer a:active {
  color: var(--awsui-style-color-active, var(--color-text-link-hover, #002b66));
}
.footer a:active, .footer a:focus, .footer a:hover {
  text-decoration-line: underline;
  text-decoration-color: currentColor;
}
.content a:focus,
.footer a:focus {
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

export { componentStyles as helpPanelStyles };
export { sharedStyles };
