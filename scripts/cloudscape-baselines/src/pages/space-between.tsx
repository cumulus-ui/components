import SpaceBetween from '@cloudscape-design/components/space-between';

const sectionStyle: React.CSSProperties = { marginBottom: 24, padding: 16, border: '1px solid #e9ebed', borderRadius: 8 };
const h3Style: React.CSSProperties = { marginTop: 0, marginBottom: '1em', fontSize: 14, lineHeight: 1.15, color: '#687078', textTransform: 'uppercase', letterSpacing: 0.5 };
const itemStyle: React.CSSProperties = { background: '#f2f3f3', border: '1px solid #d1d5db', borderRadius: 4, padding: '8px 12px', fontSize: 13 };

export default function SpaceBetweenPermutations() {
  return (
    <div style={{ display: 'block', padding: 24, fontFamily: 'system-ui, sans-serif', lineHeight: 1.15 }}>
      <h2 style={{ marginTop: 0, marginBottom: '0.83em', lineHeight: 1.15 }}>SpaceBetween — Permutations</h2>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Vertical - Size S (default)</h3>
        <SpaceBetween size="s">
          <div style={itemStyle}>Item 1</div>
          <div style={itemStyle}>Item 2</div>
          <div style={itemStyle}>Item 3</div>
        </SpaceBetween>
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Vertical - Size XS</h3>
        <SpaceBetween size="xs">
          <div style={itemStyle}>Item 1</div>
          <div style={itemStyle}>Item 2</div>
          <div style={itemStyle}>Item 3</div>
        </SpaceBetween>
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Vertical - Size M</h3>
        <SpaceBetween size="m">
          <div style={itemStyle}>Item 1</div>
          <div style={itemStyle}>Item 2</div>
          <div style={itemStyle}>Item 3</div>
        </SpaceBetween>
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Vertical - Size L</h3>
        <SpaceBetween size="l">
          <div style={itemStyle}>Item 1</div>
          <div style={itemStyle}>Item 2</div>
          <div style={itemStyle}>Item 3</div>
        </SpaceBetween>
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Vertical - Size XL</h3>
        <SpaceBetween size="xl">
          <div style={itemStyle}>Item 1</div>
          <div style={itemStyle}>Item 2</div>
          <div style={itemStyle}>Item 3</div>
        </SpaceBetween>
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Horizontal - Size S</h3>
        <SpaceBetween direction="horizontal" size="s">
          <div style={itemStyle}>Item A</div>
          <div style={itemStyle}>Item B</div>
          <div style={itemStyle}>Item C</div>
        </SpaceBetween>
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Horizontal - Size L</h3>
        <SpaceBetween direction="horizontal" size="l">
          <div style={itemStyle}>Item A</div>
          <div style={itemStyle}>Item B</div>
          <div style={itemStyle}>Item C</div>
        </SpaceBetween>
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Horizontal - Align Center</h3>
        <SpaceBetween direction="horizontal" size="m" alignItems="center">
          <div style={{ ...itemStyle, padding: '4px 12px' }}>Short</div>
          <div style={{ ...itemStyle, padding: '24px 12px' }}>Tall</div>
          <div style={{ ...itemStyle, padding: 12 }}>Medium</div>
        </SpaceBetween>
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Horizontal - Align End</h3>
        <SpaceBetween direction="horizontal" size="m" alignItems="end">
          <div style={{ ...itemStyle, padding: '4px 12px' }}>Short</div>
          <div style={{ ...itemStyle, padding: '24px 12px' }}>Tall</div>
          <div style={{ ...itemStyle, padding: 12 }}>Medium</div>
        </SpaceBetween>
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Size XXXS (tightest)</h3>
        <SpaceBetween size="xxxs">
          <div style={itemStyle}>Tight 1</div>
          <div style={itemStyle}>Tight 2</div>
          <div style={itemStyle}>Tight 3</div>
        </SpaceBetween>
      </section>
    </div>
  );
}
