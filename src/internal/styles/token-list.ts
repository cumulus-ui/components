// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const tokenListStyles = css`
.token-list--root {
  gap: var(--space-scaled-xs, 8px);
}
.token-list--root.token-list--horizontal {
  display: flex;
  gap: var(--space-xs, 8px);
  flex-direction: row;
  flex-wrap: wrap;
}
.token-list--root.token-list--vertical {
  display: flex;
  flex-direction: column;
}

.token-list--list {
  display: contents;
  list-style: none;
  padding-block: 0;
  padding-inline: 0;
  margin-block: 0;
  margin-inline: 0;
}
.token-list--list.token-list--horizontal, .token-list--list.token-list--vertical {
  display: flex;
  gap: var(--space-xs, 8px);
}
.token-list--list.token-list--horizontal {
  flex-direction: row;
  flex-wrap: wrap;
}
.token-list--list.token-list--vertical {
  flex-direction: column;
}
.token-list--list.token-list--grid {
  display: grid;
  gap: var(--space-xs, 8px);
  grid-template-columns: repeat(auto-fill, 230px);
}
@media (max-width: 688px) {
  .token-list--list.token-list--grid {
    display: flex;
    flex-direction: column;
  }
}

.token-list--list-item {
  padding-block: 0;
  padding-inline: 0;
  margin-block: 0;
  margin-inline: 0;
}

.token-list--toggle-container-inline {
  padding-inline-start: var(--space-xs, 8px);
  display: flex;
  align-items: center;
}

.token-list--toggle {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: var(--color-text-body-default, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  display: flex;
  align-items: center;
  background-color: transparent;
  border-block: var(--border-width-button, 2px) solid transparent;
  border-inline: var(--border-width-button, 2px) solid transparent;
  padding-block: 0;
  padding-inline: 0;
  margin-inline-start: -1px;
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
  .token-list--toggle {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .token-list--toggle, .awsui-mode-entering .token-list--toggle {
  animation: none;
  transition: none;
}
.token-list--toggle:hover {
  cursor: pointer;
  color: var(--awsui-style-color-hover, var(--color-text-link-hover, #002b66));
}
.token-list--toggle:focus {
  outline: none;
}
.token-list--toggle:active {
  color: var(--awsui-style-color-active, var(--color-text-link-hover, #002b66));
}
.token-list--toggle:active, .token-list--toggle:focus, .token-list--toggle:hover {
  text-decoration-line: underline;
  text-decoration-color: currentColor;
}
.token-list--toggle:active, .token-list--toggle:focus, .token-list--toggle:hover {
  text-decoration: none;
  text-decoration-color: transparent;
}
:host-context([data-awsui-focus-visible=true]) .token-list--toggle:focus {
  outline: 2px dotted transparent;
  border-block: var(--border-width-button, 2px) solid var(--color-border-item-focused, #006ce0);
  border-inline: var(--border-width-button, 2px) solid var(--color-border-item-focused, #006ce0);
  border-start-start-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-start-end-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-end-start-radius: var(--border-radius-control-default-focus-ring, 4px);
  border-end-end-radius: var(--border-radius-control-default-focus-ring, 4px);
  box-shadow: 0 0 0 var(--border-control-focus-ring-shadow-spread, 1px) var(--color-border-item-focused, #006ce0);
}
.token-list--toggle > .token-list--description {
  margin-inline-start: var(--space-xxs, 4px);
}

.token-list--separator {
  margin-block: 0;
  margin-inline: var(--space-scaled-m, 16px);
  inline-size: var(--border-divider-section-width, 1px);
  background-color: var(--color-border-divider-default, #c6c6cd);
}
`;
