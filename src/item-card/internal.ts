import { css, html, type TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { CsBaseElement } from '../internal/base-element.js';
import { componentStyles, sharedStyles } from './styles.js';
import type { ItemCardProps } from './interfaces.js';

const hostStyles = css`:host { display: block; }`;

export class CsItemCardInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  @property({ type: String })
  variant: ItemCardProps.Variant = 'default';

  @property({ type: Boolean, attribute: 'disable-header-paddings' })
  disableHeaderPaddings = false;

  @property({ type: Boolean, attribute: 'disable-content-paddings' })
  disableContentPaddings = false;

  @property({ type: Boolean, attribute: 'disable-footer-paddings' })
  disableFooterPaddings = false;

  @property({ attribute: false })
  style_?: ItemCardProps.Style;

  /* Internal-only props (set programmatically, not via attributes) */
  @property({ type: Boolean })
  highlighted = false;

  @property({ type: Boolean, attribute: 'full-height' })
  fullHeight = false;

  @property({ attribute: false })
  metadataAttributes?: Record<string, string | undefined>;

  private _hasHeader = false;
  private _hasFooter = false;
  private _hasActions = false;
  private _hasDescription = false;
  private _hasIcon = false;

  private _onHeaderSlotChange = (e: Event): void => {
    const slot = e.target as HTMLSlotElement;
    this._hasHeader = slot.assignedNodes({ flatten: true }).length > 0;
    this.requestUpdate();
  };

  private _onFooterSlotChange = (e: Event): void => {
    const slot = e.target as HTMLSlotElement;
    this._hasFooter = slot.assignedNodes({ flatten: true }).length > 0;
    this.requestUpdate();
  };

  private _onActionsSlotChange = (e: Event): void => {
    const slot = e.target as HTMLSlotElement;
    this._hasActions = slot.assignedNodes({ flatten: true }).length > 0;
    this.requestUpdate();
  };

  private _onDescriptionSlotChange = (e: Event): void => {
    const slot = e.target as HTMLSlotElement;
    this._hasDescription = slot.assignedNodes({ flatten: true }).length > 0;
    this.requestUpdate();
  };

  private _onIconSlotChange = (e: Event): void => {
    const slot = e.target as HTMLSlotElement;
    this._hasIcon = slot.assignedNodes({ flatten: true }).length > 0;
    this.requestUpdate();
  };

  private _buildRootStyleOverrides(): Record<string, string> {
    const s = this.style_;
    const overrides: Record<string, string> = {};
    if (s?.root?.background) overrides['--awsui-style-item-card-background-default'] = s.root.background;
    if (s?.root?.borderColor) overrides['--awsui-style-item-card-border-color-default'] = s.root.borderColor;
    if (s?.root?.borderRadius) overrides['--awsui-style-item-card-border-radius'] = s.root.borderRadius;
    if (s?.root?.borderWidth) overrides['--awsui-style-item-card-border-width-default'] = s.root.borderWidth;
    if (s?.root?.boxShadow) overrides['--awsui-style-item-card-box-shadow-default'] = s.root.boxShadow;
    return overrides;
  }

  override render(): TemplateResult {
    const rootClasses = {
      'root': true,
      'refresh': true,
      [`variant-${this.variant}`]: true,
      'highlighted': this.highlighted,
      'full-height': this.fullHeight,
    };

    const headerClasses = {
      'header': true,
      'no-padding': this.disableHeaderPaddings,
      'with-actions': this._hasActions,
    };

    const bodyClasses = {
      'body': true,
      'no-padding': this.disableContentPaddings,
    };

    const footerClasses = {
      'footer': true,
      'no-padding': this.disableFooterPaddings,
    };

    const rootStyleOverrides = this._buildRootStyleOverrides();

    return html`
      <div class=${classMap(rootClasses)} style=${styleMap(rootStyleOverrides)}>
        <div class="inner-card">
          ${this._hasHeader || this._hasActions || this._hasDescription || this._hasIcon
            ? html`
              <div class=${classMap(headerClasses)}>
                ${this._hasIcon
                  ? html`<div class="icon"><slot name="icon" @slotchange=${this._onIconSlotChange}></slot></div>`
                  : html`<slot name="icon" @slotchange=${this._onIconSlotChange} style="display:none"></slot>`}
                <div class="header-inner">
                  <slot name="header" @slotchange=${this._onHeaderSlotChange}></slot>
                </div>
                ${this._hasDescription
                  ? html`<div class="description"><slot name="description" @slotchange=${this._onDescriptionSlotChange}></slot></div>`
                  : html`<slot name="description" @slotchange=${this._onDescriptionSlotChange} style="display:none"></slot>`}
                ${this._hasActions
                  ? html`<div class="actions"><slot name="actions" @slotchange=${this._onActionsSlotChange}></slot></div>`
                  : html`<slot name="actions" @slotchange=${this._onActionsSlotChange} style="display:none"></slot>`}
              </div>
            `
            : html`
              <slot name="icon" @slotchange=${this._onIconSlotChange} style="display:none"></slot>
              <slot name="header" @slotchange=${this._onHeaderSlotChange} style="display:none"></slot>
              <slot name="description" @slotchange=${this._onDescriptionSlotChange} style="display:none"></slot>
              <slot name="actions" @slotchange=${this._onActionsSlotChange} style="display:none"></slot>
            `}
          <div class=${classMap(bodyClasses)}>
            <slot></slot>
          </div>
          ${this._hasFooter
            ? html`<div class=${classMap(footerClasses)}><slot name="footer" @slotchange=${this._onFooterSlotChange}></slot></div>`
            : html`<slot name="footer" @slotchange=${this._onFooterSlotChange} style="display:none"></slot>`}
        </div>
      </div>
    `;
  }
}
