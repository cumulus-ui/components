import Tiles from '@cloudscape-design/components/tiles';
import { useState } from 'react';

const sectionStyle: React.CSSProperties = { marginBottom: 24, padding: 16, border: '1px solid #e9ebed', borderRadius: 8 };
const h3Style: React.CSSProperties = { marginTop: 0, marginBottom: '1em', fontSize: 14, lineHeight: 1.15, color: '#687078', textTransform: 'uppercase', letterSpacing: 0.5 };
const resultStyle: React.CSSProperties = { marginTop: 8, fontSize: 13, color: '#0972d3', fontFamily: 'monospace' };

export default function TilesPermutations() {
  const [value1, setValue1] = useState('t1');
  const [value2, setValue2] = useState('');

  return (
    <div style={{ display: 'block', padding: 24, fontFamily: 'system-ui, sans-serif', lineHeight: 1.15 }}>
      <h2 style={{ marginTop: 0, marginBottom: '0.83em', lineHeight: 1.15 }}>Tiles — Permutations</h2>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Default (3 columns)</h3>
        <Tiles
          value={value1}
          items={[
            { value: 't1', label: 'Tile One', description: 'First tile description' },
            { value: 't2', label: 'Tile Two', description: 'Second tile description' },
            { value: 't3', label: 'Tile Three', description: 'Third tile description' },
          ]}
          ariaLabel="Default tiles"
          onChange={({ detail }) => setValue1(detail.value)}
        />
        <div style={resultStyle}>Selected: {value1}</div>
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>2 Columns</h3>
        <Tiles
          columns={2}
          value={value2}
          items={[
            { value: 'a', label: 'Alpha', description: 'Option Alpha details' },
            { value: 'b', label: 'Beta', description: 'Option Beta details' },
            { value: 'c', label: 'Gamma', description: 'Option Gamma details' },
            { value: 'd', label: 'Delta', description: 'Option Delta details' },
          ]}
          ariaLabel="Two-column tiles"
          onChange={({ detail }) => setValue2(detail.value)}
        />
        <div style={resultStyle}>Selected: {value2 || '(none)'}</div>
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>With Disabled Tiles</h3>
        <Tiles
          value="enabled-a"
          items={[
            { value: 'enabled-a', label: 'Available', description: 'This tile is selectable' },
            { value: 'disabled-a', label: 'Unavailable', description: 'This tile is disabled', disabled: true },
            { value: 'enabled-b', label: 'Also Available', description: 'This tile is selectable too' },
          ]}
          ariaLabel="Tiles with disabled option"
          onChange={() => {}}
        />
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Disabled Group</h3>
        <Tiles
          value="x"
          items={[
            { value: 'x', label: 'Selected', description: 'But the whole group is disabled' },
            { value: 'y', label: 'Other', description: 'Also disabled' },
          ]}
          ariaLabel="Fully disabled tiles"
          onChange={() => {}}
        />
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Read Only</h3>
        <Tiles
          readOnly
          value="ro-1"
          items={[
            { value: 'ro-1', label: 'Read-only selected', description: 'Cannot change' },
            { value: 'ro-2', label: 'Read-only other', description: 'Also cannot change' },
          ]}
          ariaLabel="Read-only tiles"
          onChange={() => {}}
        />
      </section>
    </div>
  );
}
