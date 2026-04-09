import { css, html, nothing, type TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { CsBaseElement } from '../internal/base-element.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import { componentStyles, sharedStyles } from './styles.js';
import type { TextFilterProps } from './interfaces.js';
import '../input/index.js';

const hostStyles = css`:host { display: block; }`;

export class CsTextFilterInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  @property({ type: String })
  filteringText = '';

  @property({ type: String })
  filteringPlaceholder = '';

  @property({ type: String })
  filteringAriaLabel = '';

  @property({ type: String })
  filteringClearAriaLabel = '';

  @property({ type: String })
  countText = '';

  @property({ type: Boolean })
  disabled = false;

  private _debounceTimer: ReturnType<typeof setTimeout> | null = null;

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this._clearDebounce();
  }

  focus(options?: FocusOptions): void {
    const input = this.shadowRoot?.querySelector<HTMLElement>('cs-input');
    if (input) {
      (input as HTMLElement & { focus(opts?: FocusOptions): void }).focus(options);
    }
  }

  private _clearDebounce(): void {
    if (this._debounceTimer !== null) {
      clearTimeout(this._debounceTimer);
      this._debounceTimer = null;
    }
  }

  private _onInputChange = (e: Event): void => {
    e.stopPropagation();
    const detail = (e as CustomEvent<{ value: string }>).detail;
    this.filteringText = detail.value;

    const changeDetail: TextFilterProps.ChangeDetail = { filteringText: this.filteringText };
    fireNonCancelableEvent(this, 'change', changeDetail);

    this._clearDebounce();
    this._debounceTimer = setTimeout(() => {
      const delayedDetail: TextFilterProps.ChangeDetail = { filteringText: this.filteringText };
      fireNonCancelableEvent(this, 'delayedChange', delayedDetail);
    }, 400);
  };

  override render(): TemplateResult {
    const showResults = this.filteringText.length > 0 && !!this.countText;

    return html`
      <div class="root">
        <div class="input">
          <cs-input
            type="search"
            .value=${this.filteringText}
            placeholder=${this.filteringPlaceholder}
            ?disabled=${this.disabled}
            aria-label=${this.filteringAriaLabel || 'Filter'}
            clear-aria-label=${this.filteringClearAriaLabel || 'Clear filter'}
            @change=${this._onInputChange}
          ></cs-input>
        </div>
        ${showResults ? html`<span class="results">${this.countText}</span>` : nothing}
      </div>
    `;
  }
}
