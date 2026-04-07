import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../../../src/list/index.js';

interface FileItem {
  name: string;
  size: string;
  type: string;
}

const sampleItems: FileItem[] = [
  { name: 'report-2024.pdf', size: '2.4 MB', type: 'PDF' },
  { name: 'dashboard-screenshot.png', size: '1.1 MB', type: 'Image' },
  { name: 'quarterly-data.xlsx', size: '890 KB', type: 'Spreadsheet' },
  { name: 'meeting-notes.docx', size: '156 KB', type: 'Document' },
  { name: 'architecture-diagram.svg', size: '45 KB', type: 'Vector' },
];

@customElement('list-permutations-page')
export class ListPermutationsPage extends LitElement {
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
  `;

  private _renderItem = (item: FileItem) => ({
    id: item.name,
    content: item.name,
    secondaryContent: `${item.size} · ${item.type}`,
  });

  private _renderItemWithIcon = (item: FileItem) => ({
    id: item.name,
    content: item.name,
    secondaryContent: `${item.size} · ${item.type}`,
    icon: html`<span style="font-size:16px">📄</span>`,
  });

  override render() {
    return html`
      <h2>List — Permutations</h2>

      <section>
        <h3>Default</h3>
        <cs-list
          .items=${sampleItems}
          .renderItem=${this._renderItem}
          label="Files"
        ></cs-list>
      </section>

      <section>
        <h3>With Icons</h3>
        <cs-list
          .items=${sampleItems}
          .renderItem=${this._renderItemWithIcon}
          label="Files with icons"
        ></cs-list>
      </section>

      <section>
        <h3>No Paddings</h3>
        <cs-list
          .items=${sampleItems.slice(0, 3)}
          .renderItem=${this._renderItem}
          label="Compact list"
          disable-paddings
        ></cs-list>
      </section>

      <section>
        <h3>No Item Paddings</h3>
        <cs-list
          .items=${sampleItems.slice(0, 3)}
          .renderItem=${this._renderItem}
          label="No item paddings list"
          disableItemPaddings
        ></cs-list>
      </section>

      <section>
        <h3>Ordered List (tag override)</h3>
        <cs-list
          .items=${sampleItems.slice(0, 3)}
          .renderItem=${this._renderItem}
          label="Ordered list"
          tag-override="ol"
        ></cs-list>
      </section>

      <section>
        <h3>Empty List</h3>
        <cs-list
          .items=${[]}
          .renderItem=${this._renderItem}
          label="Empty"
        ></cs-list>
      </section>
    `;
  }
}

export const tagName = 'list-permutations-page';
