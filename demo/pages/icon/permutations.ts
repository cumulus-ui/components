import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../../../src/icon/index.js';

const ICON_NAMES = [
  'add-plus', 'anchor-link', 'angle-left', 'angle-right', 'angle-up', 'angle-down',
  'arrow-left', 'arrow-right', 'arrow-up', 'arrow-down', 'bug', 'calendar',
  'check', 'close', 'copy', 'download', 'edit', 'envelope', 'external',
  'file', 'filter', 'folder', 'gen-ai', 'globe', 'heart', 'history',
  'key', 'lock-private', 'menu', 'notification', 'pause', 'play',
  'refresh', 'remove', 'search', 'security', 'send', 'settings', 'share',
  'star', 'star-filled', 'status-info', 'status-positive', 'status-negative',
  'status-warning', 'thumbs-up', 'thumbs-down', 'upload', 'user-profile',
] as const;

const SIZES = ['small', 'normal', 'medium', 'big', 'large'] as const;
const VARIANTS = ['normal', 'subtle', 'disabled', 'inverted', 'link', 'success', 'error', 'warning'] as const;

@customElement('icon-permutations-page')
export class IconPermutationsPage extends LitElement {
  static override styles = css`
    :host {
      display: block;
      padding: 24px;
      font-family: system-ui, sans-serif;
      line-height: 1.15;
    }
    h2 {
      margin-top: 0;
      margin-bottom: 0.83em;
      line-height: 1.15;
    }
    section {
      margin-bottom: 24px;
      padding: 16px;
      border: 1px solid #e9ebed;
      border-radius: 8px;
    }
    section h3 {
      margin-top: 0;
      margin-bottom: 1em;
      font-size: 14px;
      line-height: 1.15;
      color: #687078;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .grid {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      align-items: center;
    }
    .icon-cell {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      padding: 8px;
      min-width: 80px;
      border: 1px solid #f0f0f0;
      border-radius: 4px;
    }
    .icon-cell span {
      font-size: 10px;
      color: #687078;
      text-align: center;
      word-break: break-all;
    }
    .size-row {
      display: flex;
      gap: 16px;
      align-items: center;
    }
    .variant-row {
      display: flex;
      gap: 16px;
      align-items: center;
    }
    .inverted-bg {
      background: #0f141a;
      padding: 8px;
      border-radius: 4px;
    }
  `;

  override render() {
    return html`
      <h2>Icon — Permutations</h2>

      <section>
        <h3>All Built-in Icons (normal size)</h3>
        <div class="grid">
          ${ICON_NAMES.map(name => html`
            <div class="icon-cell">
              <cs-icon name=${name}></cs-icon>
              <span>${name}</span>
            </div>
          `)}
        </div>
      </section>

      <section>
        <h3>Sizes</h3>
        <div class="size-row">
          ${SIZES.map(size => html`
            <div class="icon-cell">
              <cs-icon name="settings" size=${size}></cs-icon>
              <span>${size}</span>
            </div>
          `)}
        </div>
      </section>

      <section>
        <h3>Variants</h3>
        <div class="variant-row">
          ${VARIANTS.map(variant => html`
            ${variant === 'inverted' ? html`
              <div class="icon-cell inverted-bg">
                <cs-icon name="settings" variant=${variant}></cs-icon>
                <span style="color:#fff">${variant}</span>
              </div>
            ` : html`
              <div class="icon-cell">
                <cs-icon name="settings" variant=${variant}></cs-icon>
                <span>${variant}</span>
              </div>
            `}
          `)}
        </div>
      </section>

      <section>
        <h3>With ARIA Label (accessible)</h3>
        <div class="grid">
          <cs-icon name="search" aria-label="Search"></cs-icon>
          <cs-icon name="close" aria-label="Close dialog"></cs-icon>
          <cs-icon name="notification" aria-label="3 new notifications"></cs-icon>
        </div>
      </section>

      <section>
        <h3>URL-based Icon</h3>
        <div class="grid">
          <cs-icon url="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><circle cx='8' cy='8' r='7' fill='%23006ce0'/></svg>" aria-label="Custom blue circle"></cs-icon>
        </div>
      </section>
    `;
  }
}

export const tagName = 'icon-permutations-page';
