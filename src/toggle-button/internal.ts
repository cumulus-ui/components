import { css, html, type TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { CsBaseElement } from '../internal/base-element.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import { componentStyles as buttonComponentStyles, sharedStyles as buttonSharedStyles } from '../button/styles.js';
import { componentStyles, sharedStyles } from './styles.js';
import type { ToggleButtonProps } from './interfaces.js';
import '../icon/index.js';

const hostStyles = css`:host { display: inline-block; }`;

export class CsToggleButtonInternal extends CsBaseElement {
  static override styles = [buttonSharedStyles, buttonComponentStyles, sharedStyles, componentStyles, hostStyles];

  @property({ type: Boolean, reflect: true })
  pressed = false;

  @property({ type: String, reflect: true })
  variant: ToggleButtonProps.Variant = 'normal';

  @property({ type: String })
  iconName?: string;

  @property({ type: String })
  pressedIconName?: string;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: String })
  override ariaLabel: string | null = null;

  @property({ type: String })
  disabledReason = '';

  override connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('click', this._onHostClick);
    this.addEventListener('keydown', this._onKeyDown);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('click', this._onHostClick);
    this.removeEventListener('keydown', this._onKeyDown);
  }

  focus(options?: FocusOptions): void {
    const inner = this.shadowRoot?.querySelector<HTMLElement>('.button');
    inner?.focus(options);
  }

  private _onHostClick = (e: MouseEvent): void => {
    if (e instanceof CustomEvent) return;

    if (this.disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    this.pressed = !this.pressed;
    const detail: ToggleButtonProps.ChangeDetail = { pressed: this.pressed };
    fireNonCancelableEvent(this as unknown as HTMLElement, 'change', detail);
  };

  private _onKeyDown = (e: KeyboardEvent): void => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this.click();
    }
  };

  private _isIconVariant(): boolean {
    return this.variant === 'icon';
  }

  private _resolvedIconName(): string | undefined {
    if (this.pressed && this.pressedIconName) {
      return this.pressedIconName;
    }
    return this.iconName;
  }

  override render(): TemplateResult {
    const isDisabled = this.disabled;
    const hasDisabledReason = this.disabled && !!this.disabledReason;
    const icon = this._resolvedIconName();

    const buttonClasses = {
      'button': true,
      [`variant-${this.variant}`]: true,
      'pressed': this.pressed,
      'disabled': isDisabled,
      'disabled-with-reason': hasDisabledReason,
      'button-no-text': this._isIconVariant(),
    };

    const ariaDisabled = isDisabled ? 'true' : undefined;
    const tabIndex = isDisabled && !hasDisabledReason ? -1 : 0;

    return html`
      <button
        class=${classMap(buttonClasses)}
        type="button"
        aria-pressed=${this.pressed}
        aria-label=${ifDefined(this.ariaLabel || undefined)}
        aria-disabled=${ifDefined(ariaDisabled)}
        tabindex=${tabIndex}
      >
        ${icon ? html`<span class="icon"><cs-icon name=${icon}></cs-icon></span>` : ''}
        ${!this._isIconVariant() ? html`<slot></slot>` : ''}
      </button>
    `;
  }
}
