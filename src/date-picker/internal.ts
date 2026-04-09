import { css, html, nothing, type PropertyValues, type TemplateResult } from 'lit';
import { property, state, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { consume } from '@lit/context';
import { CsBaseElement } from '../internal/base-element.js';
import { FormAssociatedMixin } from '../internal/mixins/form-associated.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import {
  formFieldContext,
  defaultFormFieldContext,
  type FormFieldContext,
} from '../internal/context/form-field-context.js';
import { computePosition, flip, offset, shift } from '@floating-ui/dom';
import { componentStyles, sharedStyles } from './styles.js';
import type { DatePickerProps } from './interfaces.js';
import type { CalendarProps } from '../calendar/interfaces.js';
import '../date-input/index.js';
import '../calendar/index.js';
import '../button/index.js';
import '../icon/index.js';

const Base = FormAssociatedMixin(CsBaseElement);

const hostStyles = css`:host { display: block; }`;

const dropdownStyles = css`
.dropdown {
  position: fixed;
  z-index: 1000;
  background: var(--color-background-dropdown-item-default, #ffffff);
  border: 1px solid var(--color-border-dropdown, #8c8c94);
  border-radius: var(--border-radius-dropdown, 8px);
  box-shadow: var(--shadow-dropdown, 0px 4px 20px 1px rgba(0, 7, 22, 0.1));
  padding: 0;
}
`;

export class CsDatePickerInternal extends Base {
  static override styles = [sharedStyles, componentStyles, dropdownStyles, hostStyles];

  @consume({ context: formFieldContext, subscribe: true })
  private _formFieldCtx: FormFieldContext = defaultFormFieldContext;

  @property({ type: String })
  override value = '';

  @property({ type: String })
  placeholder = 'YYYY/MM/DD';

  @property({ type: String })
  locale = 'en-US';

  @property({ type: Number })
  startOfWeek = 0;

  @property({ type: String })
  granularity = 'day';

  @property({ attribute: false })
  isDateEnabled?: CalendarProps.IsDateEnabledFunction;

  @property({ attribute: false })
  openCalendarAriaLabel?: DatePickerProps.OpenCalendarAriaLabel;

  @property({ type: Boolean, reflect: true })
  readOnly = false;

  @property({ type: Boolean, reflect: true })
  invalid = false;

  @property({ type: Boolean, reflect: true })
  warning = false;

  @property({ type: Boolean })
  autoFocus = false;

  @property({ type: String })
  override ariaLabel: string | null = null;

  @property({ type: Boolean })
  override ariaRequired: string | null = null;

  @property({ attribute: false })
  i18nStrings?: DatePickerProps.I18nStrings;

  @state()
  private _open = false;

  @query('.date-picker-trigger')
  private _triggerEl!: HTMLElement;

  @query('.dropdown')
  private _dropdownEl!: HTMLElement;

  private _cleanupOutsideClick: (() => void) | null = null;

