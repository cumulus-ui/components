import { css, html, nothing, type PropertyValues, type TemplateResult } from 'lit';
import { property, state, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { createRef, ref, type Ref } from 'lit/directives/ref.js';
import { CsBaseElement } from '../internal/base-element.js';
import { computePosition, flip, offset, shift } from '@floating-ui/dom';
import { fireNonCancelableEvent } from '../internal/events.js';
import { componentStyles as buttonComponentStyles, sharedStyles as buttonSharedStyles } from '../button/styles.js';
import { componentStyles, sharedStyles } from './styles.js';
import { buttonDropdownItemElementStyles } from '../internal/styles/button-dropdown-item-element.js';
import type { ButtonDropdownProps } from './interfaces.js';
import '../icon/index.js';

const hostStyles = css`:host { display: inline-block; }`;

const dropdownStyles = css`
  .dropdown {
    position: fixed;
    z-index: 9999;
    background: var(--color-background-dropdown-item-default, #ffffff);
    border: var(--border-width-dropdown, 2px) solid var(--color-border-dropdown-container, #b4b4bb);
    border-radius: var(--border-radius-dropdown, 8px);
    box-shadow: var(--shadow-dropdown, 0px 4px 20px 1px rgba(0, 7, 22, 0.10));
    overflow: auto;
    max-block-size: 300px;
    min-inline-size: 176px;
  }
`;

function isActionItem(item: ButtonDropdownProps.ItemOrGroup): item is ButtonDropdownProps.Item {
  const typed = item as { itemType?: string; items?: unknown };
  return typed.itemType !== 'group' && typed.itemType !== 'checkbox' && !('items' in item && Array.isArray(typed.items));
}

export class CsButtonDropdownInternal extends CsBaseElement {
  static override styles = [
    buttonSharedStyles,
    buttonComponentStyles,
    sharedStyles,
    componentStyles,
    buttonDropdownItemElementStyles,
    dropdownStyles,
    hostStyles,
  ];

  @property({ attribute: false })
  items: ReadonlyArray<ButtonDropdownProps.ItemOrGroup> = [];

  @property({ type: String, reflect: true })
  variant: ButtonDropdownProps['variant'] = 'normal';

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: Boolean, reflect: true })
  loading = false;

  @property({ type: String })
  override ariaLabel: string | null = null;

  @state()
  private _open = false;

  @state()
  private _highlightedIndex = -1;

  private _triggerRef: Ref<HTMLElement> = createRef();

  @query('.dropdown')
  private _dropdownEl!: HTMLElement;

  private _cleanupOutsideClick: (() => void) | null = null;

  override connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('keydown', this._onKeyDown);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('keydown', this._onKeyDown);
    this._removeOutsideClickListener();
  }

  override updated(changed: PropertyValues): void {
    super.updated(changed);
    if (changed.has('_open')) {
      if (this._open) {
        this._updatePosition();
        this._addOutsideClickListener();
      } else {
        this._removeOutsideClickListener();
        this._highlightedIndex = -1;
      }
    }
  }

  focus(options?: FocusOptions): void {
    this._triggerRef.value?.focus(options);
  }

  private _flatItems(): ButtonDropdownProps.Item[] {
    return this.items.filter(isActionItem);
  }

  private _isInteractive(): boolean {
    return !this.disabled && !this.loading;
  }

  private _isIconVariant(): boolean {
    return this.variant === 'icon' || this.variant === 'inline-icon';
  }

  private _onTriggerClick = (): void => {
    if (!this._isInteractive()) return;
    this._open = !this._open;
  };

  private _onItemClick(item: ButtonDropdownProps.Item, e: Event): void {
    if (item.disabled) return;
    e.stopPropagation();

    if (item.href) {
      fireNonCancelableEvent(this, 'itemFollow', {
        id: item.id,
        href: item.href,
        external: item.external ?? false,
      });
    } else {
      fireNonCancelableEvent(this, 'itemClick', {
        id: item.id,
      });
    }

    this._open = false;
    this._triggerRef.value?.focus();
  }

  private _onKeyDown = (e: KeyboardEvent): void => {
    if (!this._open) {
      if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
        if (!this._isInteractive()) return;
        e.preventDefault();
        this._open = true;
        this._highlightedIndex = 0;
      }
      return;
    }

    const flatItems = this._flatItems();
    const count = flatItems.length;

    switch (e.key) {
      case 'Escape':
        e.stopPropagation();
        this._open = false;
        this._triggerRef.value?.focus();
        break;
      case 'ArrowDown':
        e.preventDefault();
        this._highlightedIndex = (this._highlightedIndex + 1) % count;
        break;
      case 'ArrowUp':
        e.preventDefault();
        this._highlightedIndex = (this._highlightedIndex - 1 + count) % count;
        break;
      case 'Enter':
      case ' ': {
        e.preventDefault();
        const item = flatItems[this._highlightedIndex];
        if (item) this._onItemClick(item, e);
        break;
      }
      case 'Tab':
        this._open = false;
        break;
    }
  };

  private async _updatePosition(): Promise<void> {
    await this.updateComplete;
    if (!this._triggerRef.value || !this._dropdownEl) return;

    const { x, y } = await computePosition(
      this._triggerRef.value,
      this._dropdownEl,
      {
        placement: 'bottom-start',
        strategy: 'fixed',
        middleware: [
          offset(4),
          flip({ padding: 8 }),
          shift({ padding: 8 }),
        ],
      }
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

  private _renderTrigger(): TemplateResult {
    const isIcon = this._isIconVariant();
    const isDisabled = this.disabled || this.loading;

    const buttonClasses = {
      'button': true,
      [`variant-${this.variant}`]: true,
      'disabled': isDisabled,
      'button-no-text': isIcon,
    };

    const ariaDisabled = isDisabled ? 'true' : undefined;
    const tabIndex = isDisabled ? -1 : 0;

    if (isIcon) {
      return html`
        <button
          ${ref(this._triggerRef)}
          class=${classMap(buttonClasses)}
          type="button"
          aria-haspopup="true"
          aria-expanded=${this._open}
          aria-label=${ifDefined(this.ariaLabel || 'Actions')}
          aria-disabled=${ifDefined(ariaDisabled)}
          tabindex=${tabIndex}
          @click=${this._onTriggerClick}
        >
          <span class="icon"><cs-icon name="ellipsis"></cs-icon></span>
        </button>
      `;
    }

    const caretClasses = {
      'rotate': true,
      'rotate-open': this._open,
    };

    return html`
      <button
        ${ref(this._triggerRef)}
        class=${classMap(buttonClasses)}
        type="button"
        aria-haspopup="true"
        aria-expanded=${this._open}
        aria-label=${ifDefined(this.ariaLabel || undefined)}
        aria-disabled=${ifDefined(ariaDisabled)}
        tabindex=${tabIndex}
        @click=${this._onTriggerClick}
      >
        ${this.loading
          ? html`<span class="icon icon-left"><cs-icon name="status-in-progress"></cs-icon></span>`
          : nothing
        }
        <slot></slot>
        <span class=${classMap(caretClasses)}>
          <cs-icon name="caret-down-filled"></cs-icon>
        </span>
      </button>
    `;
  }

  private _renderItems(): TemplateResult | typeof nothing {
    if (!this._open) return nothing;

    const flatItems = this._flatItems();

    return html`
      <div class="dropdown" role="menu">
        <ul class="items-list-container">
          ${flatItems.map((item, index) => {
            const highlighted = index === this._highlightedIndex;
            const itemClasses = {
              'button-dropdown-item-element--item-element': true,
              'button-dropdown-item-element--highlighted': highlighted,
              'button-dropdown-item-element--disabled': !!item.disabled,
            };
            const menuItemClasses = {
              'button-dropdown-item-element--menu-item': true,
            };

            return html`
              <li
                class=${classMap(itemClasses)}
                role="menuitem"
                aria-disabled=${item.disabled ? 'true' : 'false'}
                @click=${(e: Event) => this._onItemClick(item, e)}
                @mouseenter=${() => { this._highlightedIndex = index; }}
              >
                ${item.href
                  ? html`
                    <a
                      class=${classMap(menuItemClasses)}
                      href=${item.disabled ? 'javascript:void(0)' : item.href}
                      tabindex="-1"
                      @click=${(e: Event) => { if (item.disabled) e.preventDefault(); }}
                    >
                      ${item.iconName
                        ? html`<span class="button-dropdown-item-element--icon"><cs-icon name=${item.iconName}></cs-icon></span>`
                        : nothing
                      }
                      <span>${item.text}</span>
                    </a>
                  `
                  : html`
                    <span class=${classMap(menuItemClasses)} tabindex="-1">
                      ${item.iconName
                        ? html`<span class="button-dropdown-item-element--icon"><cs-icon name=${item.iconName}></cs-icon></span>`
                        : nothing
                      }
                      <span>${item.text}</span>
                    </span>
                  `
                }
              </li>
            `;
          })}
        </ul>
      </div>
    `;
  }

  override render(): TemplateResult {
    return html`
      <div class="button-dropdown">
        <div class="dropdown-trigger">
          ${this._renderTrigger()}
        </div>
        ${this._renderItems()}
      </div>
    `;
  }
}
