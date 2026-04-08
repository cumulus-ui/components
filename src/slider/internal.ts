import { css, html, type TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { CsBaseElement } from '../internal/base-element.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import { componentStyles, sharedStyles } from './styles.js';
import type { SliderProps } from './interfaces.js';

const hostStyles = css`:host { display: block; }`;

export class CsSliderInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  @property({ type: Number })
  value = 0;

  @property({ type: Number })
  min = 0;

  @property({ type: Number })
  max = 100;

  @property({ type: Number })
  step = 1;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: String })
  override ariaLabel: string | null = null;

  focus(options?: FocusOptions): void {
    const input = this.shadowRoot?.querySelector<HTMLInputElement>('input[type="range"]');
    input?.focus(options);
  }

  private _onInput = (e: Event): void => {
    if (this.disabled) return;

    const input = e.target as HTMLInputElement;
    this.value = Number(input.value);

    const detail: SliderProps.ChangeDetail = { value: this.value };
    fireNonCancelableEvent(this as unknown as HTMLElement, 'change', detail);
  };

  private _getRangePercent(): number {
    if (this.max === this.min) return 0;
    return ((this.value - this.min) / (this.max - this.min)) * 100;
  }

  override render(): TemplateResult {
    const percent = this._getRangePercent();

    const thumbClasses = {
      'thumb': true,
      'disabled': this.disabled,
    };

    const trackClasses = {
      'slider-track': true,
      'disabled': this.disabled,
    };

    const rangeClasses = {
      'slider-range': true,
      'disabled': this.disabled,
    };

    return html`
      <div class="root">
        <div class="slider">
          <div class=${classMap(trackClasses)}></div>
          <div
            class=${classMap(rangeClasses)}
            style="--awsui-slider-range-inline-size-6b9ypa: ${percent}%"
          ></div>
          <input
            type="range"
            class=${classMap(thumbClasses)}
            .value=${String(this.value)}
            min=${this.min}
            max=${this.max}
            step=${this.step}
            ?disabled=${this.disabled}
            aria-label=${ifDefined(this.ariaLabel || undefined)}
            aria-valuemin=${this.min}
            aria-valuemax=${this.max}
            aria-valuenow=${this.value}
            @input=${this._onInput}
          />
        </div>
        <div class="labels labels-noref">
          <span class="labels-min">${this.min}</span>
          <span class="labels-max">${this.max}</span>
        </div>
      </div>
    `;
  }
}
