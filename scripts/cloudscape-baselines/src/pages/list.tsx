import List from '@cloudscape-design/components/list';

const sectionStyle: React.CSSProperties = { marginBottom: 24, padding: 16, border: '1px solid #e9ebed', borderRadius: 8 };
const h3Style: React.CSSProperties = { marginTop: 0, marginBottom: '1em', fontSize: 14, lineHeight: 1.15, color: '#687078', textTransform: 'uppercase', letterSpacing: 0.5 };

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

const renderItem = (item: FileItem) => ({
  id: item.name,
  content: item.name,
  secondaryContent: `${item.size} · ${item.type}`,
});

const renderItemWithIcon = (item: FileItem) => ({
  id: item.name,
  content: item.name,
  secondaryContent: `${item.size} · ${item.type}`,
  icon: <span style={{ fontSize: 16 }}>📄</span>,
});

export default function ListPermutations() {
  return (
    <div style={{ display: 'block', padding: 24, fontFamily: 'system-ui, sans-serif', lineHeight: 1.15 }}>
      <h2 style={{ marginTop: 0, marginBottom: '0.83em', lineHeight: 1.15 }}>List — Permutations</h2>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Default</h3>
        <List
          items={sampleItems}
          renderItem={renderItem}
          ariaLabel="Files"
        />
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>With Icons</h3>
        <List
          items={sampleItems}
          renderItem={renderItemWithIcon}
          ariaLabel="Files with icons"
        />
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>No Paddings</h3>
        <List
          items={sampleItems.slice(0, 3)}
          renderItem={renderItem}
          ariaLabel="Compact list"
          disablePaddings
        />
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>No Item Paddings</h3>
        <List
          items={sampleItems.slice(0, 3)}
          renderItem={renderItem}
          ariaLabel="No item paddings list"
          disableItemPaddings
        />
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Ordered List (tag override)</h3>
        <List
          items={sampleItems.slice(0, 3)}
          renderItem={renderItem}
          ariaLabel="Ordered list"
          tagOverride="ol"
        />
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Empty List</h3>
        <List
          items={[]}
          renderItem={renderItem}
          ariaLabel="Empty"
        />
      </section>
    </div>
  );
}
