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

/** Dispatch a cancelable `CustomEvent`. Returns `true` if `preventDefault()` was called. */
export function fireCancelableEvent<T>(
  element: HTMLElement,
  eventName: string,
  detail: T
): boolean {
  const event = new CustomEvent(eventName, {
    detail,
    bubbles: true,
    composed: true,
    cancelable: true,
  });
  element.dispatchEvent(event);
  return event.defaultPrevented;
}
