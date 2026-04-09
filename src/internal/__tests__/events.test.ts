import { describe, it, expect, beforeEach } from 'vitest';
import { fireNonCancelableEvent } from '../events.js';

describe('fireNonCancelableEvent', () => {
  let el: HTMLElement;

  beforeEach(() => {
    el = document.createElement('div');
  });

  it('dispatches a non-cancelable CustomEvent with correct options', () => {
    let received: Event | undefined;
    el.addEventListener('change', (e) => { received = e; });

    fireNonCancelableEvent(el, 'change', { value: 'hello' });

    expect(received).toBeInstanceOf(CustomEvent);
    expect(received!.type).toBe('change');
    expect(received!.bubbles).toBe(true);
    expect(received!.composed).toBe(true);
    expect(received!.cancelable).toBe(false);
  });

  it('passes detail correctly', () => {
    let detail: unknown;
    el.addEventListener('select', ((e: CustomEvent) => {
      detail = e.detail;
    }) as EventListener);

    fireNonCancelableEvent(el, 'select', { value: 42, checked: true });

    expect(detail).toEqual({ value: 42, checked: true });
  });

  it('passes null detail', () => {
    let detail: unknown = 'sentinel';
    el.addEventListener('reset', ((e: CustomEvent) => {
      detail = e.detail;
    }) as EventListener);

    fireNonCancelableEvent(el, 'reset', null);

    expect(detail).toBeNull();
  });
});
