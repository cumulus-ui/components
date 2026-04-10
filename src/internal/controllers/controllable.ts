import type { ReactiveController, ReactiveControllerHost } from 'lit';

export interface ControllableOptions<T> {
  defaultValue: T;
}

export class ControllableController<T> implements ReactiveController {
  private _host: ReactiveControllerHost;
  private _value: T;

  constructor(host: ReactiveControllerHost, options: ControllableOptions<T>) {
    this._host = host;
    this._value = options.defaultValue;
    host.addController(this);
  }

  get value(): T {
    return this._value;
  }

  set(value: T): void {
    if (this._value !== value) {
      this._value = value;
      this._host.requestUpdate();
    }
  }

  hostConnected(): void {}
  hostDisconnected(): void {}
}
