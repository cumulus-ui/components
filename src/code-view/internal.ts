import { html, nothing, type TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { CsBaseElement } from '../internal/base-element.js';
import { componentStyles, sharedStyles } from './styles.js';
import type { CodeViewProps } from './interfaces.js';

export class CsCodeViewInternal extends CsBaseElement implements CodeViewProps {
  static override styles = [sharedStyles, componentStyles];

  @property({ type: String })
  content = '';

  @property({ type: Boolean })
  lineNumbers = false;

  @property({ type: Boolean })
  wrapLines = false;

  @property({ attribute: false })
  highlight?: (code: string) => string;

  override render(): TemplateResult {
    const lines = this.content.split('\n');
    if (lines[lines.length - 1] === '') lines.pop();

    const tableClasses = {
      'code-table': true,
      'code-table-with-line-wrapping': this.wrapLines,
    };

    const lineClasses = {
      'code-line': true,
      'code-line-wrap': this.wrapLines,
      'code-line-nowrap': !this.wrapLines,
    };

    return html`
      <div class="root" role="group" aria-label=${this.ariaLabel || nothing}>
        <div class="actions">
          <slot name="actions"></slot>
        </div>
        <div class="scroll-container">
          <table class=${classMap(tableClasses)} role="presentation">
            <tbody>
              ${lines.map((line, i) => html`
                <tr>
                  ${this.lineNumbers
                    ? html`<td class="line-number unselectable">${i + 1}</td>`
                    : nothing}
                  <td class=${classMap(lineClasses)}>${this.highlight ? unsafeHTML(this.highlight(line)) : line}</td>
                </tr>
              `)}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }
}
