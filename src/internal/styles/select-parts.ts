// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const selectPartsStyles = css`
.select-parts--placeholder {
  color: var(--color-text-input-placeholder-dclg8u, #656871);
  font-style: italic;
}

.select-parts--item {
  display: flex;
  align-items: center;
}
.select-parts--item > .select-parts--checkbox {
  position: relative;
  min-block-size: var(--size-control-adm93y, 16px);
  min-inline-size: var(--size-control-adm93y, 16px);
  block-size: var(--size-control-adm93y, 16px);
  inline-size: var(--size-control-adm93y, 16px);
  margin-inline-end: var(--space-field-horizontal-0aq2ch, 12px);
}

.select-parts--option-group:not(:first-child) {
  margin-block-start: calc(-1 * var(--border-item-width-miijiw, 2px));
}

.select-parts--filter {
  z-index: 4;
  flex-shrink: 0;
}

.select-parts--trigger {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.select-parts--layout-strut {
  inline-size: 100%;
  position: relative;
  transform: translate3d(0, 0, 0);
}

.select-parts--list-bottom {
  /* used in unit-tests */
}

.select-parts--selected-icon {
  color: var(--color-item-selected-72rnwy, #006ce0);
  padding-inline-start: var(--space-xs-ymlm0b, 8px);
}

.select-parts--show-label-tag > .select-parts--selected-icon {
  padding-inline-start: var(--space-scaled-s-8ozaad, 12px);
}

.select-parts--inline-token-trigger {
  display: flex;
  flex-wrap: nowrap;
  column-gap: var(--space-xxs-hwfkai, 4px);
  inline-size: 100%;
}

.select-parts--inline-token-list {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: var(--space-xxs-hwfkai, 4px);
  inline-size: 100%;
  overflow-x: hidden;
  mask-image: linear-gradient(270deg, transparent, white 20px, white);

}
.select-parts--inline-token-list:dir(rtl) {
  mask-image: linear-gradient(-270deg, transparent, white 20px, white);
}

.select-parts--inline-token-hidden-placeholder {
  position: absolute !important;
  inset-block-start: -9999px !important;
  inset-inline-start: -9999px !important;
}

.select-parts--inline-token-counter {
  white-space: nowrap;
}

.select-parts--inline-label-trigger-wrapper {
  margin-block-start: -7px;
}

.select-parts--inline-label-wrapper {
  margin-block-start: calc(var(--space-scaled-xs-xwoogq, 8px) * -1);
}

.select-parts--inline-label {
  background: linear-gradient(to bottom, var(--color-background-layout-main-5ilwcb, #ffffff), var(--color-background-input-default-ifz5bb, #ffffff));
  border-start-start-radius: 2px;
  border-start-end-radius: 2px;
  border-end-start-radius: 2px;
  border-end-end-radius: 2px;
  box-sizing: border-box;
  display: inline-block;
  color: var(--color-text-form-label-6sbm75, #0f141a);
  font-weight: var(--font-display-label-weight-zavpeo, 700);
  font-size: var(--font-size-body-s-smc8cv, 12px);
  line-height: 14px;
  letter-spacing: var(--letter-spacing-body-s-gq78ok, 0.005em);
  position: relative;
  inset-inline-start: calc(var(--border-width-field-2xc78x, 1px) + var(--space-field-horizontal-0aq2ch, 12px) - var(--space-scaled-xxs-pfm1nx, 4px));
  margin-block-start: var(--space-scaled-xs-xwoogq, 8px);
  padding-block-end: 2px;
  padding-inline: var(--space-scaled-xxs-pfm1nx, 4px);
  max-inline-size: calc(100% - 2 * var(--space-field-horizontal-0aq2ch, 12px));
  z-index: 1;
}
.select-parts--inline-label-disabled {
  background: linear-gradient(to bottom, var(--color-background-layout-main-5ilwcb, #ffffff), var(--color-background-input-disabled-dihaja, #ebebf0));
}

.select-parts--inline-label-inline-tokens {
  padding-block-end: 0;
  transform: translateY(-1.5px);
}

.select-parts--disabled-reason-tooltip {
  /* used in test-utils or tests */
}
`;
