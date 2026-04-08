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
  -webkit-font-smoothing: var(--font-smoothing-webkit, antialiased);
  -moz-osx-font-smoothing: var(--font-smoothing-moz-osx, grayscale);
  text-underline-offset: 0.25em;
  text-decoration-thickness: 1px;
  color: var(--awsui-style-color-default, var(--color-text-link-default, #006ce0));
  font-weight: var(--font-link-button-weight, 700);
  letter-spacing: var(--font-link-button-letter-spacing, 0.005em);
  text-decoration-line: underline;
  text-decoration-color: var(--color-text-link-button-underline, transparent);
  transition-property: color, -webkit-text-decoration;
  transition-property: color, text-decoration;
  transition-property: color, text-decoration, -webkit-text-decoration;
  transition-duration: var(--motion-duration-refresh-only-medium, 165ms);
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
  color: var(--awsui-style-color-hover, var(--color-text-link-hover, #002b66));
}
.undo-button:focus {
  outline: none;
}
.undo-button:active {
  color: var(--awsui-style-color-active, var(--color-text-link-hover, #002b66));
}
.undo-button:active, .undo-button:focus, .undo-button:hover {
  text-decoration-line: underline;
  text-decoration-color: var(--color-text-link-button-underline-hover, transparent);
}
:host-context([data-awsui-focus-visible=true]) .undo-button:focus {
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

export { componentStyles as tagEditorStyles };
export { sharedStyles };
