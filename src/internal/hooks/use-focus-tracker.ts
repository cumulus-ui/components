// SPDX-License-Identifier: Apache-2.0
import type { ReactiveController, ReactiveControllerHost } from 'lit';

export interface FocusTrackerOptions {
  onFocusEnter?: () => void;
  onFocusLeave?: () => void;
}

/**
 * Tracks whether the host element or any descendant currently has focus.
 * Uses document-level focusin/focusout to cross shadow DOM boundaries.
 */
export class FocusTrackerController implements ReactiveController {
  private readonly _host: ReactiveControllerHost & HTMLElement;
  private readonly _onFocusEnter?: () => void;
  private readonly _onFocusLeave?: () => void;
  private _abort: AbortController | null = null;
  private _hasFocus = false;

  constructor(
    host: ReactiveControllerHost & HTMLElement,
    options: FocusTrackerOptions = {},
  ) {
    this._host = host;
    this._onFocusEnter = options.onFocusEnter;
    this._onFocusLeave = options.onFocusLeave;
    host.addController(this);
  }

  get hasFocus(): boolean {
    return this._hasFocus;
  }

  hostConnected(): void {
    this._abort = new AbortController();
    const opts: AddEventListenerOptions = { signal: this._abort.signal };

    this._hasFocus = this._nodeBelongs(document.activeElement);

    document.addEventListener('focusin', this._handleFocusIn, opts);
    document.addEventListener('focusout', this._handleFocusOut, opts);
  }

  hostDisconnected(): void {
    this._abort?.abort();
    this._abort = null;
    this._hasFocus = false;
  }

  private readonly _handleFocusIn = (event: FocusEvent): void => {
    const focusInside = this._nodeBelongs(event.target);
    if (!this._hasFocus && focusInside) {
      this._hasFocus = true;
      this._host.requestUpdate();
      this._onFocusEnter?.();
    }
  };

  private readonly _handleFocusOut = (event: FocusEvent): void => {
    const nextFocused = event.relatedTarget;
    const nextIsOutside = nextFocused === null || !this._nodeBelongs(nextFocused);
    if (this._hasFocus && nextIsOutside) {
      this._hasFocus = false;
      this._host.requestUpdate();
      this._onFocusLeave?.();
    }
  };

  // Walks composed tree (shadow roots → host) to check containment.
  private _nodeBelongs(target: EventTarget | null): boolean {
    if (!(target instanceof Node)) {
      return false;
    }
    const host = this._host as Node;
    let current: Node | null = target;
    while (current) {
      if (current === host) {
        return true;
      }
      current = current instanceof ShadowRoot
        ? current.host
        : current.parentNode;
    }
    return false;
  }
}
