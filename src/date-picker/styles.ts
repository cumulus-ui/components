// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';
import { sharedStyles } from '../internal/styles/shared.js';

export const componentStyles = css`
.root {
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  color: var(--color-text-body-default-vvtq8u, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base-gmnpzl, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
}

.focus-lock {
  display: contents;
}

.calendar {
  overflow: auto;
}
.calendar:focus {
  outline: none;
}
:host-context([data-awsui-focus-visible=true]) .calendar:focus {
  outline: 2px dotted transparent;
  outline-offset: 2px;
  border-start-start-radius: var(--border-radius-dropdown-fgc2a1, 8px);
  border-start-end-radius: var(--border-radius-dropdown-fgc2a1, 8px);
  border-end-start-radius: var(--border-radius-dropdown-fgc2a1, 8px);
  border-end-end-radius: var(--border-radius-dropdown-fgc2a1, 8px);
  box-shadow: 0 0 0 2px var(--color-border-item-focused-uk47pl, #006ce0);
}

.date-picker-container {
  position: relative;
  max-inline-size: 234px;
}

.date-picker-trigger {
  display: flex;
}

.date-picker-input {
  padding-inline-end: var(--space-xs-ymlm0b, 8px);
  inline-size: 100%;
}
`;

export { componentStyles as datePickerStyles };
export { sharedStyles };
