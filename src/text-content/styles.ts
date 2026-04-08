// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.text-content {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: var(--color-text-body-default, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;


}
.text-content h1,
.text-content h2,
.text-content h3,
.text-content h4,
.text-content h5,
.text-content p {
  font-family: inherit;
  font-weight: normal;
  text-decoration: none;
  margin-block: 0;
  margin-inline: 0;
  padding-block: var(--space-xxs, 4px);
  padding-inline: 0;
}
.text-content h1,
.text-content h2,
.text-content h3,
.text-content h4,
.text-content h5 {
  color: var(--color-text-heading-default, #0f141a);
}
.text-content h1 {
  font-family: var(--font-family-heading, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  font-size: var(--font-size-heading-xl, 24px);
  line-height: var(--line-height-heading-xl, 30px);
  letter-spacing: var(--letter-spacing-heading-xl, -0.02em);
  font-weight: var(--font-weight-heading-xl, 700);
  -webkit-font-smoothing: var(--font-smoothing-webkit, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx, grayscale);
}
.text-content h2 {
  font-family: var(--font-family-heading, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  font-size: var(--font-size-heading-l, 20px);
  line-height: var(--line-height-heading-l, 24px);
  letter-spacing: var(--letter-spacing-heading-l, -0.015em);
  font-weight: var(--font-weight-heading-l, 700);
  -webkit-font-smoothing: var(--font-smoothing-webkit, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx, grayscale);
}
.text-content h3 {
  font-family: var(--font-family-heading, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  font-size: var(--font-size-heading-m, 18px);
  line-height: var(--line-height-heading-m, 22px);
  letter-spacing: var(--letter-spacing-heading-m, -0.01em);
  font-weight: var(--font-weight-heading-m, 700);
  -webkit-font-smoothing: var(--font-smoothing-webkit, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx, grayscale);
}
.text-content h4 {
  font-family: var(--font-family-heading, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  font-size: var(--font-size-heading-s, 16px);
  line-height: var(--line-height-heading-s, 20px);
  letter-spacing: var(--letter-spacing-heading-s, -0.005em);
  font-weight: var(--font-weight-heading-s, 700);
  -webkit-font-smoothing: var(--font-smoothing-webkit, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx, grayscale);
}
.text-content h5 {
  font-family: var(--font-family-heading, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  font-size: var(--font-size-heading-xs, 14px);
  line-height: var(--line-height-heading-xs, 18px);
  letter-spacing: var(--letter-spacing-heading-xs, normal);
  font-weight: var(--font-weight-heading-xs, 700);
  -webkit-font-smoothing: var(--font-smoothing-webkit, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx, grayscale);
}
.text-content b,
.text-content strong {
  font-weight: 700;
}
.text-content p {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: inherit;
}
.text-content small {
  display: inline-block;
  font-size: var(--font-size-body-s, 12px);
  line-height: var(--line-height-body-s, 16px);
  letter-spacing: var(--letter-spacing-body-s, 0.005em);
  color: var(--color-text-small, #656871);
}
.text-content small a {
  font-size: inherit;
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
  .text-content small a {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .text-content small a, .awsui-mode-entering .text-content small a {
  animation: none;
  transition: none;
}
.text-content small a:hover {
  cursor: pointer;
  color: var(--awsui-style-color-hover, var(--color-text-link-hover, #002b66));
}
.text-content small a:focus {
  outline: none;
}
.text-content small a:active {
  color: var(--awsui-style-color-active, var(--color-text-link-hover, #002b66));
}
.text-content small a:active, .text-content small a:focus, .text-content small a:hover {
  text-decoration-line: underline;
  text-decoration-color: currentColor;
}
.text-content code,
.text-content pre,
.text-content samp {
  font-family: var(--font-family-monospace, Monaco, Menlo, Consolas, "Courier Prime", Courier, "Courier New", monospace);
  background: transparent;
}
.text-content code {
  font-size: var(--font-size-body-s, 12px);
  line-height: var(--line-height-body-s, 16px);
  letter-spacing: var(--letter-spacing-body-s, 0.005em);
}
.text-content a {
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
  .text-content a {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .text-content a, .awsui-mode-entering .text-content a {
  animation: none;
  transition: none;
}
.text-content a:hover {
  cursor: pointer;
  color: var(--awsui-style-color-hover, var(--color-text-link-hover, #002b66));
}
.text-content a:focus {
  outline: none;
}
.text-content a:active {
  color: var(--awsui-style-color-active, var(--color-text-link-hover, #002b66));
}
.text-content a:active, .text-content a:focus, .text-content a:hover {
  text-decoration-line: underline;
  text-decoration-color: currentColor;
}
.text-content a:focus {
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
.text-content ul,
.text-content ol {
  padding-inline-start: var(--space-l, 20px);
  margin-block: var(--space-scaled-xs, 8px);
  margin-inline: 0;
  list-style-position: outside;
}
.text-content ul + ul,
.text-content ul + ol,
.text-content ul > li + ul,
.text-content ul > li + li,
.text-content ul > li + ol,
.text-content ul > li > ul,
.text-content ul > li > ol,
.text-content ol + ul,
.text-content ol + ol,
.text-content ol > li + ul,
.text-content ol > li + li,
.text-content ol > li + ol,
.text-content ol > li > ul,
.text-content ol > li > ol {
  padding-block-start: var(--space-scaled-xxs, 4px);
}
.text-content ul > li > ul,
.text-content ul > li > ol,
.text-content ol > li > ul,
.text-content ol > li > ol {
  margin-block: 0;
  margin-inline: 0;
}
`;

export { componentStyles as textContentStyles };
export { sharedStyles };
