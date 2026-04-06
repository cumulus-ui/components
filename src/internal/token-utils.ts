/**
 * @module token-utils
 *
 * Utility helpers for using Cloudscape design-token values inside Lit `static styles`.
 *
 * Cloudscape tokens are plain strings shaped like `var(--token-name-hash, #fallback)`.
 * Lit's `css` tagged template only accepts `CSSResult | number` expressions — raw
 * strings are rejected for security.  `unsafeCSS()` bridges the gap by wrapping a
 * trusted string as a `CSSResult`.
 *
 * @example
 * ```ts
 * import { token } from '../internal/token-utils.js';
 * import { colorBackgroundLayoutMain, spaceScaledS } from '../internal/tokens.js';
 *
 * static styles = css`
 *   :host {
 *     background: ${colorBackgroundLayoutMain};
 *     padding: ${spaceScaledS};
 *   }
 * `;
 * ```
 *
 * @example  Ad-hoc token wrapping (when you import directly from the package)
 * ```ts
 * import { token } from '../internal/token-utils.js';
 * import { colorTextAccent } from '@cloudscape-design/design-tokens';
 *
 * static styles = css`
 *   a { color: ${token(colorTextAccent)}; }
 * `;
 * ```
 */

import { type CSSResult, unsafeCSS } from 'lit';

/**
 * Wrap a Cloudscape design-token value (a `var(--…, fallback)` string) as a Lit
 * `CSSResult` so it can be interpolated inside `css` tagged templates.
 *
 * This is intentionally thin — it's just `unsafeCSS()` with a self-documenting
 * name and a single import site for the whole library.
 *
 * @param value - A design-token string, e.g. `"var(--color-text-accent-n1kmht, #006ce0)"`
 * @returns A `CSSResult` usable in `static styles = css\`…\``
 */
export function token(value: string): CSSResult {
  return unsafeCSS(value);
}
