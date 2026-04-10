import { css, html, nothing, type TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { CsBaseElement } from '../internal/base-element.js';
import { FormAssociatedMixin } from '../internal/mixins/form-associated.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import { componentStyles, sharedStyles } from './styles.js';
import type { ButtonProps } from './interfaces.js';
import '../icon/index.js';

const Base = FormAssociatedMixin(CsBaseElement);

const hostStyles = css`:host { display: inline-block; }`;

export class CsButtonInternal extends Base {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  @property({ type: String })
  variant: ButtonProps.Variant = 'normal';

  @property({ type: Boolean })
  loading = false;

  @property({ type: String, attribute: 'loading-text' })
  loadingText = '';

  @property({ type: String, attribute: 'icon-name' })
  iconName?: string;

  @property({ type: String, attribute: 'icon-url' })
  iconUrl?: string;

  @property({ type: String, attribute: 'icon-align' })
  iconAlign: ButtonProps.IconAlign = 'left';

  @property({ type: String, attribute: 'form-action' })
  formAction: ButtonProps.FormAction = 'submit';

  @property({ type: String })
  href?: string;

  @property({ type: String })
  target?: string;

  @property({ type: String })
  rel?: string;

  @property()
  download?: boolean | string;

  @property({ type: String, attribute: 'aria-label' })
  override ariaLabel: string | null = null;

  @property({ type: String, attribute: 'aria-expanded' })
  override ariaExpanded: string | null = null;

  @property({ type: String, attribute: 'aria-controls' })
  ariaControls: string | null = null;

  @property({ type: String, attribute: 'aria-describedby' })
  ariaDescribedby: string | null = null;

  @property({ type: String, attribute: 'disabled-reason' })
  disabledReason = '';

  @property({ type: Boolean, attribute: 'wrap-text' })
  wrapText = true;

  @property({ type: Boolean })
  external = false;

  @property({ type: Boolean, attribute: 'full-width' })
  fullWidth = false;

  @property({ type: String })
  form?: string;

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

  private _isInteractive(): boolean {
    return !this.disabled && !this.loading;
  }

  private _onHostClick = (e: MouseEvent): void => {
    if (e instanceof CustomEvent) return;

    if (!this._isInteractive()) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    e.stopPropagation();

    if (this.href) {
      const isModified = e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey;
      if (!isModified) {
        const detail: ButtonProps.FollowDetail = {
          href: this.href,
          external: this.external,
          target: this._resolvedTarget(),
        };
        fireNonCancelableEvent(this, 'follow', detail);
      }
    } else {
      const detail: ButtonProps.ClickDetail = {
        altKey: e.altKey,
        button: e.button,
        ctrlKey: e.ctrlKey,
        metaKey: e.metaKey,
        shiftKey: e.shiftKey,
      };
      fireNonCancelableEvent(this, 'click', detail);

      if (this.formAction === 'submit') {
        this._submitForm();
      }
    }
  };

  private _onKeyDown = (e: KeyboardEvent): void => {
    if (e.key === 'Enter' || e.key === ' ') {
      if (this.href && e.key === 'Enter') return;

      if (!this.href || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    }
  };

  private _submitForm(): void {
    const formEl = this.form
      ? document.getElementById(this.form) as HTMLFormElement | null
      : this.closest('form');

    if (formEl) {
      const submitter = document.createElement('button');
      submitter.type = 'submit';
      submitter.hidden = true;
      formEl.appendChild(submitter);
      submitter.click();
      submitter.remove();
    }
  }

  private _resolvedTarget(): string | undefined {
    if (this.target) return this.target;
    if (this.external) return '_blank';
    return undefined;
  }

  private _resolvedRel(): string | undefined {
    if (this.rel) return this.rel;
    const target = this._resolvedTarget();
    if (target === '_blank') return 'noopener noreferrer';
    return undefined;
  }

  private _isIconVariant(): boolean {
    return this.variant === 'icon' || this.variant === 'inline-icon';
  }

  private _renderIcon(position: 'left' | 'right'): TemplateResult | typeof nothing {
    if (this.loading && position === 'left') {
      return html`<span class="icon icon-${position}"><cs-icon name="status-in-progress"></cs-icon></span>`;
    }
    if (this.iconName && this.iconAlign === position) {
      return html`<span class="icon icon-${position}"><cs-icon name=${this.iconName}></cs-icon></span>`;
    }
    if (this.iconUrl && this.iconAlign === position) {
      return html`<span class="icon icon-${position}"><cs-icon url=${this.iconUrl}></cs-icon></span>`;
    }
    return nothing;
  }

  private _renderExternalIcon(): TemplateResult | typeof nothing {
    if (!this.external || !this.href) return nothing;
    return html`<span class="icon icon-right"><cs-icon name="external"></cs-icon></span>`;
  }

  override render(): TemplateResult {
    const isLink = !!this.href;
    const isDisabled = this.disabled || this.loading;
    const hasDisabledReason = this.disabled && !!this.disabledReason;

    const buttonClasses = {
      'button': true,
      [`variant-${this.variant}`]: true,
      'disabled': isDisabled,
      'disabled-with-reason': hasDisabledReason,
      'button-no-text': this._isIconVariant(),
      'button-no-wrap': !this.wrapText,
      'full-width': this.fullWidth,
      'link': isLink,
    };

    const ariaDisabled = isDisabled ? 'true' : undefined;
    const tabIndex = isDisabled && !hasDisabledReason ? -1 : 0;

    if (isLink) {
      return html`
        <a
          class=${classMap(buttonClasses)}
          href=${ifDefined(isDisabled ? undefined : this.href)}
          target=${ifDefined(this._resolvedTarget())}
          rel=${ifDefined(this._resolvedRel())}
          download=${ifDefined(
            this.download === true ? '' : this.download === false ? undefined : this.download
          )}
          aria-label=${ifDefined(this.ariaLabel || undefined)}
          aria-expanded=${ifDefined(this.ariaExpanded || undefined)}
          aria-controls=${ifDefined(this.ariaControls || undefined)}
          aria-describedby=${ifDefined(this.ariaDescribedby || undefined)}
          aria-disabled=${ifDefined(ariaDisabled)}
          tabindex=${tabIndex}
          role="button"
        >
          ${this._renderIcon('left')}
          <span class="content"><slot></slot></span>
          ${this._renderIcon('right')}
          ${this._renderExternalIcon()}
        </a>
      `;
    }

    return html`
      <button
        class=${classMap(buttonClasses)}
        type="button"
        ?disabled=${false}
        aria-label=${ifDefined(this.ariaLabel || undefined)}
        aria-expanded=${ifDefined(this.ariaExpanded || undefined)}
        aria-controls=${ifDefined(this.ariaControls || undefined)}
        aria-describedby=${ifDefined(this.ariaDescribedby || undefined)}
        aria-disabled=${ifDefined(ariaDisabled)}
        tabindex=${tabIndex}
        form=${ifDefined(this.form)}
      >
        ${this._renderIcon('left')}
        <span class="content">${this.loading && this.loadingText
          ? html`<span>${this.loadingText}</span>`
          : html`<slot></slot>`
        }</span>
        ${this._renderIcon('right')}
      </button>
    `;
  }
}
