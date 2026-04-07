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

  :host([hidden]) {
    display: none !important;
  }
`;
