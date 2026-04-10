import { css, html, type TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { CsBaseElement } from '../internal/base-element.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import { componentStyles, sharedStyles } from './styles.js';
import type { CopyToClipboardProps } from './interfaces.js';
import '../button/index.js';
import '../icon/index.js';

const hostStyles = css`:host { display: inline-block; }`;

type CopyStatus = 'idle' | 'success' | 'error';

export class CsCopyToClipboardInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  @property({ type: String, attribute: 'copy-button-text' })
  copyButtonText = 'Copy';

  @property({ type: String, attribute: 'copy-success-text' })
  copySuccessText = 'Copied';

  @property({ type: String, attribute: 'copy-error-text' })
  copyErrorText = 'Failed to copy';

  @property({ type: String, attribute: 'text-to-copy' })
  textToCopy = '';

  @property({ type: String })
  variant: CopyToClipboardProps.Variant = 'button';

  @property({ type: Boolean })
  disabled = false;

  @state()
  private _status: CopyStatus = 'idle';

  private _resetTimer: ReturnType<typeof setTimeout> | undefined;

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this._resetTimer !== undefined) {
      clearTimeout(this._resetTimer);
      this._resetTimer = undefined;
    }
  }

  focus(options?: FocusOptions): void {
    const btn = this.shadowRoot?.querySelector<HTMLElement>('cs-button');
    btn?.focus(options);
  }

  private _onCopyClick = async (): Promise<void> => {
    if (this.disabled) return;

    try {
      await navigator.clipboard.writeText(this.textToCopy);
      this._status = 'success';
      fireNonCancelableEvent(this, 'copy', { successful: true });
    } catch {
      this._status = 'error';
      fireNonCancelableEvent(this, 'copy', { successful: false });
    }

    if (this._resetTimer !== undefined) {
      clearTimeout(this._resetTimer);
    }
    this._resetTimer = setTimeout(() => {
      this._status = 'idle';
      this._resetTimer = undefined;
    }, 1500);
  };

  private _getButtonText(): string {
    switch (this._status) {
      case 'success': return this.copySuccessText;
      case 'error': return this.copyErrorText;
      default: return this.copyButtonText;
    }
  }

  private _getIconName(): string {
    switch (this._status) {
      case 'success': return 'status-positive';
      case 'error': return 'status-negative';
      default: return 'copy';
    }
  }

  override render(): TemplateResult {
    const isIconOnly = this.variant === 'icon' || this.variant === 'inline';
    const isInline = this.variant === 'inline';
    const buttonVariant = isIconOnly ? 'icon' : 'normal';
    const buttonText = this._getButtonText();
    const iconName = this._getIconName();

    const rootClasses = {
      'root': true,
      'inline-container': isInline,
    };

    return html`
      <span class=${classMap(rootClasses)}>
        <span class=${classMap({ 'inline-container-trigger': isInline })}>
          <cs-button
            variant=${buttonVariant}
            icon-name=${iconName}
            ?disabled=${this.disabled}
            aria-label=${isIconOnly ? buttonText : ''}
            @click=${this._onCopyClick}
          >${!isIconOnly ? buttonText : ''}</cs-button>
        </span>
      </span>
    `;
  }
}
