import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PermutationsPageBase } from '../base.js';
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
export class ListPermutationsPage extends PermutationsPageBase {

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
          aria-label="Files"
        ></cs-list>
      </section>

      <section>
        <h3>With Icons</h3>
        <cs-list
          .items=${sampleItems}
          .renderItem=${this._renderItemWithIcon}
          aria-label="Files with icons"
        ></cs-list>
      </section>

      <section>
        <h3>No Paddings</h3>
        <cs-list
          .items=${sampleItems.slice(0, 3)}
          .renderItem=${this._renderItem}
          aria-label="Compact list"
          disable-paddings
        ></cs-list>
      </section>

      <section>
        <h3>No Item Paddings</h3>
        <cs-list
          .items=${sampleItems.slice(0, 3)}
          .renderItem=${this._renderItem}
          aria-label="No item paddings list"
          disable-item-paddings
        ></cs-list>
      </section>

      <section>
        <h3>Ordered List (tag override)</h3>
        <cs-list
          .items=${sampleItems.slice(0, 3)}
          .renderItem=${this._renderItem}
          aria-label="Ordered list"
          tag-override="ol"
        ></cs-list>
      </section>

      <section>
        <h3>Empty List</h3>
        <cs-list
          .items=${[]}
          .renderItem=${this._renderItem}
          aria-label="Empty"
        ></cs-list>
      </section>
    `;
  }
}

export const tagName = 'list-permutations-page';
