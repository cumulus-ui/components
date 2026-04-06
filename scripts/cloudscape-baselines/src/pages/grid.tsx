import Grid from '@cloudscape-design/components/grid';

const sectionStyle: React.CSSProperties = { marginBottom: 24, padding: 16, border: '1px solid #e9ebed', borderRadius: 8 };
const h3Style: React.CSSProperties = { marginTop: 0, marginBottom: '1em', fontSize: 14, lineHeight: 1.15, color: '#687078', textTransform: 'uppercase', letterSpacing: 0.5 };
const cellStyle: React.CSSProperties = { background: '#f2f3f3', border: '1px solid #d1d5db', borderRadius: 4, padding: '8px 12px', textAlign: 'center', fontSize: 13 };

export default function GridPermutations() {
  return (
    <div style={{ display: 'block', padding: 24, fontFamily: 'system-ui, sans-serif', lineHeight: 1.15 }}>
      <h2 style={{ marginTop: 0, marginBottom: '0.83em', lineHeight: 1.15 }}>Grid — Permutations</h2>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Equal 3 Columns (4+4+4)</h3>
        <Grid gridDefinition={[{ colspan: 4 }, { colspan: 4 }, { colspan: 4 }]}>
          <div style={cellStyle}>Column 1</div>
          <div style={cellStyle}>Column 2</div>
          <div style={cellStyle}>Column 3</div>
        </Grid>
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Uneven Columns (8+4)</h3>
        <Grid gridDefinition={[{ colspan: 8 }, { colspan: 4 }]}>
          <div style={cellStyle}>Main content (8)</div>
          <div style={cellStyle}>Sidebar (4)</div>
        </Grid>
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>With Offset (offset 4, colspan 4+4)</h3>
        <Grid gridDefinition={[{ colspan: 4, offset: 4 }, { colspan: 4 }]}>
          <div style={cellStyle}>Offset column</div>
          <div style={cellStyle}>Normal column</div>
        </Grid>
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Full Width Single Column</h3>
        <Grid gridDefinition={[{ colspan: 12 }]}>
          <div style={cellStyle}>Full width</div>
        </Grid>
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Four Equal Columns</h3>
        <Grid gridDefinition={[{ colspan: 3 }, { colspan: 3 }, { colspan: 3 }, { colspan: 3 }]}>
          <div style={cellStyle}>Col 1</div>
          <div style={cellStyle}>Col 2</div>
          <div style={cellStyle}>Col 3</div>
          <div style={cellStyle}>Col 4</div>
        </Grid>
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Disabled Gutters</h3>
        <Grid gridDefinition={[{ colspan: 4 }, { colspan: 4 }, { colspan: 4 }]} disableGutters>
          <div style={cellStyle}>No gap 1</div>
          <div style={cellStyle}>No gap 2</div>
          <div style={cellStyle}>No gap 3</div>
        </Grid>
      </section>
    </div>
  );
}
