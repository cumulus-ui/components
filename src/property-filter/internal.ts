import { css, html, nothing, type TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { createRef, ref, type Ref } from 'lit/directives/ref.js';
import { CsBaseElement } from '../internal/base-element.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import { componentStyles, sharedStyles } from './styles.js';
import { tokenStyles } from '../token/styles.js';
import '../icon/index.js';

const hostStyles = css`:host { display: block; }`;

const filterInputStyles = css`
  .filter-input {
    flex: 1;
    min-inline-size: 120px;
    padding-block: var(--space-scaled-xxs, 4px);
    padding-inline: var(--space-field-horizontal, 12px);
    font-size: var(--font-size-body-m, 14px);
    line-height: var(--line-height-body-m, 20px);
    font-family: inherit;
    border: var(--border-width-field, 1px) solid var(--color-border-input-default, #8c8c94);
    border-radius: var(--border-radius-input, 8px);
    background: var(--color-background-input-default, #ffffff);
    color: var(--color-text-body-default, #0f141a);
    outline: none;
    box-sizing: border-box;
  }
  .filter-input:focus {
    border-color: var(--color-border-input-focused, #006ce0);
    box-shadow: 0 0 0 1px var(--color-border-input-focused, #006ce0);
  }
  .filter-input:disabled {
    background: var(--color-background-input-disabled, #ebebf0);
    border-color: var(--color-border-input-disabled, #ebebf0);
    color: var(--color-text-input-disabled, #b4b4bb);
    cursor: default;
  }
  .token-list {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-xs, 8px);
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .token-item {
    display: inline-flex;
    max-inline-size: 100%;
  }
  .operation-label {
    display: inline-flex;
    align-items: center;
    font-size: var(--font-size-body-s, 12px);
    line-height: var(--line-height-body-s, 16px);
    color: var(--color-text-form-secondary, #656871);
    font-weight: bold;
    text-transform: uppercase;
    padding-inline: var(--space-xxs, 4px);
  }
`;

/** Simplified token for v1 property filter */
export interface SimpleToken {
  propertyKey?: string;
  operator?: string;
  value: string;
}

/** Simplified query for v1 property filter */
export interface SimpleQuery {
  tokens: SimpleToken[];
  operation: 'and' | 'or';
}

export class CsPropertyFilterInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, tokenStyles, filterInputStyles, hostStyles];

  @property({ attribute: false })
  query: SimpleQuery = { tokens: [], operation: 'and' };

  @property({ attribute: false })
  filteringProperties: ReadonlyArray<{ key: string; propertyLabel: string; operators?: string[]; groupValuesLabel?: string }> = [];

  @property({ attribute: false })
  filteringOptions: ReadonlyArray<{ propertyKey: string; value: string; label?: string }> = [];

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: String })
  filteringPlaceholder = 'Filter by text';

  @property({ type: String })
  countText?: string;

  @property({ type: String })
  filteringConstraintText = '';

  @state()
  private _inputValue = '';

  private _hasCustomControl = false;

  private _onCustomControlSlotChange = (e: Event): void => {
    const slot = e.target as HTMLSlotElement;
    this._hasCustomControl = slot.assignedNodes({ flatten: true }).length > 0;
    this.requestUpdate();
  };

  private _inputRef: Ref<HTMLInputElement> = createRef();

  focus(options?: FocusOptions): void {
    this._inputRef.value?.focus(options);
  }

  private _onInput(e: Event): void {
    this._inputValue = (e.target as HTMLInputElement).value;
  }

  private _onKeyDown(e: KeyboardEvent): void {
    if (e.key === 'Enter' && this._inputValue.trim()) {
      e.preventDefault();
      const newToken: SimpleToken = { value: this._inputValue.trim() };
      const newQuery: SimpleQuery = {
        tokens: [...this.query.tokens, newToken],
        operation: this.query.operation,
      };
      this._inputValue = '';
      fireNonCancelableEvent(this, 'change', { query: newQuery });
    }
  }

  private _onDismiss(index: number): void {
    const newTokens = this.query.tokens.filter((_, i) => i !== index);
    const newQuery: SimpleQuery = {
      tokens: newTokens,
      operation: this.query.operation,
    };
    fireNonCancelableEvent(this, 'change', { query: newQuery });
  }

  private _renderToken(token: SimpleToken, index: number): TemplateResult {
    const label = token.propertyKey
      ? `${token.propertyKey} ${token.operator || '='} ${token.value}`
      : token.value;

    return html`
      <li class="token-item">
        <div class="token-box" role="group" aria-label=${label}>
          <span class="token-normal">
            <div class="token-trigger">${label}</div>
          </span>
          <button
            class="dismiss-button"
            type="button"
            aria-label="Remove filter ${label}"
            @click=${() => this._onDismiss(index)}
          >
            <cs-icon name="close" size="small"></cs-icon>
          </button>
        </div>
      </li>
    `;
  }

  override render(): TemplateResult {
    const hasTokens = this.query.tokens.length > 0;
    const operationLabel = this.query.operation === 'and' ? 'and' : 'or';

    return html`
      <div class="root">
        <div class="search-field">
          ${this._hasCustomControl
            ? html`<div class="custom-control"><slot name="custom-control" @slotchange=${this._onCustomControlSlotChange}></slot></div>`
            : html`<slot name="custom-control" @slotchange=${this._onCustomControlSlotChange} style="display:none"></slot>`}
          <div class="input-wrapper">
            <input
              ${ref(this._inputRef)}
              class="filter-input"
              type="text"
              .value=${this._inputValue}
              placeholder=${this.filteringPlaceholder}
              ?disabled=${this.disabled}
              aria-label=${this.filteringPlaceholder}
              @input=${this._onInput}
              @keydown=${this._onKeyDown}
            />
          </div>
        </div>

        ${this.filteringConstraintText ? html`
          <div class="filtering-constraint-text">${this.filteringConstraintText}</div>
        ` : nothing}

        ${hasTokens ? html`
          <div class="tokens">
            <ul class="token-list" role="list">
              ${this.query.tokens.map((token, i) => html`
                ${i > 0 ? html`<li class="operation-label" aria-hidden="true">${operationLabel}</li>` : nothing}
                ${this._renderToken(token, i)}
              `)}
            </ul>
          </div>
        ` : nothing}

        ${this.countText && hasTokens ? html`
          <div class="results">${this.countText}</div>
        ` : nothing}
      </div>
    `;
  }
}
