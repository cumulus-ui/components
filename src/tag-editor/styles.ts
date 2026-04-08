// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.root {
  /* used in test utils */
}

.loading {
  /* used in test utils */
}

.undo-button {
  -webkit-font-smoothing: var(--font-smoothing-webkit-oemolo, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx-hbm0aq, grayscale);
  text-underline-offset: 0.25em;
  text-decoration-thickness: 1px;
  color: var(--awsui-style-color-default-6b9ypa, var(--color-text-link-default-hude44, #006ce0));
  font-weight: var(--font-link-button-weight-vslyg9, 700);
  letter-spacing: var(--font-link-button-letter-spacing-imtxwq, 0.005em);
  text-decoration-line: underline;
  text-decoration-color: var(--color-text-link-button-underline-z4wjnv, transparent);
  transition-property: color, -webkit-text-decoration;
  transition-property: color, text-decoration;
  transition-property: color, text-decoration, -webkit-text-decoration;
  transition-duration: var(--motion-duration-refresh-only-medium-5rbn3k, 165ms);
}
@media (prefers-reduced-motion: reduce) {
  .undo-button {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .undo-button, .awsui-mode-entering .undo-button {
  animation: none;
  transition: none;
}
.undo-button:hover {
  cursor: pointer;
  color: var(--awsui-style-color-hover-6b9ypa, var(--color-text-link-hover-2hfec2, #002b66));
}
.undo-button:focus {
  outline: none;
}
.undo-button:active {
  color: var(--awsui-style-color-active-6b9ypa, var(--color-text-link-hover-2hfec2, #002b66));
}
.undo-button:active, .undo-button:focus, .undo-button:hover {
  text-decoration-line: underline;
  text-decoration-color: var(--color-text-link-button-underline-hover-cn3mqh, transparent);
}
:host-context([data-awsui-focus-visible=true]) .undo-button:focus {
  outline: thin dotted;
  outline: var(--border-link-focus-ring-outline-1p0hnu, 0);
  outline-offset: 2px;
  outline-color: var(--color-border-item-focused-uk47pl, #006ce0);
  border-start-start-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-start-end-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-end-start-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-end-end-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  box-shadow: 0 0 0 var(--border-link-focus-ring-shadow-spread-39uvxr, 2px) var(--color-border-item-focused-uk47pl, #006ce0);
}
`;

export { componentStyles as tagEditorStyles };
export { sharedStyles };
