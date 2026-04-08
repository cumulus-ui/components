// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
// License: see /NOTICE
import { css } from 'lit';

export const chartWrapperStyles = css`
.chart-wrapper--wrapper {
  font-size: var(--font-size-body-m, 14px);
  line-height: var(--line-height-body-m, 20px);
  color: var(--color-text-body-default, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  position: relative;
  display: block;
}
.wrapper--fit {
  block-size: 100%;
  overflow-y: auto;
}

.inner-wrapper--fit {
  display: flex;
  flex-direction: column;
  block-size: 100%;
}

.chart-wrapper--has-default-filter > :first-child {
  flex: 280px 0 1;
}

.chart-wrapper--content {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
}

.content--reserve {
  margin-block-start: calc(2 * var(--line-height-body-m, 20px));
}

.content--reserve {
  margin-block-end: calc(2 * var(--line-height-body-m, 20px));
}

.content--fit {
  flex: 1;
}
`;
