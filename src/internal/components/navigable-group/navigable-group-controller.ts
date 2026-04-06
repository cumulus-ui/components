// SPDX-License-Identifier: Apache-2.0
import type { ReactiveController, ReactiveControllerHost } from 'lit';
import { getFocusableElements } from '../../focus.js';

export type NavigationDirection = 'horizontal' | 'vertical' | 'both';

export interface NavigableGroupOptions {
  /**
   * A callback returning the container whose direct focusable children
   * are managed. Called lazily so the shadow root is available.
   */
  getContainer: () => HTMLElement | ShadowRoot | null;

  /** Arrow key axis: horizontal (left/right), vertical (up/down), or both. */
  direction?: NavigationDirection;

  /** Whether arrow key navigation wraps around at boundaries. Default true. */
  wrap?: boolean;

  /** Called when a focusable child receives focus via keyboard navigation. */
  onFocus?: (element: HTMLElement, index: number) => void;
}

export class NavigableGroupController implements ReactiveController {
  private readonly _host: ReactiveControllerHost & HTMLElement;
  private readonly _getContainer: () => HTMLElement | ShadowRoot | null;
  private readonly _direction: NavigationDirection;
  private readonly _wrap: boolean;
  private readonly _onFocus?: (element: HTMLElement, index: number) => void;

  private _abort: AbortController | null = null;
  private _activeIndex = 0;

  constructor(
    host: ReactiveControllerHost & HTMLElement,
    options: NavigableGroupOptions,
  ) {
    this._host = host;
    this._getContainer = options.getContainer;
    this._direction = options.direction ?? 'vertical';
    this._wrap = options.wrap ?? true;
    this._onFocus = options.onFocus;
    host.addController(this);
  }

  get activeIndex(): number {
    return this._activeIndex;
  }

  hostConnected(): void {
    this._abort = new AbortController();
    const el = this._host;
    el.addEventListener('keydown', this._handleKeydown, { signal: this._abort.signal });
    el.addEventListener('focusin', this._handleFocusin, { signal: this._abort.signal });
  }

  hostDisconnected(): void {
    this._abort?.abort();
    this._abort = null;
  }

  /** Focus the currently active item (or the first focusable item). */
  focus(): void {
    const items = this._getFocusableItems();
    if (items.length === 0) return;
    const idx = Math.min(this._activeIndex, items.length - 1);
    this._focusItem(items, idx);
  }

  /** Programmatically set the active index without moving focus. */
  setActiveIndex(index: number): void {
    const items = this._getFocusableItems();
    if (items.length === 0) return;
    const clamped = Math.max(0, Math.min(index, items.length - 1));
    this._activeIndex = clamped;
    this._applyRovingTabindex(items);
  }

  /** Reset roving tabindex on all managed items. Call after DOM changes. */
  updateItems(): void {
    const items = this._getFocusableItems();
    if (items.length === 0) return;
    if (this._activeIndex >= items.length) {
      this._activeIndex = items.length - 1;
    }
    this._applyRovingTabindex(items);
  }

  // ── Private ───────────────────────────────────────────────────────────────

  private _getFocusableItems(): HTMLElement[] {
    const container = this._getContainer();
    if (!container) return [];
    return getFocusableElements(container as HTMLElement);
  }

  private _applyRovingTabindex(items: HTMLElement[]): void {
    for (let i = 0; i < items.length; i++) {
      items[i].setAttribute('tabindex', i === this._activeIndex ? '0' : '-1');
    }
  }

  private _focusItem(items: HTMLElement[], index: number): void {
    this._activeIndex = index;
    this._applyRovingTabindex(items);
    items[index].focus();
    this._onFocus?.(items[index], index);
  }

  private readonly _handleKeydown = (event: KeyboardEvent): void => {
    const items = this._getFocusableItems();
    if (items.length === 0) return;

    const { key } = event;
    let delta = 0;

    if (this._isBackward(key)) {
      delta = -1;
    } else if (this._isForward(key)) {
      delta = 1;
    } else if (key === 'Home') {
      event.preventDefault();
      this._focusItem(items, 0);
      return;
    } else if (key === 'End') {
      event.preventDefault();
      this._focusItem(items, items.length - 1);
      return;
    } else {
      return;
    }

    event.preventDefault();

    let next = this._activeIndex + delta;
    if (this._wrap) {
      next = (next + items.length) % items.length;
    } else {
      next = Math.max(0, Math.min(next, items.length - 1));
    }

    this._focusItem(items, next);
  };

  private readonly _handleFocusin = (event: FocusEvent): void => {
    const items = this._getFocusableItems();
    if (items.length === 0) return;

    const target = event.target as HTMLElement;
    const index = items.indexOf(target);
    if (index >= 0 && index !== this._activeIndex) {
      this._activeIndex = index;
      this._applyRovingTabindex(items);
    }
  };

  private _isBackward(key: string): boolean {
    if (this._direction === 'horizontal') return key === 'ArrowLeft';
    if (this._direction === 'vertical') return key === 'ArrowUp';
    return key === 'ArrowLeft' || key === 'ArrowUp';
  }

  private _isForward(key: string): boolean {
    if (this._direction === 'horizontal') return key === 'ArrowRight';
    if (this._direction === 'vertical') return key === 'ArrowDown';
    return key === 'ArrowRight' || key === 'ArrowDown';
  }
}
