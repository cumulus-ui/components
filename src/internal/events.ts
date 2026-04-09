/**
 * CustomEvent dispatch helpers. All events use `composed: true, bubbles: true`
 * to cross Shadow DOM boundaries. Detail follows Cloudscape convention:
 * `event.detail.value`, `event.detail.checked`, etc.
 */

/** Dispatch a non-cancelable `CustomEvent` (fire-and-forget). */
export function fireNonCancelableEvent<T>(
  element: HTMLElement,
  eventName: string,
  detail: T
): void {
  element.dispatchEvent(
    new CustomEvent(eventName, {
      detail,
      bubbles: true,
      composed: true,
      cancelable: false,
    })
  );
}