  override connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('keydown', this._onHostKeyDown);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('keydown', this._onHostKeyDown);
    this._removeOutsideClickListener();
  }

  override updated(changed: PropertyValues): void {
    super.updated(changed);
    if (changed.has('_open')) {
      if (this._open) {
        this._updateDropdownPosition();
        this._addOutsideClickListener();
      } else {
        this._removeOutsideClickListener();
      }
    }
  }

  focus(options?: FocusOptions): void {
    const dateInput = this.shadowRoot?.querySelector('cs-date-input') as
      | (HTMLElement & { focus(opts?: FocusOptions): void })
      | null;
    dateInput?.focus(options);
  }

  private get _isInvalid(): boolean {
    return this.invalid || this._formFieldCtx.invalid;
  }

  private get _isWarning(): boolean {
    return (this.warning || this._formFieldCtx.warning) && !this._isInvalid;
  }

  private _onInputChange = (e: CustomEvent<{ value: string }>): void => {
    e.stopPropagation();
    this.value = e.detail.value;
    fireNonCancelableEvent<DatePickerProps.ChangeDetail>(
      this,
      'change',
      { value: this.value },
    );
  };

  private _onCalendarChange = (e: CustomEvent<{ value: string }>): void => {
    e.stopPropagation();
    this.value = e.detail.value;
    this._open = false;
    fireNonCancelableEvent<DatePickerProps.ChangeDetail>(
      this,
      'change',
      { value: this.value },
    );
    this.focus();
  };

  private _onToggleClick = (e: Event): void => {
    if (!(e instanceof CustomEvent)) return;
    this._onToggleCalendar();
  };

  private _onToggleCalendar = (): void => {
    if (this.disabled || this.readOnly) return;
    this._open = !this._open;
  };

  private _onHostKeyDown = (e: KeyboardEvent): void => {
    if (e.key === 'Escape' && this._open) {
      e.stopPropagation();
      this._open = false;
      this.focus();
    }
  };

  private async _updateDropdownPosition(): Promise<void> {
    await this.updateComplete;
    if (!this._triggerEl || !this._dropdownEl) return;

    const { x, y } = await computePosition(
      this._triggerEl,
      this._dropdownEl,
      {
        placement: 'bottom-start',
        strategy: 'fixed',
        middleware: [offset(4), flip({ padding: 8 }), shift({ padding: 8 })],
      },
    );

    Object.assign(this._dropdownEl.style, {
      left: `${x}px`,
      top: `${y}px`,
    });
  }

  private _addOutsideClickListener(): void {
    this._removeOutsideClickListener();

    const handler = (e: MouseEvent) => {
      const path = e.composedPath();
      if (!path.includes(this)) {
        this._open = false;
      }
    };

    requestAnimationFrame(() => {
      document.addEventListener('click', handler, true);
      this._cleanupOutsideClick = () => {
        document.removeEventListener('click', handler, true);
      };
    });
  }

  private _removeOutsideClickListener(): void {
    this._cleanupOutsideClick?.();
    this._cleanupOutsideClick = null;
  }

  private _getOpenCalendarLabel(): string {
    if (this.i18nStrings?.openCalendarAriaLabel) {
      return this.i18nStrings.openCalendarAriaLabel(this.value || null);
    }
    if (this.openCalendarAriaLabel) {
      return this.openCalendarAriaLabel(this.value || null);
    }
    return 'Open calendar';
  }

  override render(): TemplateResult {
    return html`
      <div class="root">
        <div class="date-picker-container">
          <div class="date-picker-trigger">
            <div class="date-picker-input">
              <cs-date-input
                .value=${this.value}
                placeholder=${this.placeholder}
                ?disabled=${this.disabled}
                ?read-only=${this.readOnly}
                ?invalid=${this._isInvalid}
                ?warning=${this._isWarning}
                aria-label=${ifDefined(this.ariaLabel || undefined)}
                aria-required=${ifDefined(this.ariaRequired || undefined)}
                @change=${this._onInputChange}
              ></cs-date-input>
            </div>
            <cs-button
              variant="icon"
              icon-name="calendar"
              ?disabled=${this.disabled || this.readOnly}
              aria-label=${this._getOpenCalendarLabel()}
              aria-expanded=${this._open ? 'true' : 'false'}
              @click=${this._onToggleClick}
            ></cs-button>
          </div>
          ${this._open
            ? html`
                <div class="dropdown">
                  <div class="calendar" tabindex="-1">
                    <cs-calendar
                      .value=${this.value}
                      locale=${this.locale}
                      start-of-week=${this.startOfWeek}
                      .isDateEnabled=${this.isDateEnabled}
                      .i18nStrings=${this.i18nStrings}
                      aria-label=${ifDefined(this.ariaLabel || undefined)}
                      @change=${this._onCalendarChange}
                    ></cs-calendar>
                  </div>
                </div>
              `
            : nothing}
        </div>
      </div>
    `;
  }
}
