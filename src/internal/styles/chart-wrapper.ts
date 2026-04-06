// AUTO-GENERATED from @cloudscape-design/components — DO NOT EDIT
import { css } from 'lit';

export const chartWrapperStyles = css`
.wrapper {
  font-size: var(--font-size-body-m-a7nh2n, 14px);
  line-height: var(--line-height-body-m-2mh3ke, 20px);
  color: var(--color-text-body-default-vvtq8u, #0f141a);
  font-weight: 400;
  font-family: var(--font-family-base-gmnpzl, "Open Sans", "Helvetica Neue", Roboto, Arial, sans-serif);
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
  position: relative;
  display: block;
}
.wrapper--fit-height {
  block-size: 100%;
  overflow-y: auto;
}

.inner-wrapper--fit-height {
  display: flex;
  flex-direction: column;
  block-size: 100%;
}

.has-default-filter > :first-child {
  flex: 280px 0 1;
}

.content {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
}

.content--reserve-filter {
  margin-block-start: calc(2 * var(--line-height-body-m-2mh3ke, 20px));
}

.content--reserve-legend {
  margin-block-end: calc(2 * var(--line-height-body-m-2mh3ke, 20px));
}

.content--fit-height {
  flex: 1;
}
`;
