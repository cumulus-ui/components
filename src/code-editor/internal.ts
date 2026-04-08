import { css, html, type TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { CsBaseElement } from '../internal/base-element.js';
import { fireNonCancelableEvent } from '../internal/events.js';
import { componentStyles, sharedStyles } from './styles.js';
import type { CodeEditorProps } from './interfaces.js';
import '../button/index.js';
import '../spinner/index.js';

const hostStyles = css`
  :host { display: block; }
  .editor-wrapper {
    position: relative;
    overflow: hidden;
  }
  .editor-textarea {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    resize: none;
    border: none;
    outline: none;
    padding: 0;
    padding-inline-start: var(--space-xl-jfy3x4, 24px);
    font-family: "Monaco", "Menlo", "Ubuntu Mono", "Consolas", "Source Code Pro", "source-code-pro", monospace;
    font-size: var(--font-size-body-m-a7nh2n, 14px);
    line-height: var(--line-height-body-m-2mh3ke, 20px);
    color: var(--color-text-body-default-vvtq8u, #0f141a);
    background: transparent;
    tab-size: 4;
  }
  .editor-textarea:read-only {
    cursor: default;
  }
  .line-numbers {
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    padding-block: 0;
    padding-inline-end: var(--space-xs-ymlm0b, 8px);
    text-align: end;
    user-select: none;
    pointer-events: none;
    font-family: "Monaco", "Menlo", "Ubuntu Mono", "Consolas", "Source Code Pro", "source-code-pro", monospace;
    font-size: var(--font-size-body-m-a7nh2n, 14px);
    line-height: var(--line-height-body-m-2mh3ke, 20px);
    color: var(--color-text-small-m1tr70, #656871);
    min-inline-size: 40px;
    background: var(--color-background-code-editor-status-bar-yjtxod, #f3f3f7);
    border-inline-end: 1px solid var(--color-border-code-editor-default-2bfcfq, #dedee3);
  }
  .line-number {
    display: block;
    padding-inline-end: var(--space-xs-ymlm0b, 8px);
    padding-inline-start: var(--space-xs-ymlm0b, 8px);
  }
`;

export class CsCodeEditorInternal extends CsBaseElement {
  static override styles = [sharedStyles, componentStyles, hostStyles];

  @property({ type: String })
  value = '';

  @property({ type: String })
  language: string = 'javascript';

  @property({ type: String })
  languageLabel?: string;

  @property({ type: Number })
  editorContentHeight = 480;

  @property({ type: Boolean })
  loading = false;

  @property({ type: Boolean })
  readOnly = false;

  @property({ attribute: false })
  themes?: CodeEditorProps.AvailableThemes;

  @property({ attribute: false })
  preferences?: Partial<CodeEditorProps.Preferences>;

  @property({ attribute: false })
  i18nStrings?: CodeEditorProps.I18nStrings;

  @property({ type: String })
  override ariaLabel: string | null = null;

  private _cursorRow = 1;
  private _cursorCol = 1;

  private get _lineCount(): number {
    if (!this.value) return 1;
    return this.value.split('\n').length;
  }

  private get _displayLanguage(): string {
    return this.languageLabel ?? this.language;
  }

  private _onInput(e: Event): void {
    const textarea = e.target as HTMLTextAreaElement;
    const newValue = textarea.value;
    fireNonCancelableEvent<CodeEditorProps.ChangeDetail>(this, 'change', {
      value: newValue,
    });
  }

  private _onKeyUp(e: Event): void {
    const textarea = e.target as HTMLTextAreaElement;
    this._updateCursorPosition(textarea);
  }

  private _onClick(e: Event): void {
    const textarea = e.target as HTMLTextAreaElement;
    this._updateCursorPosition(textarea);
  }

  private _updateCursorPosition(textarea: HTMLTextAreaElement): void {
    const pos = textarea.selectionStart;
    const textBefore = textarea.value.substring(0, pos);
    const lines = textBefore.split('\n');
    this._cursorRow = lines.length;
    this._cursorCol = (lines[lines.length - 1]?.length ?? 0) + 1;
    this.requestUpdate();
  }

  private _cursorPositionLabel(row: number, col: number): string {
    return this.i18nStrings?.cursorPosition?.(row, col) ?? `Ln ${row}, Col ${col}`;
  }

  private _renderLoading(): TemplateResult {
    const loadingText = this.i18nStrings?.loadingState ?? 'Loading code editor';
    return html`
      <div class="loading-screen" style="height: ${this.editorContentHeight}px">
        <cs-spinner size="large"></cs-spinner>
        <span style="margin-inline-start: 8px">${loadingText}</span>
      </div>
    `;
  }

  private _renderLineNumbers(): TemplateResult {
    const count = this._lineCount;
    const lines: number[] = [];
    for (let i = 1; i <= count; i++) {
      lines.push(i);
    }
    return html`
      <div class="line-numbers" aria-hidden="true">
        ${lines.map(n => html`<span class="line-number">${n}</span>`)}
      </div>
    `;
  }

  private _renderEditor(): TemplateResult {
    return html`
      <div
        class="editor-wrapper"
        style="height: ${this.editorContentHeight}px"
      >
        ${this._renderLineNumbers()}
        <textarea
          class="editor-textarea"
          .value=${this.value}
          ?readonly=${this.readOnly}
          aria-label=${this.ariaLabel ?? 'Code editor'}
          spellcheck="false"
          autocorrect="off"
          autocapitalize="off"
          @input=${this._onInput}
          @keyup=${this._onKeyUp}
          @click=${this._onClick}
        ></textarea>
      </div>
    `;
  }

  private _renderStatusBar(): TemplateResult {
    const statusClasses = {
      'status-bar': true,
      'status-bar-with-hidden-pane': true,
    };

    return html`
      <div class=${classMap(statusClasses)} role="group" aria-label=${this.i18nStrings?.statusBarGroupAriaLabel ?? 'Status bar'}>
        <div class="status-bar__left">
          <span class="status-bar__language-mode">${this._displayLanguage}</span>
          <span class="status-bar__cursor-position">${this._cursorPositionLabel(this._cursorRow, this._cursorCol)}</span>
        </div>
        <div class="status-bar__right">
          <div class="status-bar__cog-button">
            <cs-button
              variant="icon"
              icon-name="settings"
              aria-label=${this.i18nStrings?.preferencesButtonAriaLabel ?? 'Preferences'}
            ></cs-button>
          </div>
        </div>
      </div>
    `;
  }

  override render(): TemplateResult {
    return html`
      <div class="code-editor" role="group" aria-label=${this.i18nStrings?.editorGroupAriaLabel ?? 'Code editor'}>
        ${this.loading ? this._renderLoading() : html`
          ${this._renderEditor()}
          ${this._renderStatusBar()}
        `}
      </div>
    `;
  }
}
