// SPDX-License-Identifier: Apache-2.0
import type { ReactiveControllerHost } from 'lit';

export interface ControllableOptions<T> {
  prop: string;
  defaultValue: T;
  onChange?: (value: T) => void;
}

/**
 * Controlled/uncontrolled value pattern for form components.
 *
 * Controlled: host provides value via reactive property; setValue fires onChange only.
 * Uncontrolled: controller manages state internally. Mode decided once at construction.
 */
export class ControllableController<T> {
  private readonly _host: ReactiveControllerHost & Record<string, unknown>;
  private readonly _prop: string;
  private readonly _onChange?: (value: T) => void;
  private readonly _isControlled: boolean;
  private _internalValue: T;

  constructor(
    host: ReactiveControllerHost,
    options: ControllableOptions<T>,
  ) {
    this._host = host as ReactiveControllerHost & Record<string, unknown>;
    this._prop = options.prop;
    this._onChange = options.onChange;
    this._internalValue = options.defaultValue;
    this._isControlled = this._host[this._prop] !== undefined;
    host.addController(this);
  }

  hostUpdate(): void {
    // intentionally empty — value read lazily via getter
  }

  get controlled(): boolean {
    return this._isControlled;
  }

  get value(): T {
    if (this._isControlled) {
      return this._host[this._prop] as T;
    }
    return this._internalValue;
  }

  setValue(next: T): void {
    if (this._isControlled) {
      this._onChange?.(next);
      return;
    }

    if (!Object.is(this._internalValue, next)) {
      this._internalValue = next;
      this._host.requestUpdate();
    }
    this._onChange?.(next);
  }
}
