// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const breadcrumbGroupItemStyles = css`
.breadcrumb-group-item--link:after {
  display: none;
}

.breadcrumb-group-item--breadcrumb,
.breadcrumb-group-item--ghost-breadcrumb {
  display: flex;
}
.breadcrumb-group-item--breadcrumb > .breadcrumb-group-item--icon,
.breadcrumb-group-item--ghost-breadcrumb > .breadcrumb-group-item--icon {
  margin-block: 0;
  margin-inline: var(--space-xs, 8px);
  color: var(--color-text-breadcrumb-icon, #8c8c94);
}
.breadcrumb-group-item--breadcrumb > .breadcrumb-group-item--anchor,
.breadcrumb-group-item--ghost-breadcrumb > .breadcrumb-group-item--anchor {
  min-inline-size: 0;
  overflow: hidden;
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
  .breadcrumb-group-item--breadcrumb > .breadcrumb-group-item--anchor,
  .breadcrumb-group-item--ghost-breadcrumb > .breadcrumb-group-item--anchor {
    animation: none;
    transition: none;
  }
}
.awsui-motion-disabled .breadcrumb-group-item--breadcrumb > .breadcrumb-group-item--anchor, .awsui-mode-entering .breadcrumb-group-item--breadcrumb > .breadcrumb-group-item--anchor, .awsui-motion-disabled .breadcrumb-group-item--ghost-breadcrumb > .breadcrumb-group-item--anchor, .awsui-mode-entering .breadcrumb-group-item--ghost-breadcrumb > .breadcrumb-group-item--anchor {
  animation: none;
  transition: none;
}
.breadcrumb-group-item--breadcrumb > .breadcrumb-group-item--anchor:hover,
.breadcrumb-group-item--ghost-breadcrumb > .breadcrumb-group-item--anchor:hover {
  cursor: pointer;
  color: var(--awsui-style-color-hover, var(--color-text-link-hover, #002b66));
}
.breadcrumb-group-item--breadcrumb > .breadcrumb-group-item--anchor:focus,
.breadcrumb-group-item--ghost-breadcrumb > .breadcrumb-group-item--anchor:focus {
  outline: none;
}
.breadcrumb-group-item--breadcrumb > .breadcrumb-group-item--anchor:active,
.breadcrumb-group-item--ghost-breadcrumb > .breadcrumb-group-item--anchor:active {
  color: var(--awsui-style-color-active, var(--color-text-link-hover, #002b66));
}
.breadcrumb-group-item--breadcrumb > .breadcrumb-group-item--anchor:active, .breadcrumb-group-item--breadcrumb > .breadcrumb-group-item--anchor:focus, .breadcrumb-group-item--breadcrumb > .breadcrumb-group-item--anchor:hover, .breadcrumb-group-item--ghost-breadcrumb > .breadcrumb-group-item--anchor:active, .breadcrumb-group-item--ghost-breadcrumb > .breadcrumb-group-item--anchor:focus, .breadcrumb-group-item--ghost-breadcrumb > .breadcrumb-group-item--anchor:hover {
  text-decoration-line: underline;
  text-decoration-color: currentColor;
}
.breadcrumb-group-item--breadcrumb > .breadcrumb-group-item--anchor > .breadcrumb-group-item--text,
.breadcrumb-group-item--ghost-breadcrumb > .breadcrumb-group-item--anchor > .breadcrumb-group-item--text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
}
:host-context([data-awsui-focus-visible=true]) .breadcrumb-group-item--breadcrumb > .breadcrumb-group-item--anchor:focus,
:host-context([data-awsui-focus-visible=true]) .breadcrumb-group-item--ghost-breadcrumb > .breadcrumb-group-item--anchor:focus {
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
.breadcrumb-group-item--breadcrumb.breadcrumb-group-item--last > .breadcrumb-group-item--icon,
.breadcrumb-group-item--ghost-breadcrumb.breadcrumb-group-item--last > .breadcrumb-group-item--icon {
  display: none;
}
.breadcrumb-group-item--breadcrumb.breadcrumb-group-item--last > .breadcrumb-group-item--anchor,
.breadcrumb-group-item--ghost-breadcrumb.breadcrumb-group-item--last > .breadcrumb-group-item--anchor {
  color: var(--color-text-breadcrumb-current, #656871);
  font-weight: 700;
  text-decoration: none;
  cursor: default;
}
`;
