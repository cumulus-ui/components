import { css, html, nothing, type TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { CsBaseElement } from '../internal/base-element.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import { componentStyles, sharedStyles } from './styles.js';
import type { CollectionPreferencesProps } from './interfaces.js';
import '../button/index.js';
import '../icon/index.js';
import '../checkbox/index.js';

const hostStyles = css`:host { display: inline-block; }`;

const panelStyles = css`
  .panel {
    position: absolute;
    z-index: 1000;
    inset-inline-end: 0;
    inset-block-start: 100%;
    margin-block-start: 4px;
    background: var(--color-background-container-content-ylugqs, #ffffff);
    border: 1px solid var(--color-border-container-top-tdnwla, #e9ebed);
    border-radius: var(--border-radius-container-5jaqo3, 16px);
    box-shadow: var(--shadow-panel-fheubh, 0px 0px 1px 1px #e9ebed, 0px 1px 8px 2px rgba(0, 7, 22, 0.12));
    padding: var(--space-scaled-l-sej05l, 20px);
    min-inline-size: 280px;
    max-inline-size: 400px;
  }
  .panel-title {
    font-size: var(--font-size-heading-m-170yiy, 18px);
    font-weight: var(--font-weight-heading-m-zf82dr, 700);
    line-height: var(--line-height-heading-m-uoaqdh, 22px);
    margin-block-end: var(--space-scaled-l-sej05l, 20px);
  }
  .panel-section {
    margin-block-end: var(--space-scaled-s-8ozaad, 12px);
  }
  .panel-section-title {
    font-size: var(--font-size-body-m-a7nh2n, 14px);
    font-weight: var(--font-display-label-weight-zavpeo, 700);
    margin-block-end: var(--space-scaled-xxs-v1m6s9, 4px);
  }
  .panel-footer {
    display: flex;
    justify-content: flex-end;
    gap: var(--space-xs-ymlm0b, 8px);
    margin-block-start: var(--space-scaled-l-sej05l, 20px);
    padding-block-start: var(--space-scaled-s-8ozaad, 12px);
    border-block-start: 1px solid var(--color-border-divider-default-djbamr, #e9ebed);
  }
  .page-size-options {
    display: flex;
    flex-direction: column;
    gap: var(--space-scaled-xxs-v1m6s9, 4px);
  }
  .page-size-option {
    display: flex;
    align-items: center;
    gap: var(--space-xs-ymlm0b, 8px);
    cursor: pointer;
  }
  .page-size-option input {
    margin: 0;
  }
  .visible-content-option {
    padding-block: var(--space-scaled-xxs-v1m6s9, 4px);
  }
  .visible-content-group-label {
    font-weight: var(--font-display-label-weight-zavpeo, 700);
    font-size: var(--font-size-body-s-smc8cv, 12px);
    color: var(--color-text-form-secondary-1nm780, #656871);
    padding-block-end: var(--space-scaled-xxs-v1m6s9, 4px);
  }
`;

export class CsCollectionPreferencesInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, panelStyles, hostStyles];

  @property({ type: String })
  title = 'Preferences';

  @property({ type: String })
  confirmLabel = 'Confirm';

  @property({ type: String })
  cancelLabel = 'Cancel';

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ attribute: false })
  preferences?: CollectionPreferencesProps.Preferences;

  @property({ attribute: false })
  pageSizePreference?: CollectionPreferencesProps.PageSizePreference;

  @property({ attribute: false })
  wrapLinesPreference?: CollectionPreferencesProps.WrapLinesPreference;

  @property({ attribute: false })
  stripedRowsPreference?: CollectionPreferencesProps.StripedRowsPreference;

  @property({ attribute: false })
  contentDensityPreference?: CollectionPreferencesProps.ContentDensityPreference;

  @property({ attribute: false })
  visibleContentPreference?: CollectionPreferencesProps.VisibleContentPreference;

  @state()
  private _open = false;

  @state()
  private _draft: CollectionPreferencesProps.Preferences = {};

  private _cleanupOutsideClick: (() => void) | null = null;

  override connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('keydown', this._onKeyDown);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('keydown', this._onKeyDown);
    this._removeOutsideClickListener();
  }

  private _onKeyDown = (e: KeyboardEvent): void => {
    if (e.key === 'Escape' && this._open) {
      e.stopPropagation();
      this._cancel();
    }
  };

  private _onTriggerClick = (e: Event): void => {
    if (e instanceof CustomEvent) return;
    if (this.disabled) return;
    this._draft = { ...this.preferences };
    this._open = !this._open;
    if (this._open) {
      this._addOutsideClickListener();
    }
  };

  private _confirm = (): void => {
    fireNonCancelableEvent(this, 'confirm', { ...this._draft });
    this._open = false;
    this._removeOutsideClickListener();
  };

  private _cancel = (): void => {
    fireNonCancelableEvent(this, 'cancel', {});
    this._open = false;
    this._removeOutsideClickListener();
  };

  private _addOutsideClickListener(): void {
    this._removeOutsideClickListener();
    const handler = (e: MouseEvent) => {
      const path = e.composedPath();
      if (!path.includes(this)) {
        this._cancel();
      }
    };
    requestAnimationFrame(() => {
      document.addEventListener('click', handler, true);
      this._cleanupOutsideClick = () => {
        document.removeEventListener('click', handler, true);
      };
    });
  }

  private _removeOutsideClickListener(): void {
    this._cleanupOutsideClick?.();
    this._cleanupOutsideClick = null;
  }

  private _onPageSizeChange(value: number): void {
    this._draft = { ...this._draft, pageSize: value };
  }

  private _onWrapLinesChange(checked: boolean): void {
    this._draft = { ...this._draft, wrapLines: checked };
  }

  private _onStripedRowsChange(checked: boolean): void {
    this._draft = { ...this._draft, stripedRows: checked };
  }

  private _onContentDensityChange(checked: boolean): void {
    this._draft = { ...this._draft, contentDensity: checked ? 'compact' : 'comfortable' };
  }

  private _onVisibleContentChange(id: string, checked: boolean): void {
    const current = [...(this._draft.visibleContent ?? [])];
    if (checked && !current.includes(id)) {
      current.push(id);
    } else if (!checked) {
      const idx = current.indexOf(id);
      if (idx >= 0) current.splice(idx, 1);
    }
    this._draft = { ...this._draft, visibleContent: current };
  }

  private _renderPageSizePreference(): TemplateResult | typeof nothing {
    if (!this.pageSizePreference) return nothing;
    const pref = this.pageSizePreference;
    return html`
      <div class="panel-section">
        ${pref.title ? html`<div class="panel-section-title">${pref.title}</div>` : nothing}
        <div class="page-size-options" role="radiogroup" aria-label=${pref.title ?? 'Page size'}>
          ${pref.options.map(opt => html`
            <label class="page-size-option">
              <input type="radio" name="page-size"
                .checked=${this._draft.pageSize === opt.value}
                @change=${() => this._onPageSizeChange(opt.value)} />
              ${opt.label ?? `${opt.value} items`}
            </label>
          `)}
        </div>
      </div>
    `;
  }

  private _renderWrapLinesPreference(): TemplateResult | typeof nothing {
    if (!this.wrapLinesPreference) return nothing;
    const pref = this.wrapLinesPreference;
    return html`
      <div class="panel-section">
        <cs-checkbox
          .checked=${this._draft.wrapLines ?? false}
          @change=${(e: CustomEvent) => this._onWrapLinesChange(e.detail.checked)}
        >${pref.label ?? 'Wrap lines'}</cs-checkbox>
        ${pref.description ? html`<div class="content-display-description">${pref.description}</div>` : nothing}
      </div>
    `;
  }

  private _renderStripedRowsPreference(): TemplateResult | typeof nothing {
    if (!this.stripedRowsPreference) return nothing;
    const pref = this.stripedRowsPreference;
    return html`
      <div class="panel-section">
        <cs-checkbox
          .checked=${this._draft.stripedRows ?? false}
          @change=${(e: CustomEvent) => this._onStripedRowsChange(e.detail.checked)}
        >${pref.label ?? 'Striped rows'}</cs-checkbox>
        ${pref.description ? html`<div class="content-display-description">${pref.description}</div>` : nothing}
      </div>
    `;
  }

  private _renderContentDensityPreference(): TemplateResult | typeof nothing {
    if (!this.contentDensityPreference) return nothing;
    const pref = this.contentDensityPreference;
    return html`
      <div class="panel-section">
        <cs-checkbox
          .checked=${this._draft.contentDensity === 'compact'}
          @change=${(e: CustomEvent) => this._onContentDensityChange(e.detail.checked)}
        >${pref.label ?? 'Compact mode'}</cs-checkbox>
        ${pref.description ? html`<div class="content-display-description">${pref.description}</div>` : nothing}
      </div>
    `;
  }

  private _renderVisibleContentPreference(): TemplateResult | typeof nothing {
    if (!this.visibleContentPreference) return nothing;
    const pref = this.visibleContentPreference;
    const visibleIds = this._draft.visibleContent ?? [];
    return html`
      <div class="panel-section">
        ${pref.title ? html`<div class="panel-section-title">${pref.title}</div>` : nothing}
        ${pref.options.map(group => html`
          <div class="visible-content-group">
            <div class="visible-content-group-label">${group.label}</div>
            ${group.options.map(opt => {
              const isEditable = opt.editable !== false;
              return html`
                <div class="visible-content-option">
                  <cs-checkbox
                    .checked=${visibleIds.includes(opt.id)}
                    ?disabled=${!isEditable}
                    @change=${(e: CustomEvent) => this._onVisibleContentChange(opt.id, e.detail.checked)}
                  >${opt.label}</cs-checkbox>
                </div>
              `;
            })}
          </div>
        `)}
      </div>
    `;
  }

  override render(): TemplateResult {
    return html`
      <div class="root" style="position: relative; display: inline-block;">
        <cs-button
          variant="icon"
          icon-name="settings"
          aria-label=${this.title}
          ?disabled=${this.disabled}
          @click=${this._onTriggerClick}
        ></cs-button>
        ${this._open ? html`
          <div class="panel" role="dialog" aria-label=${this.title}>
            <div class="panel-title">${this.title}</div>
            ${this._renderPageSizePreference()}
            ${this._renderWrapLinesPreference()}
            ${this._renderStripedRowsPreference()}
            ${this._renderContentDensityPreference()}
            ${this._renderVisibleContentPreference()}
            <div class="panel-footer">
              <cs-button variant="link" @click=${this._cancel}>${this.cancelLabel}</cs-button>
              <cs-button variant="primary" @click=${this._confirm}>${this.confirmLabel}</cs-button>
            </div>
          </div>
        ` : nothing}
      </div>
    `;
  }
}
