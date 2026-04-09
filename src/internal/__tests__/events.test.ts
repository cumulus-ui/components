import { describe, it, expect, beforeEach } from 'vitest';
import { fireNonCancelableEvent } from '../events.js';

describe('fireNonCancelableEvent', () => {
  let el: HTMLElement;

  beforeEach(() => {
    el = document.createElement('div');
  });

  it('dispatches a CustomEvent with the correct event name', () => {
    let received: Event | undefined;
    el.addEventListener('change', (e) => { received = e; });

    fireNonCancelableEvent(el, 'change', { value: 'hello' });

    expect(received).toBeInstanceOf(CustomEvent);
    expect(received!.type).toBe('change');
  });

  it('sets bubbles: true and composed: true', () => {
    let received: Event | undefined;
    el.addEventListener('update', (e) => { received = e; });

    fireNonCancelableEvent(el, 'update', {});

    expect(received!.bubbles).toBe(true);
    expect(received!.composed).toBe(true);
  });

  it('sets cancelable: false', () => {
    let received: Event | undefined;
    el.addEventListener('update', (e) => { received = e; });

    fireNonCancelableEvent(el, 'update', {});

    expect(received!.cancelable).toBe(false);
  });

  it('passes detail correctly', () => {
    let detail: unknown;
    el.addEventListener('select', ((e: CustomEvent) => {
      detail = e.detail;
    }) as EventListener);

    const payload = { value: 42, checked: true };
    fireNonCancelableEvent(el, 'select', payload);

    expect(detail).toEqual({ value: 42, checked: true });
  });

  it('works with empty detail {}', () => {
    let detail: unknown;
    el.addEventListener('clear', ((e: CustomEvent) => {
      detail = e.detail;
    }) as EventListener);

    fireNonCancelableEvent(el, 'clear', {});

    expect(detail).toEqual({});
  });

  it('works with null detail', () => {
    let detail: unknown = 'sentinel';
    el.addEventListener('reset', ((e: CustomEvent) => {
      detail = e.detail;
    }) as EventListener);

    fireNonCancelableEvent(el, 'reset', null);

    expect(detail).toBeNull();
  });

  it('returns void', () => {
    const result = fireNonCancelableEvent(el, 'test', {});
    expect(result).toBeUndefined();
  });
});
