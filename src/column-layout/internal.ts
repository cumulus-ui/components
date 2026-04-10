import { css, html } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { CsBaseElement } from '../internal/base-element.js';
import { componentStyles, sharedStyles } from './styles.js';
import type { ColumnLayoutProps } from './interfaces.js';

export type ColumnLayoutBreakpoint = 'default' | 'xxs' | 'xs';

const hostStyles = css`:host { display: block; }`;

export class CsColumnLayoutInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  @property({ type: Number })
  columns: number = 1;

  @property({ type: String })
  variant: ColumnLayoutProps.Variant = 'default';

  @property({ type: Number, attribute: 'min-column-width' })
  minColumnWidth?: number;

  @property({ type: String })
  borders: ColumnLayoutProps.Borders = 'none';

  @property({ type: Boolean, attribute: 'disable-gutters' })
  disableGutters = false;

  override render() {
    const isTextGrid = this.variant === 'text-grid';

    const gridClasses = {
      'grid': true,
      [`grid-columns-${this.columns}`]: true,
      [`grid-variant-${this.variant}`]: true,
      'grid-breakpoint-xs': true,
      'grid-no-gutters': !isTextGrid && this.disableGutters,
      'grid-vertical-borders': !isTextGrid && (this.borders === 'vertical' || this.borders === 'all'),
      'grid-horizontal-borders': !isTextGrid && (this.borders === 'horizontal' || this.borders === 'all'),
    };

    const gridStyle = this.minColumnWidth
      ? `display: grid; grid-template-columns: repeat(auto-fill, minmax(${this.minColumnWidth}px, 1fr)); gap: var(--space-grid-gutter, 20px);`
      : `display: grid; grid-template-columns: repeat(${this.columns}, 1fr);`;

    return html`
      <div class="column-layout">
        <div class=${classMap(gridClasses)} style=${gridStyle}>
          <slot></slot>
        </div>
      </div>
    `;
  }
}
