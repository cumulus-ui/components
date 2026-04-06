import RadioGroup from '@cloudscape-design/components/radio-group';
import { useState } from 'react';

const sectionStyle: React.CSSProperties = { marginBottom: 24, padding: 16, border: '1px solid #e9ebed', borderRadius: 8 };
const h3Style: React.CSSProperties = { marginTop: 0, marginBottom: '1em', fontSize: 14, lineHeight: 1.15, color: '#687078', textTransform: 'uppercase', letterSpacing: 0.5 };
const resultStyle: React.CSSProperties = { marginTop: 8, fontSize: 13, color: '#0972d3', fontFamily: 'monospace' };

export default function RadioGroupPermutations() {
  const [value1, setValue1] = useState('option-1');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('opt-a');

  return (
    <div style={{ display: 'block', padding: 24, fontFamily: 'system-ui, sans-serif', lineHeight: 1.15 }}>
      <h2 style={{ marginTop: 0, marginBottom: '0.83em', lineHeight: 1.15 }}>RadioGroup — Permutations</h2>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Default (Vertical)</h3>
        <RadioGroup
          value={value1}
          items={[
            { value: 'option-1', label: 'Option 1' },
            { value: 'option-2', label: 'Option 2' },
            { value: 'option-3', label: 'Option 3' },
          ]}
          ariaLabel="Default radio group"
          onChange={({ detail }) => setValue1(detail.value)}
        />
        <div style={resultStyle}>Selected: {value1}</div>
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Horizontal</h3>
        <RadioGroup
          direction="horizontal"
          value={value2}
          items={[
            { value: 'sm', label: 'Small' },
            { value: 'md', label: 'Medium' },
            { value: 'lg', label: 'Large' },
          ]}
          ariaLabel="Size selection"
          onChange={({ detail }) => setValue2(detail.value)}
        />
        <div style={resultStyle}>Selected: {value2 || '(none)'}</div>
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>With Descriptions</h3>
        <RadioGroup
          value={value3}
          items={[
            { value: 'opt-a', label: 'Option A', description: 'First option with extra info' },
            { value: 'opt-b', label: 'Option B', description: 'Second option with details' },
            { value: 'opt-c', label: 'Option C', description: 'Third option explained' },
          ]}
          ariaLabel="Options with descriptions"
          onChange={({ detail }) => setValue3(detail.value)}
        />
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>With Disabled Items</h3>
        <RadioGroup
          value="enabled-1"
          items={[
            { value: 'enabled-1', label: 'Enabled' },
            { value: 'disabled-1', label: 'Disabled item', disabled: true },
            { value: 'enabled-2', label: 'Also enabled' },
          ]}
          ariaLabel="Group with disabled items"
          onChange={() => {}}
        />
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Disabled Group</h3>
        <RadioGroup
          value="x"
          items={[
            { value: 'x', label: 'Selected but disabled' },
            { value: 'y', label: 'Another disabled' },
          ]}
          ariaLabel="Fully disabled group"
          onChange={() => {}}
        />
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Read Only</h3>
        <RadioGroup
          readOnly
          value="ro-1"
          items={[
            { value: 'ro-1', label: 'Read-only selected' },
            { value: 'ro-2', label: 'Read-only unselected' },
          ]}
          ariaLabel="Read-only group"
          onChange={() => {}}
        />
      </section>
    </div>
  );
}
