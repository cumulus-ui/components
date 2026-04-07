import { css, html } from 'lit';
import { CsBaseElement } from '../internal/base-element.js';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { componentStyles, sharedStyles } from './styles.js';
import type { GridProps } from './interfaces.js';

function resolveNumericValue(
  value: number | Partial<Record<string, number>> | undefined,
  defaultValue: number,
): number {
  if (value === undefined) return defaultValue;
  if (typeof value === 'number') return value;
  return value.default ?? defaultValue;
}

const hostStyles = css`:host { display: block; }`;

export class CsGridInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  @property({ attribute: false })
  gridDefinition?: ReadonlyArray<GridProps.ElementDefinition>;

  @property({ type: Boolean })
  disableGutters = false;

  @state()
  private _childCount = 0;

  private _slotRef: HTMLSlotElement | null = null;

  private _onSlotChange = (): void => {
    if (!this._slotRef) return;
    const assigned = this._slotRef.assignedElements({ flatten: true });
    this._childCount = assigned.length;
    this._applyGridStyles(assigned);
  };

  override firstUpdated(): void {
    this._slotRef = this.renderRoot.querySelector('slot');
    if (this._slotRef) {
      this._slotRef.addEventListener('slotchange', this._onSlotChange);
      this._onSlotChange();
    }
  }

  override updated(): void {
    if (this._slotRef) {
      const assigned = this._slotRef.assignedElements({ flatten: true });
      this._applyGridStyles(assigned);
    }
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this._slotRef) {
      this._slotRef.removeEventListener('slotchange', this._onSlotChange);
    }
  }

  private _applyGridStyles(children: Element[]): void {
    const defs = this.gridDefinition ?? [];

    children.forEach((child, index) => {
      const def = defs[index];
      const el = child as HTMLElement;

      if (!def) {
        el.style.gridColumn = '';
        return;
      }

      const colspan = resolveNumericValue(def.colspan, 12);
      const offset = resolveNumericValue(def.offset, 0);

      if (offset > 0) {
        el.style.gridColumn = `${offset + 1} / span ${colspan}`;
      } else {
        el.style.gridColumn = `span ${colspan}`;
      }
    });
  }

  override render() {
    void this._childCount;

    const classes = {
      'grid': true,
      'no-gutters': this.disableGutters,
    };

    return html`
      <div class=${classMap(classes)}>
        <slot></slot>
      </div>
    `;
  }
}
