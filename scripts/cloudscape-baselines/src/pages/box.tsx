import Box from '@cloudscape-design/components/box';

const sectionStyle: React.CSSProperties = { marginBottom: 24, padding: 16, border: '1px solid #e9ebed', borderRadius: 8 };
const h3Style: React.CSSProperties = { marginTop: 0, marginBottom: '1em', fontSize: 14, lineHeight: 1.15, color: '#687078', textTransform: 'uppercase', letterSpacing: 0.5 };
const rowStyle: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 12 };

export default function BoxPermutations() {
  return (
    <div style={{ display: 'block', padding: 24, fontFamily: 'system-ui, sans-serif', lineHeight: 1.15 }}>
      <h2 style={{ marginTop: 0, marginBottom: '0.83em', lineHeight: 1.15 }}>Box — Permutations</h2>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Variants</h3>
        <div style={rowStyle}>
          <Box variant="h1">Heading 1</Box>
          <Box variant="h2">Heading 2</Box>
          <Box variant="h3">Heading 3</Box>
          <Box variant="h4">Heading 4</Box>
          <Box variant="h5">Heading 5</Box>
          <Box variant="p">Paragraph text</Box>
          <Box variant="strong">Strong text</Box>
          <Box variant="small">Small text</Box>
          <Box variant="code">Code text</Box>
          <Box variant="pre">Preformatted text</Box>
          <Box variant="samp">Sample output</Box>
        </div>
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Special Variants</h3>
        <div style={rowStyle}>
          <Box variant="awsui-key-label">Key Label</Box>
          <Box variant="awsui-gen-ai-label">Gen AI Label</Box>
          <Box variant="awsui-value-large">Large Value</Box>
          <Box variant="awsui-inline-code">inline code</Box>
        </div>
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Colors</h3>
        <div style={rowStyle}>
          <Box color="inherit">Inherit color</Box>
          <Box color="text-label">Label color</Box>
          <Box color="text-body-secondary">Secondary body</Box>
          <Box color="text-status-error">Error status</Box>
          <Box color="text-status-success">Success status</Box>
          <Box color="text-status-info">Info status</Box>
          <Box color="text-status-warning">Warning status</Box>
        </div>
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Font Sizes</h3>
        <div style={rowStyle}>
          <Box fontSize="body-s">Body small</Box>
          <Box fontSize="body-m">Body medium</Box>
          <Box fontSize="heading-xs">Heading XS</Box>
          <Box fontSize="heading-s">Heading S</Box>
          <Box fontSize="heading-m">Heading M</Box>
          <Box fontSize="heading-l">Heading L</Box>
          <Box fontSize="heading-xl">Heading XL</Box>
          <Box fontSize="display-l">Display L</Box>
        </div>
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Font Weights</h3>
        <div style={rowStyle}>
          <Box fontWeight="light">Light weight</Box>
          <Box fontWeight="normal">Normal weight</Box>
          <Box fontWeight="bold">Bold weight</Box>
          <Box fontWeight="heavy">Heavy weight</Box>
        </div>
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Display</h3>
        <div>
          <Box display="inline" variant="span">Inline 1</Box>
          <Box display="inline" variant="span">Inline 2</Box>
          <Box display="inline-block" variant="span">Inline-block</Box>
        </div>
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Text Alignment</h3>
        <div style={rowStyle}>
          <Box textAlign="left">Left aligned</Box>
          <Box textAlign="center">Center aligned</Box>
          <Box textAlign="right">Right aligned</Box>
        </div>
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Tag Override</h3>
        <div style={rowStyle}>
          <Box variant="h1" tagOverride="span">H1 variant rendered as span</Box>
        </div>
      </section>
    </div>
  );
}
