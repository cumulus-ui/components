import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../../../src/side-navigation/index.js';

@customElement('side-navigation-permutations-page')
export class SideNavigationPermutationsPage extends LitElement {
  static override styles = css`
    :host {
      display: block;
      padding: 24px;
      font-family: system-ui, sans-serif;
      line-height: 1.15;
    }
    h2 { margin-top: 0; margin-bottom: 0.83em; line-height: 1.15; }
    section {
      margin-bottom: 24px;
      padding: 16px;
      border: 1px solid #e9ebed;
      border-radius: 8px;
    }
    section h3 {
      margin-top: 0; margin-bottom: 1em;
      font-size: 14px; line-height: 1.15;
      color: #687078; text-transform: uppercase; letter-spacing: 0.5px;
    }
    cs-side-navigation {
      max-width: 280px;
    }
  `;

  @state() private _activeHref = '/instances';

  private _simpleItems = [
    { type: 'link' as const, text: 'Dashboard', href: '/dashboard' },
    { type: 'link' as const, text: 'Instances', href: '/instances' },
    { type: 'link' as const, text: 'Volumes', href: '/volumes' },
  ];

  private _sectionItems = [
    {
      type: 'section' as const,
      text: 'Compute',
      items: [
        { type: 'link' as const, text: 'Instances', href: '/instances' },
        { type: 'link' as const, text: 'AMIs', href: '/amis' },
      ],
    },
    { type: 'divider' as const },
    {
      type: 'section' as const,
      text: 'Storage',
      items: [
        { type: 'link' as const, text: 'Volumes', href: '/volumes' },
        { type: 'link' as const, text: 'Snapshots', href: '/snapshots' },
      ],
    },
  ];

  private _expandableItems = [
    {
      type: 'expandable-link-group' as const,
      text: 'EC2',
      href: '/ec2',
      items: [
        { type: 'link' as const, text: 'Instances', href: '/instances' },
        { type: 'link' as const, text: 'Security Groups', href: '/sg' },
      ],
    },
    {
      type: 'expandable-link-group' as const,
      text: 'S3',
      href: '/s3',
      items: [
        { type: 'link' as const, text: 'Buckets', href: '/buckets' },
      ],
    },
  ];

  private _header = { text: 'EC2 Console', href: '/' };

  override render() {
    return html`
      <h2>SideNavigation — Permutations</h2>

      <section>
        <h3>Simple Links</h3>
        <cs-side-navigation
          .items=${this._simpleItems}
          active-href=${this._activeHref}
        ></cs-side-navigation>
      </section>

      <section>
        <h3>With Header</h3>
        <cs-side-navigation
          .header=${this._header}
          .items=${this._simpleItems}
          active-href=${this._activeHref}
        ></cs-side-navigation>
      </section>

      <section>
        <h3>Sections with Divider</h3>
        <cs-side-navigation
          .items=${this._sectionItems}
          active-href=${this._activeHref}
        ></cs-side-navigation>
      </section>

      <section>
        <h3>Expandable Link Groups</h3>
        <cs-side-navigation
          .items=${this._expandableItems}
          active-href=${this._activeHref}
        ></cs-side-navigation>
      </section>

      <section>
        <h3>External Link</h3>
        <cs-side-navigation
          .items=${[
            { type: 'link' as const, text: 'Documentation', href: 'https://docs.example.com', external: true },
            { type: 'link' as const, text: 'Instances', href: '/instances' },
          ]}
          active-href=${this._activeHref}
        ></cs-side-navigation>
      </section>
    `;
  }
}

export const tagName = 'side-navigation-permutations-page';
