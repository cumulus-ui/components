import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
import '../../../src/top-navigation/index.js';

@customElement('top-navigation-permutations-page')
export class TopNavigationPermutationsPage extends PermutationsPageBase {
  static override styles = css`
    :host {
      display: block;
      padding: 0;
      font-family: system-ui, sans-serif;
      line-height: 1.15;
    }
    h2 { margin-top: 24px; margin-left: 24px; margin-bottom: 0.83em; line-height: 1.15; }
    section {
      margin: 0 24px 24px;
      padding: 16px;
      border: 1px solid #e9ebed;
      border-radius: 8px;
    }
    section h3 {
      margin-top: 0; margin-bottom: 1em;
      font-size: 14px; line-height: 1.15;
      color: #687078; text-transform: uppercase; letter-spacing: 0.5px;
    }
  `;

  private _simpleIdentity = { title: 'My Service', href: '/' };

  private _logoIdentity = {
    title: 'Cloud Service',
    logo: { src: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><rect fill="%23006ce0" width="24" height="24" rx="4"/></svg>', alt: 'Logo' },
    href: '/',
  };

  private _simpleUtilities = [
    { type: 'button' as const, text: 'Docs', href: '/docs' },
    { type: 'button' as const, text: 'Sign out', iconName: 'user-profile' as const },
  ];

  private _menuUtilities = [
    { type: 'button' as const, text: 'Region', iconName: 'status-positive' as const },
    {
      type: 'menu-dropdown' as const,
      text: 'Settings',
      iconName: 'settings' as const,
      items: [
        { id: 'preferences', text: 'Preferences' },
        { id: 'account', text: 'Account settings' },
      ],
    },
    {
      type: 'menu-dropdown' as const,
      text: 'User',
      iconName: 'user-profile' as const,
      items: [
        { id: 'profile', text: 'Profile' },
        { id: 'signout', text: 'Sign out' },
      ],
    },
  ];

  override render() {
    return html`
      <h2>TopNavigation — Permutations</h2>

      <section>
        <h3>Simple (title only)</h3>
        <cs-top-navigation
          .identity=${this._simpleIdentity}
          .utilities=${this._simpleUtilities}
        ></cs-top-navigation>
      </section>

      <section>
        <h3>With Logo</h3>
        <cs-top-navigation
          .identity=${this._logoIdentity}
          .utilities=${this._simpleUtilities}
        ></cs-top-navigation>
      </section>

      <section>
        <h3>With Menu Dropdown Utilities</h3>
        <cs-top-navigation
          .identity=${this._simpleIdentity}
          .utilities=${this._menuUtilities}
        ></cs-top-navigation>
      </section>

      <section>
        <h3>No Utilities</h3>
        <cs-top-navigation
          .identity=${this._simpleIdentity}
        ></cs-top-navigation>
      </section>
    `;
  }
}

export const tagName = 'top-navigation-permutations-page';
