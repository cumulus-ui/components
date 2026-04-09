/**
 * @module form-associated
 *
 * Lit mixin that makes a custom element participate in HTML forms via
 * `ElementInternals`. Every form component (Input, Select, Checkbox, etc.)
 * applies this mixin.
 *
 * @example
 * ```ts
 * import { LitElement, html } from 'lit';
 * import { property } from 'lit/decorators.js';
 * import { FormAssociatedMixin } from '../internal/mixins/form-associated.js';
 *
 * class MyInput extends FormAssociatedMixin(LitElement) {
 *   @property() value = '';
 *
 *   render() {
 *     return html`<input .value=${this.value}
 *       @input=${(e: Event) => { this.value = (e.target as HTMLInputElement).value; }}>`;
 *   }
 * }
 * ```
 */

import { LitElement, type PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';

// ── Types ───────────────────────────────────────────────────────────────────

type Constructor<T = {}> = new (...args: any[]) => T;

export interface FormAssociatedHost {
  name: string;
  value: string;
  disabled: boolean;
  required: boolean;

  setFormValue(value: FormData | string | File | null, state?: FormData | string | File | null): void;
  setValidity(flags?: ValidityStateFlags, message?: string, anchor?: HTMLElement): void;
  reportValidity(): boolean;
  checkValidity(): boolean;
  readonly validity: ValidityState;
  readonly validationMessage: string;
}

// ── Mixin ───────────────────────────────────────────────────────────────────

export function FormAssociatedMixin<T extends Constructor<LitElement>>(superClass: T) {
  class FormAssociatedElement extends superClass {
    static formAssociated = true;

    /** @internal */
    protected readonly _internals: ElementInternals;

    private _defaultValue = '';

    // ── Reactive properties ───────────────────────────────────────────

    @property()
    name = '';

    @property()
    value = '';

    @property({ type: Boolean })
    disabled = false;

    @property({ type: Boolean })
    required = false;

    // ── Constructor ───────────────────────────────────────────────────

    constructor(...args: any[]) {
      super(...args);
      this._internals = this.attachInternals();
    }

    // ── Form value sync via Lit lifecycle ─────────────────────────────

    override willUpdate(changed: PropertyValues): void {
      super.willUpdate(changed);

      if (changed.has('value')) {
        this.setFormValue(this.value);
      }

      if (changed.has('disabled')) {
        this._internals.ariaDisabled = this.disabled ? 'true' : 'false';
      }

      if (changed.has('required')) {
        this._internals.ariaRequired = this.required ? 'true' : 'false';
      }
    }

    override connectedCallback(): void {
      super.connectedCallback();
      this._defaultValue = this.value;
    }

    // ── Public API (thin wrappers around ElementInternals) ────────────

    setFormValue(
      value: FormData | string | File | null,
      state?: FormData | string | File | null,
    ): void {
      this._internals.setFormValue(value, state);
    }

    setValidity(
      flags?: ValidityStateFlags,
      message?: string,
      anchor?: HTMLElement,
    ): void {
      if (flags && message) {
        this._internals.setValidity(flags, message, anchor);
      } else {
        this._internals.setValidity({});
      }
    }

    reportValidity(): boolean {
      return this._internals.reportValidity();
    }

    checkValidity(): boolean {
      return this._internals.checkValidity();
    }

    get validity(): ValidityState {
      return this._internals.validity;
    }

    get validationMessage(): string {
      return this._internals.validationMessage;
    }

    // ── Form lifecycle callbacks ──────────────────────────────────────

    formAssociatedCallback(_form: HTMLFormElement | null): void {}

    formResetCallback(): void {
      this.value = this._defaultValue;
    }

    formDisabledCallback(disabled: boolean): void {
      this.disabled = disabled;
    }

    /**
     * @param state  - Previously saved value or `FormData` entry.
     * @param _mode  - `'restore'` (bfcache) or `'autocomplete'`.
     */
    formStateRestoreCallback(
      state: string | File | FormData | null,
      _mode: 'restore' | 'autocomplete',
    ): void {
      if (typeof state === 'string') {
        this.value = state;
      }
    }
  }

  return FormAssociatedElement as Constructor<FormAssociatedHost> & T;
}
