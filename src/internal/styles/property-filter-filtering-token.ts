// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const propertyFilterFilteringTokenStyles = css`
.property-filter-filtering-token--root,
.property-filter-filtering-token--inner-root {
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  color: var(--color-text-body-default-vvtq8u, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base-gmnpzl, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  display: flex;
  align-content: stretch;
}
.property-filter-filtering-token--root.property-filter-filtering-token--has-groups,
.property-filter-filtering-token--inner-root.property-filter-filtering-token--has-groups {
  min-block-size: calc(2px + var(--size-vertical-input-p1d7xx, 32px));
}
.property-filter-filtering-token--root.property-filter-filtering-token--has-groups.property-filter-filtering-token--compact-mode,
.property-filter-filtering-token--inner-root.property-filter-filtering-token--has-groups.property-filter-filtering-token--compact-mode {
  min-block-size: calc(2px + 2 * var(--border-width-token-2ukdpu, 2px) + var(--size-vertical-input-p1d7xx, 32px));
}

.property-filter-filtering-token--inner-root {
  block-size: 100%;
}

.property-filter-filtering-token--token,
.property-filter-filtering-token--inner-token {
  border-block: var(--border-width-token-2ukdpu, 2px) solid var(--color-border-item-selected-wl5ttm, #006ce0);
  border-inline: var(--border-width-token-2ukdpu, 2px) solid var(--color-border-item-selected-wl5ttm, #006ce0);
  display: flex;
  align-items: stretch;
  background: var(--color-background-item-selected-9gppru, #f0fbff);
  border-start-start-radius: var(--border-radius-token-ycnemh, 8px);
  border-start-end-radius: var(--border-radius-token-ycnemh, 8px);
  border-end-start-radius: var(--border-radius-token-ycnemh, 8px);
  border-end-end-radius: var(--border-radius-token-ycnemh, 8px);
  color: var(--color-text-body-default-vvtq8u, #0f141a);
  box-sizing: border-box;
}
.property-filter-filtering-token--token.property-filter-filtering-token--grouped,
.property-filter-filtering-token--inner-token.property-filter-filtering-token--grouped {
  justify-content: space-between;
}

.property-filter-filtering-token--inner-token {
  border-start-start-radius: calc(var(--border-radius-token-ycnemh, 8px) / 2);
  border-start-end-radius: calc(var(--border-radius-token-ycnemh, 8px) / 2);
  border-end-start-radius: calc(var(--border-radius-token-ycnemh, 8px) / 2);
  border-end-end-radius: calc(var(--border-radius-token-ycnemh, 8px) / 2);
}

.property-filter-filtering-token--list {
  list-style: none;
  margin-block: 0;
  margin-inline: 0;
  padding-block: 0;
  padding-inline: 0;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs-ymlm0b, 8px);
}

.property-filter-filtering-token--show-operation {
  border-inline-start: none;
  border-start-start-radius: 0;
  border-end-start-radius: 0;
}

.property-filter-filtering-token--token-content {
  display: flex;
  align-items: center;
  padding-block: var(--space-scaled-xxs-pfm1nx, 4px);
  padding-inline: var(--space-field-horizontal-0aq2ch, 12px);
}
.property-filter-filtering-token--token-content-grouped {
  padding-block: 2px;
  padding-inline: var(--space-field-horizontal-0aq2ch, 12px);
}

.property-filter-filtering-token--inner-token-content {
  padding-block: 1px;
  padding-inline: var(--space-field-horizontal-0aq2ch, 12px);
}

.property-filter-filtering-token--edit-button,
.property-filter-filtering-token--dismiss-button,
.property-filter-filtering-token--inner-dismiss-button {
  inline-size: 30px;
  margin-block: 0;
  margin-inline: 0;
  border-block: none;
  border-inline: none;
  padding-block: 0;
  padding-inline: var(--space-xxs-hwfkai, 4px);
  color: var(--color-text-interactive-default-ugh9wp, #424650);
  background-color: transparent;
  border-inline-start: var(--border-width-button-jm0qg7, 2px) solid var(--color-border-item-selected-wl5ttm, #006ce0);
}
:host-context([data-awsui-focus-visible=true]) .property-filter-filtering-token--edit-button:focus,
:host-context([data-awsui-focus-visible=true]) .property-filter-filtering-token--dismiss-button:focus,
:host-context([data-awsui-focus-visible=true]) .property-filter-filtering-token--inner-dismiss-button:focus {
  position: relative;
}
:host-context([data-awsui-focus-visible=true]) .property-filter-filtering-token--edit-button:focus,
:host-context([data-awsui-focus-visible=true]) .property-filter-filtering-token--dismiss-button:focus,
:host-context([data-awsui-focus-visible=true]) .property-filter-filtering-token--inner-dismiss-button:focus {
  outline: 2px dotted transparent;
  outline-offset: calc(var(--space-filtering-token-dismiss-button-focus-outline-gutter-1iumy3, -5px) - 1px);
}
:host-context([data-awsui-focus-visible=true]) .property-filter-filtering-token--edit-button:focus::before,
:host-context([data-awsui-focus-visible=true]) .property-filter-filtering-token--dismiss-button:focus::before,
:host-context([data-awsui-focus-visible=true]) .property-filter-filtering-token--inner-dismiss-button:focus::before {
  content: " ";
  display: block;
  position: absolute;
  inset-inline-start: calc(-1 * var(--space-filtering-token-dismiss-button-focus-outline-gutter-1iumy3, -5px));
  inset-block-start: calc(-1 * var(--space-filtering-token-dismiss-button-focus-outline-gutter-1iumy3, -5px));
  inline-size: calc(100% + var(--space-filtering-token-dismiss-button-focus-outline-gutter-1iumy3, -5px) + var(--space-filtering-token-dismiss-button-focus-outline-gutter-1iumy3, -5px));
  block-size: calc(100% + var(--space-filtering-token-dismiss-button-focus-outline-gutter-1iumy3, -5px) + var(--space-filtering-token-dismiss-button-focus-outline-gutter-1iumy3, -5px));
  border-start-start-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-start-end-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-end-start-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  border-end-end-radius: var(--border-radius-control-default-focus-ring-1uabki, 4px);
  box-shadow: 0 0 0 2px var(--color-border-item-focused-uk47pl, #006ce0);
}
.property-filter-filtering-token--edit-button:focus,
.property-filter-filtering-token--dismiss-button:focus,
.property-filter-filtering-token--inner-dismiss-button:focus {
  outline: none;
  text-decoration: none;
}
.property-filter-filtering-token--edit-button:hover,
.property-filter-filtering-token--dismiss-button:hover,
.property-filter-filtering-token--inner-dismiss-button:hover {
  cursor: pointer;
  color: var(--color-text-interactive-hover-6naf7i, #0f141a);
}
.property-filter-filtering-token--edit-button:disabled,
.property-filter-filtering-token--dismiss-button:disabled,
.property-filter-filtering-token--inner-dismiss-button:disabled {
  color: var(--color-text-interactive-disabled-1bqmrl, #b4b4bb);
  border-color: var(--color-border-control-disabled-uj7t08, #dedee3);
}

.property-filter-filtering-token--token-disabled {
  border-color: var(--color-border-control-disabled-uj7t08, #dedee3);
  background-color: var(--color-background-container-content-6u8rvp, #ffffff);
  color: var(--color-text-disabled-rox5hg, #b4b4bb);
  pointer-events: none;
}
`;
