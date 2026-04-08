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
    padding-block: var(--space-scaled-xxs-pfm1nx, 4px);
    padding-inline: var(--space-field-horizontal-0aq2ch, 12px);
    font-size: var(--font-size-body-m-a7nh2n, 14px);
    line-height: var(--line-height-body-m-2mh3ke, 20px);
    font-family: inherit;
    border: var(--border-width-field-2xc78x, 1px) solid var(--color-border-input-default-t4n2s0, #8c8c94);
    border-radius: var(--border-radius-input-0z3fnq, 8px);
    background: var(--color-background-input-default-m6twru, #ffffff);
    color: var(--color-text-body-default-vvtq8u, #0f141a);
    outline: none;
    box-sizing: border-box;
  }
  .filter-input:focus {
    border-color: var(--color-border-input-focused-0mhils, #006ce0);
    box-shadow: 0 0 0 1px var(--color-border-input-focused-0mhils, #006ce0);
  }
  .filter-input:disabled {
    background: var(--color-background-input-disabled-kxocba, #ebebf0);
    border-color: var(--color-border-input-disabled-zgnzvk, #ebebf0);
    color: var(--color-text-input-disabled-tvmsyk, #b4b4bb);
    cursor: default;
  }
  .token-list {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-xs-ymlm0b, 8px);
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
    font-size: var(--font-size-body-s-smc8cv, 12px);
    line-height: var(--line-height-body-s-nu5hx1, 16px);
    color: var(--color-text-form-secondary-1nm780, #656871);
    font-weight: bold;
    text-transform: uppercase;
    padding-inline: var(--space-xxs-hwfkai, 4px);
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

  @state()
  private _inputValue = '';

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
      fireNonCancelableEvent(this as unknown as HTMLElement, 'change', { query: newQuery });
    }
  }

  private _onDismiss(index: number): void {
    const newTokens = this.query.tokens.filter((_, i) => i !== index);
    const newQuery: SimpleQuery = {
      tokens: newTokens,
      operation: this.query.operation,
    };
    fireNonCancelableEvent(this as unknown as HTMLElement, 'change', { query: newQuery });
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
