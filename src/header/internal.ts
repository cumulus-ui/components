import { css, html, nothing, type TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { CsBaseElement } from '../internal/base-element.js';
import { componentStyles, sharedStyles } from './styles.js';
import type { HeaderProps } from './interfaces.js';

const hostStyles = css`:host { display: block; }`;

const variantToTag: Record<string, string> = {
  'h1': 'h1',
  'h2': 'h2',
  'h3': 'h3',
  'awsui-h1-sticky': 'h1',
};

export class CsHeaderInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  @property({ type: String })
  variant: HeaderProps.Variant = 'h2';

  @property({ type: String })
  headingTagOverride?: HeaderProps.HeadingTag;

  @property({ type: String })
  description = '';

  @property({ type: String })
  counter = '';

  private _hasActions = false;
  private _hasDescription = false;

  private _onActionsSlotChange = (e: Event): void => {
    const slot = e.target as HTMLSlotElement;
    this._hasActions = slot.assignedNodes({ flatten: true }).length > 0;
    this.requestUpdate();
  };

  private _onInfoSlotChange = (): void => {
    this.requestUpdate();
  };

  private _onDescriptionSlotChange = (e: Event): void => {
    const slot = e.target as HTMLSlotElement;
    this._hasDescription = slot.assignedNodes({ flatten: true }).length > 0;
    this.requestUpdate();
  };

  override willUpdate(): void {
    this._hasDescription = !!this.description || this._hasDescription;
  }

  private _renderHeading(): TemplateResult {
    const tag = this.headingTagOverride || variantToTag[this.variant] || 'h2';
    const headingClasses = {
      'heading': true,
      'heading-text': true,
      [`heading-variant-${this.variant}`]: true,
      [`heading-text-variant-${this.variant}`]: true,
    };

    const counterPart = this.counter
      ? html`<span class="counter">&nbsp;${this.counter}</span>`
      : nothing;

    const headingContent = html`<slot></slot>${counterPart}`;

    switch (tag) {
      case 'h1':
        return html`<h1 class=${classMap(headingClasses)}>${headingContent}</h1>`;
      case 'h3':
        return html`<h3 class=${classMap(headingClasses)}>${headingContent}</h3>`;
      case 'h4':
        return html`<h4 class=${classMap(headingClasses)}>${headingContent}</h4>`;
      case 'h5':
        return html`<h5 class=${classMap(headingClasses)}>${headingContent}</h5>`;
      default:
        return html`<h2 class=${classMap(headingClasses)}>${headingContent}</h2>`;
    }
  }

  override render(): TemplateResult {
    const hasDescription = !!this.description || this._hasDescription;

    const rootClasses = {
      'root': true,
      'refresh': true,
      [`root-variant-${this.variant}`]: true,
      'root-no-actions': !this._hasActions,
      'root-has-description': hasDescription,
    };

    const titleClasses = {
      'title': true,
      [`title-variant-${this.variant}`]: true,
    };

    const mainClasses = {
      'main': true,
      [`main-variant-${this.variant}`]: true,
    };

    const actionsClasses = {
      'actions': true,
      [`actions-variant-${this.variant}`]: true,
    };

    const descriptionClasses = {
      'description': true,
      [`description-variant-${this.variant}`]: true,
    };

    return html`
      <div class=${classMap(rootClasses)}>
        <div class=${classMap(mainClasses)}>
          <div class=${classMap(titleClasses)}>
            ${this._renderHeading()}
            <span class="info"><slot name="info" @slotchange=${this._onInfoSlotChange}></slot></span>
          </div>
          ${this._hasActions
            ? html`<div class=${classMap(actionsClasses)}>
                <slot name="actions" @slotchange=${this._onActionsSlotChange}></slot>
              </div>`
            : html`<slot name="actions" @slotchange=${this._onActionsSlotChange} style="display:none"></slot>`}
        </div>
        ${this.description
          ? html`<p class=${classMap(descriptionClasses)}>${this.description}</p>`
          : nothing}
        <slot name="description" @slotchange=${this._onDescriptionSlotChange} style="display:none"></slot>
      </div>
    `;
  }
}
