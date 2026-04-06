import { css, type CSSResult } from 'lit';

// Base styles every Shadow DOM component should adopt.
// CSS custom properties from design tokens penetrate the shadow boundary,
// but class-based resets do not — so each component needs these.
export const sharedStyles: CSSResult = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :host {
    font-family: var(--font-family-base, 'Open Sans', 'Helvetica Neue', Roboto, Arial, sans-serif);
    font-size: var(--font-body-m-size, 14px);
    line-height: var(--font-body-m-line-height, 22px);
    color: var(--color-text-body-default, #000716);
    -webkit-font-smoothing: auto;
    -moz-osx-font-smoothing: auto;
  }

  :host([hidden]) {
    display: none !important;
  }
`;
