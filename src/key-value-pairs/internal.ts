import { css, html, nothing, type TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { CsBaseElement } from '../internal/base-element.js';
import { componentStyles, sharedStyles } from './styles.js';
import type { KeyValuePairsProps } from './interfaces.js';

const hostStyles = css`:host { display: block; }`;

const layoutStyles = css`
  .grid {
    display: grid;
    gap: var(--space-scaled-m-m892r9, 16px);
  }
`;

export class CsKeyValuePairsInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, layoutStyles, hostStyles];

  @property({ attribute: false })
  items: ReadonlyArray<KeyValuePairsProps.Item> = [];

  @property({ type: Number })
  columns: number = 1;

  @property({ type: String })
  override ariaLabel: string | null = null;

  @property({ type: String })
  ariaLabelledby?: string;

  @property({ type: Number })
  minColumnWidth?: number;

  private _renderPair(pair: KeyValuePairsProps.Pair): TemplateResult {
    return html`
      <div class="pair">
        <dt class="term">
          <span class="key-label">${pair.label}</span>
          ${pair.info ? html`<span class="info">${pair.info}</span>` : nothing}
        </dt>
        <dd class="detail">${pair.value}</dd>
      </div>
    `;
  }

  private _renderGroup(group: KeyValuePairsProps.Group): TemplateResult {
    return html`
      <div class="group">
        ${group.title ? html`<div class="group-title"><strong>${group.title}</strong></div>` : nothing}
        <dl class="group-list">
          ${group.items.map(pair => this._renderPair(pair))}
        </dl>
      </div>
    `;
  }

  override render(): TemplateResult {
    const cols = Math.min(4, Math.max(1, this.columns));
    const minWidth = this.minColumnWidth ?? 150;
    const gridStyle = `grid-template-columns: repeat(${cols}, minmax(${minWidth}px, 1fr));`;

    return html`
      <div
        class="key-value-pairs"
        role="group"
        aria-label=${this.ariaLabel || 'Key-value pairs'}
      >
        <div class="grid" style=${gridStyle}>
          ${this.items.map(item => {
            if (item.type === 'group') {
              return this._renderGroup(item as KeyValuePairsProps.Group);
            }
            const pair = item as KeyValuePairsProps.Pair;
            return html`
              <dl class="group-list">
                ${this._renderPair(pair)}
              </dl>
            `;
          })}
        </div>
      </div>
    `;
  }
}
