import { css, html, type TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { provide } from '@lit/context';
import { CsBaseElement } from '../internal/base-element.js';
import { containerContext, type ContainerContext } from '../internal/context/container-context.js';
import { componentStyles, sharedStyles } from './styles.js';

const hostStyles = css`:host { display: block; }`;

export class CsContainerInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  @property({ type: String })
  variant: 'default' | 'stacked' = 'default';

  @property({ type: Boolean })
  fitHeight = false;

  @property({ type: Boolean })
  disableContentPaddings = false;

  @property({ type: Boolean })
  disableHeaderPaddings = false;

  @provide({ context: containerContext })
  _containerContext: ContainerContext = { variant: 'default' };

  override willUpdate(): void {
    this._containerContext = { variant: this.variant };
  }

  private _hasHeader = false;
  private _hasFooter = false;
  private _hasMedia = false;

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

  private _onMediaSlotChange = (e: Event): void => {
    const slot = e.target as HTMLSlotElement;
    this._hasMedia = slot.assignedNodes({ flatten: true }).length > 0;
    this.requestUpdate();
  };

  override render(): TemplateResult {
    const rootClasses = {
      'root': true,
      'refresh': true,
      [`variant-${this.variant}`]: true,
      'fit-height': this.fitHeight,
      'with-side-media': false,
      'with-top-media': this._hasMedia,
    };

    const headerClasses = {
      'header': true,
      'with-paddings': !this.disableHeaderPaddings,
      'header-with-media': this._hasMedia,
    };

    const contentInnerClasses = {
      'content-inner': true,
      'with-paddings': !this.disableContentPaddings,
      'with-header': this._hasHeader,
    };

    const contentWrapperClasses = {
      'content-wrapper': true,
      'content-wrapper-fit-height': this.fitHeight,
    };

    const contentClasses = {
      'content': true,
      'content-fit-height': this.fitHeight,
    };

    const footerClasses = {
      'footer': true,
      'with-paddings': !this.disableContentPaddings,
      'with-divider': this._hasFooter,
    };

    return html`
      <div class=${classMap(rootClasses)}>
        ${this._hasMedia
          ? html`<div class="media media-top"><slot name="media" @slotchange=${this._onMediaSlotChange}></slot></div>`
          : html`<slot name="media" @slotchange=${this._onMediaSlotChange} style="display:none"></slot>`
        }
        <div class=${classMap(contentWrapperClasses)}>
          <div class=${classMap(headerClasses)}>
            <slot name="header" @slotchange=${this._onHeaderSlotChange}></slot>
          </div>
          <div class=${classMap(contentClasses)}>
            <div class=${classMap(contentInnerClasses)}>
              <slot></slot>
            </div>
          </div>
          ${this._hasFooter
            ? html`<div class=${classMap(footerClasses)}><slot name="footer" @slotchange=${this._onFooterSlotChange}></slot></div>`
            : html`<slot name="footer" @slotchange=${this._onFooterSlotChange} style="display:none"></slot>`
          }
        </div>
      </div>
    `;
  }
}
