import { css, html, type TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { CsBaseElement } from '../internal/base-element.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import { componentStyles, sharedStyles } from './styles.js';
import type { ButtonGroupProps } from './interfaces.js';
import '../button/index.js';
import '../toggle-button/index.js';
import '../icon/index.js';

const hostStyles = css`:host { display: inline-flex; }`;

function isIconButton(item: ButtonGroupProps.Item): item is ButtonGroupProps.IconButton {
  return item.type === 'icon-button';
}

function isToggleButton(item: ButtonGroupProps.Item): item is ButtonGroupProps.IconToggleButton {
  return item.type === 'icon-toggle-button';
}

function isGroup(itemOrGroup: ButtonGroupProps.ItemOrGroup): itemOrGroup is ButtonGroupProps.Group {
  return itemOrGroup.type === 'group';
}

export class CsButtonGroupInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  @property({ attribute: false })
  items: ReadonlyArray<ButtonGroupProps.ItemOrGroup> = [];

  @property({ type: String, reflect: true })
  variant: ButtonGroupProps.Variant = 'icon';

  @property({ type: String })
  override ariaLabel: string | null = null;

  private _onIconButtonClick(item: ButtonGroupProps.IconButton): void {
    if (item.disabled || item.loading) return;
    fireNonCancelableEvent(this, 'itemClick', {
      id: item.id,
    });
  }

  private _onToggleButtonChange(item: ButtonGroupProps.IconToggleButton): void {
    if (item.disabled || item.loading) return;
    fireNonCancelableEvent(this, 'itemClick', {
      id: item.id,
      pressed: !item.pressed,
    });
  }

  focusItem(itemId: string): void {
    const el = this.shadowRoot?.querySelector<HTMLElement>(`[data-item-id="${itemId}"]`);
    el?.focus();
  }

  focus(options?: FocusOptions): void {
    const first = this.shadowRoot?.querySelector<HTMLElement>('cs-button, cs-toggle-button');
    first?.focus(options);
  }

  private _renderItem(item: ButtonGroupProps.Item): TemplateResult {
    if (isToggleButton(item)) {
      return html`
        <div class="item-wrapper">
          <cs-toggle-button
            variant="icon"
            data-item-id=${item.id}
            ?pressed=${item.pressed}
            ?disabled=${!!item.disabled}
            icon-name=${ifDefined(item.iconName)}
            pressed-icon-name=${ifDefined(item.pressedIconName)}
            aria-label=${ifDefined(item.text)}
            @change=${() => this._onToggleButtonChange(item)}
          ></cs-toggle-button>
        </div>
      `;
    }

    if (isIconButton(item)) {
      return html`
        <div class="item-wrapper">
          <cs-button
            variant="icon"
            data-item-id=${item.id}
            ?disabled=${!!item.disabled}
            ?loading=${!!item.loading}
            icon-name=${ifDefined(item.iconName)}
            aria-label=${ifDefined(item.text)}
            @click=${(e: Event) => {
              if (e instanceof CustomEvent) {
                this._onIconButtonClick(item);
              }
            }}
          ></cs-button>
        </div>
      `;
    }

    return html``;
  }

  private _renderGroupItems(items: ReadonlyArray<ButtonGroupProps.Item>): TemplateResult[] {
    return items
      .filter((item): item is ButtonGroupProps.IconButton | ButtonGroupProps.IconToggleButton =>
        isIconButton(item) || isToggleButton(item)
      )
      .map(item => this._renderItem(item));
  }

  override render(): TemplateResult {
    return html`
      <div
        class="root"
        role="toolbar"
        aria-label=${ifDefined(this.ariaLabel || undefined)}
      >
        ${this.items.map((itemOrGroup, groupIndex) => {
          if (isGroup(itemOrGroup)) {
            return html`
              ${groupIndex > 0 ? html`<div class="divider" role="separator"></div>` : ''}
              <div class="group" role="group" aria-label=${ifDefined(itemOrGroup.text)}>
                ${this._renderGroupItems(itemOrGroup.items)}
              </div>
            `;
          }

          const item = itemOrGroup as ButtonGroupProps.Item;
          if (isIconButton(item) || isToggleButton(item)) {
            return this._renderItem(item);
          }
          return html``;
        })}
      </div>
    `;
  }
}
