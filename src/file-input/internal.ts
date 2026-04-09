import { css, html, type TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { CsBaseElement } from '../internal/base-element.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import { componentStyles, sharedStyles } from './styles.js';
import type { FileInputProps } from './interfaces.js';
import '../button/index.js';
import '../icon/index.js';

const hostStyles = css`:host { display: inline-block; }`;

export class CsFileInputInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  @property({ type: String })
  accept?: string;

  @property({ type: Boolean })
  multiple = false;

  @property({ type: String, reflect: true })
  variant: 'button' | 'icon' = 'button';

  @property({ type: String })
  override ariaLabel: string | null = 'Choose file';

  @property({ type: Boolean })
  override ariaRequired: string | null = null;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  focus(options?: FocusOptions): void {
    const btn = this.shadowRoot?.querySelector<HTMLElement>('cs-button');
    btn?.focus(options);
  }

  private _onButtonClick = (): void => {
    if (this.disabled) return;
    const input = this.shadowRoot?.querySelector<HTMLInputElement>('.file-input');
    input?.click();
  };

  private _onFileChange = (e: Event): void => {
    const input = e.target as HTMLInputElement;
    const files = input.files;
    if (files) {
      const detail: FileInputProps.ChangeDetail = {
        value: Array.from(files),
      };
      fireNonCancelableEvent(this, 'change', detail);
    }
    // Reset so the same file can be selected again
    input.value = '';
  };

  override render(): TemplateResult {
    const isIconOnly = this.variant === 'icon';
    const buttonVariant = isIconOnly ? 'icon' : 'normal';
    const label = this.ariaLabel || 'Choose file';

    return html`
      <span class="root">
        <input
          type="file"
          class="file-input"
          accept=${ifDefined(this.accept || undefined)}
          ?multiple=${this.multiple}
          ?disabled=${this.disabled}
          tabindex="-1"
          aria-hidden="true"
          @change=${this._onFileChange}
        />
        <cs-button
          class="file-input-button"
          variant=${buttonVariant}
          icon-name=${isIconOnly ? 'upload' : ''}
          ?disabled=${this.disabled}
          aria-label=${label}
          aria-required=${ifDefined(this.ariaRequired || undefined)}
          @click=${this._onButtonClick}
        >${!isIconOnly ? html`<slot>${label}</slot>` : ''}</cs-button>
      </span>
    `;
  }
}
