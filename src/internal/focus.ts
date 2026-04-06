/**
 * @module focus
 *
 * Focus management utilities for Shadow DOM components.
 *
 * @example
 * ```ts
 * import { createFocusTrap } from '../internal/focus.js';
 *
 * const release = createFocusTrap(this.shadowRoot!.querySelector('.dialog')!);
 * // … later
 * release();
 * ```
 */

// ── Focusable query ─────────────────────────────────────────────────────────

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'area[href]',
  'button:not([disabled])',
  'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
  '[contenteditable]:not([contenteditable="false"])',
].join(',');

export function getFocusableElements(container: HTMLElement | ShadowRoot): HTMLElement[] {
  return Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR))
    .filter(el => !el.hasAttribute('disabled') && el.offsetParent !== null);
}

// ── delegatesFocus helper ───────────────────────────────────────────────────

/**
 * Attach an open shadow root with `delegatesFocus: true`.
 * Use in the constructor of components that should auto-forward focus
 * to their first focusable shadow child.
 */
export function attachDelegatesFocusShadow(host: HTMLElement): ShadowRoot {
  return host.attachShadow({ mode: 'open', delegatesFocus: true });
}

// ── Simple focus trap ───────────────────────────────────────────────────────

/**
 * Trap keyboard focus within `container`. Tab / Shift+Tab wraps around
 * the focusable elements inside. Returns a `release` function that
 * removes the trap.
 */
export function createFocusTrap(container: HTMLElement): () => void {
  function handleKeydown(e: KeyboardEvent): void {
    if (e.key !== 'Tab') return;

    const focusable = getFocusableElements(container);
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  container.addEventListener('keydown', handleKeydown);

  const focusable = getFocusableElements(container);
  if (focusable.length > 0) {
    focusable[0].focus();
  }

  return () => container.removeEventListener('keydown', handleKeydown);
}
