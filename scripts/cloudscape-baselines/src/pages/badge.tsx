import Badge from '@cloudscape-design/components/badge';

const sectionStyle: React.CSSProperties = { marginBottom: 24, padding: 16, border: '1px solid #e9ebed', borderRadius: 8 };
const h3Style: React.CSSProperties = { marginTop: 0, marginBottom: '1em', fontSize: 14, lineHeight: 1.15, color: '#687078', textTransform: 'uppercase', letterSpacing: 0.5 };

export default function BadgePermutations() {
  return (
    <div style={{ display: 'block', padding: 24, fontFamily: 'system-ui, sans-serif', lineHeight: 1.15 }}>
      <h2 style={{ marginTop: 0, marginBottom: '0.83em', lineHeight: 1.15 }}>Badge — Permutations</h2>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Colors</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Badge color="blue">Blue</Badge>
          <Badge color="grey">Grey</Badge>
          <Badge color="green">Green</Badge>
          <Badge color="red">Red</Badge>
        </div>
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Severity</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Badge color="severity-critical">Critical</Badge>
          <Badge color="severity-high">High</Badge>
          <Badge color="severity-medium">Medium</Badge>
          <Badge color="severity-low">Low</Badge>
          <Badge color="severity-neutral">Neutral</Badge>
        </div>
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Default (no color prop)</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Badge>Default</Badge>
        </div>
      </section>
    </div>
  );
}
