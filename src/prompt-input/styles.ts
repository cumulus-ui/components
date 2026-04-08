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
  border-start-start-radius: var(--border-radius-input-7q0str, 8px);
  border-start-end-radius: var(--border-radius-input-7q0str, 8px);
  border-end-start-radius: var(--border-radius-input-7q0str, 8px);
  border-end-end-radius: var(--border-radius-input-7q0str, 8px);
  cursor: text;
  background-color: var(--awsui-prompt-input-style-background-default-6b9ypa, var(--color-background-input-default-ifz5bb, #ffffff));
  border-block: var(--border-width-field-2xc78x, 1px) solid var(--awsui-prompt-input-style-border-color-default-6b9ypa, var(--color-border-input-default-317xk5, #8c8c94));
  border-inline: var(--border-width-field-2xc78x, 1px) solid var(--awsui-prompt-input-style-border-color-default-6b9ypa, var(--color-border-input-default-317xk5, #8c8c94));
  box-shadow: var(--awsui-prompt-input-style-box-shadow-default-6b9ypa);
}
.root:hover {
  background-color: var(--awsui-prompt-input-style-background-hover-6b9ypa, var(--awsui-prompt-input-style-background-default-6b9ypa, var(--color-background-input-default-ifz5bb, #ffffff)));
  border-color: var(--awsui-prompt-input-style-border-color-hover-6b9ypa, var(--awsui-prompt-input-style-border-color-default-6b9ypa, var(--color-border-input-default-317xk5, #8c8c94)));
  box-shadow: var(--awsui-prompt-input-style-box-shadow-hover-6b9ypa, var(--awsui-prompt-input-style-box-shadow-default-6b9ypa));
}
.root.textarea-readonly {
  background-color: var(--awsui-prompt-input-style-background-readonly-6b9ypa, var(--awsui-prompt-input-style-background-default-6b9ypa, var(--color-background-input-default-ifz5bb, #ffffff)));
  border-block: var(--border-width-field-2xc78x, 1px) solid var(--awsui-prompt-input-style-border-color-readonly-6b9ypa, var(--awsui-prompt-input-style-border-color-default-6b9ypa, var(--color-border-input-disabled-zgnzvk, #ebebf0)));
  border-inline: var(--border-width-field-2xc78x, 1px) solid var(--awsui-prompt-input-style-border-color-readonly-6b9ypa, var(--awsui-prompt-input-style-border-color-default-6b9ypa, var(--color-border-input-disabled-zgnzvk, #ebebf0)));
  box-shadow: var(--awsui-prompt-input-style-box-shadow-readonly-6b9ypa);
}
.root.disabled {
  background-color: var(--awsui-prompt-input-style-background-disabled-6b9ypa, var(--color-background-input-disabled-dihaja, #ebebf0));
  border-block: var(--border-width-field-2xc78x, 1px) solid var(--awsui-prompt-input-style-border-color-disabled-6b9ypa, var(--color-border-input-disabled-zgnzvk, #ebebf0));
  border-inline: var(--border-width-field-2xc78x, 1px) solid var(--awsui-prompt-input-style-border-color-disabled-6b9ypa, var(--color-border-input-disabled-zgnzvk, #ebebf0));
  color: var(--awsui-prompt-input-style-color-disabled-6b9ypa, var(--color-text-input-disabled-wh1f3y, #b4b4bb));
  cursor: default;
  box-shadow: var(--awsui-prompt-input-style-box-shadow-disabled-6b9ypa);
}
.root.textarea-invalid {
  color: var(--awsui-prompt-input-style-color-default-6b9ypa, var(--color-text-status-error-ksqavh, #db0000));
  border-color: var(--awsui-prompt-input-style-border-color-default-6b9ypa, var(--color-text-status-error-ksqavh, #db0000));
  padding-inline-start: calc(var(--space-field-horizontal-0aq2ch, 12px) - (var(--border-invalid-width-3xd6e1, 8px) - var(--border-width-field-2xc78x, 1px)));
  border-inline-start-width: var(--border-invalid-width-3xd6e1, 8px);
}
.root.textarea-invalid:focus {
  box-shadow: 0 0 0 var(--border-control-invalid-focus-ring-shadow-spread-9jjf96, 2px) var(--color-border-item-focused-uk47pl, #006ce0);
}
.root.textarea-invalid {
  padding-inline-start: 0;
}
.root.textarea-invalid:focus-within, .root.textarea-invalid:focus {
  color: var(--awsui-prompt-input-style-color-default-6b9ypa, var(--color-text-status-error-ksqavh, #db0000));
  border-color: var(--awsui-prompt-input-style-border-color-default-6b9ypa, var(--color-text-status-error-ksqavh, #db0000));
  padding-inline-start: calc(var(--space-field-horizontal-0aq2ch, 12px) - (var(--border-invalid-width-3xd6e1, 8px) - var(--border-width-field-2xc78x, 1px)));
  border-inline-start-width: var(--border-invalid-width-3xd6e1, 8px);
}
.root.textarea-invalid:focus-within:focus, .root.textarea-invalid:focus:focus {
  box-shadow: 0 0 0 var(--border-control-invalid-focus-ring-shadow-spread-9jjf96, 2px) var(--color-border-item-focused-uk47pl, #006ce0);
}
.root.textarea-invalid:focus-within, .root.textarea-invalid:focus {
  padding-inline-start: 0;
  box-shadow: 0 0 0 var(--border-control-invalid-focus-ring-shadow-spread-9jjf96, 2px) var(--color-border-item-focused-uk47pl, #006ce0);
}
.root.textarea-warning {
  color: var(--awsui-prompt-input-style-color-default-6b9ypa, var(--color-text-status-warning-6meo06, #855900));
  border-color: var(--awsui-prompt-input-style-border-color-default-6b9ypa, var(--color-text-status-warning-6meo06, #855900));
  padding-inline-start: calc(var(--space-field-horizontal-0aq2ch, 12px) - (var(--border-invalid-width-3xd6e1, 8px) - var(--border-width-field-2xc78x, 1px)));
  border-inline-start-width: var(--border-invalid-width-3xd6e1, 8px);
}
.root.textarea-warning:focus {
  box-shadow: 0 0 0 var(--border-control-invalid-focus-ring-shadow-spread-9jjf96, 2px) var(--color-border-item-focused-uk47pl, #006ce0);
}
.root.textarea-warning {
  padding-inline-start: 0;
}
.root.textarea-warning:focus-within, .root.textarea-warning:focus {
  color: var(--awsui-prompt-input-style-color-default-6b9ypa, var(--color-text-status-warning-6meo06, #855900));
  border-color: var(--awsui-prompt-input-style-border-color-default-6b9ypa, var(--color-text-status-warning-6meo06, #855900));
  padding-inline-start: calc(var(--space-field-horizontal-0aq2ch, 12px) - (var(--border-invalid-width-3xd6e1, 8px) - var(--border-width-field-2xc78x, 1px)));
  border-inline-start-width: var(--border-invalid-width-3xd6e1, 8px);
}
.root.textarea-warning:focus-within:focus, .root.textarea-warning:focus:focus {
  box-shadow: 0 0 0 var(--border-control-invalid-focus-ring-shadow-spread-9jjf96, 2px) var(--color-border-item-focused-uk47pl, #006ce0);
}
.root.textarea-warning:focus-within, .root.textarea-warning:focus {
  padding-inline-start: 0;
  box-shadow: 0 0 0 var(--border-control-invalid-focus-ring-shadow-spread-9jjf96, 2px) var(--color-border-item-focused-uk47pl, #006ce0);
}
.root:focus-within, .root:focus {
  outline: 2px dotted transparent;
  border-block: var(--border-width-field-2xc78x, 1px) solid var(--awsui-prompt-input-style-border-color-focus-6b9ypa, var(--color-border-input-focused-4z0pgn, #006ce0));
  border-inline: var(--border-width-field-2xc78x, 1px) solid var(--awsui-prompt-input-style-border-color-focus-6b9ypa, var(--color-border-input-focused-4z0pgn, #006ce0));
  border-start-start-radius: var(--border-radius-input-7q0str, 8px);
  border-start-end-radius: var(--border-radius-input-7q0str, 8px);
  border-end-start-radius: var(--border-radius-input-7q0str, 8px);
  border-end-end-radius: var(--border-radius-input-7q0str, 8px);
  box-shadow: var(--awsui-prompt-input-style-box-shadow-focus-6b9ypa, 0 0 0 var(--border-control-focus-ring-shadow-spread-9mjajk, 1px) var(--color-border-item-focused-uk47pl, #006ce0));
  background-color: var(--awsui-prompt-input-style-background-focus-6b9ypa, var(--color-background-input-default-ifz5bb, #ffffff));
}

.textarea {
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  color: var(--color-text-body-default-vvtq8u, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base-gmnpzl, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  border-start-start-radius: var(--border-radius-input-7q0str, 8px);
  border-start-end-radius: var(--border-radius-input-7q0str, 8px);
  border-end-start-radius: var(--border-radius-input-7q0str, 8px);
  border-end-end-radius: var(--border-radius-input-7q0str, 8px);
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  resize: none;
  cursor: text;
  white-space: pre-wrap;
  background-color: inherit;
  padding-block: var(--space-scaled-xxs-pfm1nx, 4px);
  padding-inline: var(--space-field-horizontal-0aq2ch, 12px);
  color: var(--awsui-prompt-input-style-color-default-6b9ypa, var(--color-text-body-default-vvtq8u, #0f141a));
  max-inline-size: 100%;
  inline-size: 100%;
  display: block;
  box-sizing: border-box;
  border: 0;
}
.textarea::placeholder {
  color: var(--awsui-prompt-input-style-placeholder-color-6b9ypa, var(--color-text-input-placeholder-dclg8u, #656871));
  font-size: var(--awsui-prompt-input-style-placeholder-font-size-6b9ypa);
  font-style: var(--awsui-prompt-input-style-placeholder-font-style-6b9ypa, italic);
  font-weight: var(--awsui-prompt-input-style-placeholder-font-weight-6b9ypa);
  opacity: 1;
}
.textarea:hover {
  color: var(--awsui-prompt-input-style-color-hover-6b9ypa, var(--awsui-prompt-input-style-color-default-6b9ypa, var(--color-text-body-default-vvtq8u, #0f141a)));
}
.textarea:focus {
  outline: none;
  color: var(--awsui-prompt-input-style-color-focus-6b9ypa, var(--awsui-prompt-input-style-color-default-6b9ypa, var(--color-text-body-default-vvtq8u, #0f141a)));
}
.textarea:invalid {
  box-shadow: none;
}
.textarea.invalid, .textarea.warning {
  padding-inline-start: calc(var(--space-field-horizontal-0aq2ch, 12px) - (var(--border-invalid-width-3xd6e1, 8px) - var(--border-width-field-2xc78x, 1px)));
}
.textarea:disabled {
  color: var(--awsui-prompt-input-style-color-disabled-6b9ypa, var(--color-text-input-disabled-wh1f3y, #b4b4bb));
  cursor: default;
}
.textarea:disabled::placeholder {
  color: var(--color-text-input-placeholder-disabled-wg87og, #b4b4bb);
  opacity: 1;
}
.textarea-readonly {
  color: var(--awsui-prompt-input-style-color-readonly-6b9ypa, var(--awsui-prompt-input-style-color-default-6b9ypa, var(--color-text-body-default-vvtq8u, #0f141a)));
}
.textarea-wrapper {
  display: flex;
}

.primary-action {
  align-self: flex-end;
  flex-shrink: 0;
  padding-inline-start: calc(var(--space-field-horizontal-0aq2ch, 12px) / 2);
}
.textarea-wrapper > .primary-action {
  padding-inline-end: calc(var(--space-field-horizontal-0aq2ch, 12px) / 2);
}
.textarea-wrapper > .primary-action > .action-button {
  margin-block-end: var(--space-scaled-xxxs-oo06c7, 2px);
  padding: 0;
}

.secondary-content {
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  color: var(--color-text-body-default-vvtq8u, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base-gmnpzl, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  border-start-start-radius: var(--border-radius-input-7q0str, 8px);
  border-start-end-radius: var(--border-radius-input-7q0str, 8px);
  border-end-start-radius: var(--border-radius-input-7q0str, 8px);
  border-end-end-radius: var(--border-radius-input-7q0str, 8px);
}
.secondary-content.with-paddings {
  padding-block-start: var(--space-scaled-s-8ozaad, 12px);
  padding-block-end: var(--space-scaled-s-8ozaad, 12px);
  padding-inline-start: var(--space-field-horizontal-0aq2ch, 12px);
  padding-inline-end: var(--space-field-horizontal-0aq2ch, 12px);
}
.secondary-content.with-paddings.invalid, .secondary-content.with-paddings.warning {
  padding-inline-start: calc(var(--space-field-horizontal-0aq2ch, 12px) - (var(--border-invalid-width-3xd6e1, 8px) - var(--border-width-field-2xc78x, 1px)));
}

.action-stripe {
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  color: var(--color-text-body-default-vvtq8u, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base-gmnpzl, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  border-start-start-radius: var(--border-radius-input-7q0str, 8px);
  border-start-end-radius: var(--border-radius-input-7q0str, 8px);
  border-end-start-radius: var(--border-radius-input-7q0str, 8px);
  border-end-end-radius: var(--border-radius-input-7q0str, 8px);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.secondary-actions {
  flex-basis: max-content;
  flex-grow: 0;
  flex-shrink: 1;
  box-sizing: border-box;
  word-wrap: break-word;
  max-inline-size: 100%;
  overflow: hidden;
  padding-inline-end: var(--space-scaled-xxs-pfm1nx, 4px);
}
.secondary-actions.with-paddings {
  padding-inline: var(--space-field-horizontal-0aq2ch, 12px);
  padding-block-start: var(--space-scaled-s-8ozaad, 12px);
  padding-block-end: var(--space-scaled-xxs-pfm1nx, 4px);
}
.secondary-actions.with-paddings.invalid, .secondary-actions.with-paddings.warning {
  padding-inline-start: calc(var(--space-field-horizontal-0aq2ch, 12px) - (var(--border-invalid-width-3xd6e1, 8px) - var(--border-width-field-2xc78x, 1px)));
}
.secondary-actions.with-paddings-and-actions {
  padding-inline-end: 0;
}

.buffer {
  flex: 1;
  align-self: stretch;
  cursor: text;
}
`;

export { componentStyles as promptInputStyles };
export { sharedStyles };
