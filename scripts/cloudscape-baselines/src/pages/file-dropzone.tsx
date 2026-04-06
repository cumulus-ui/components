import FileDropzone from '@cloudscape-design/components/file-dropzone';
import { useState } from 'react';

const sectionStyle: React.CSSProperties = { marginBottom: 24, padding: 16, border: '1px solid #e9ebed', borderRadius: 8 };
const h3Style: React.CSSProperties = { marginTop: 0, marginBottom: '1em', fontSize: 14, lineHeight: 1.15, color: '#687078', textTransform: 'uppercase', letterSpacing: 0.5 };

export default function FileDropzonePermutations() {
  const [droppedFiles, setDroppedFiles] = useState<string[]>([]);

  return (
    <div style={{ display: 'block', padding: 24, fontFamily: 'system-ui, sans-serif', lineHeight: 1.15 }}>
      <h2 style={{ marginTop: 0, marginBottom: '0.83em', lineHeight: 1.15 }}>FileDropzone — Permutations</h2>

      <section style={sectionStyle}>
        <h3 style={h3Style}>Default</h3>
        <FileDropzone onChange={({ detail }) => {
          setDroppedFiles(detail.value.map(f => `${f.name} (${(f.size / 1024).toFixed(1)} KB)`));
        }}>
          Drop files here
        </FileDropzone>
        {droppedFiles.length > 0 && (
          <div id="drop-result" style={{ marginTop: 8, padding: 8, background: '#f2f3f3', borderRadius: 4, fontSize: 13, fontFamily: 'monospace' }}>
            Dropped: {droppedFiles.join(', ')}
          </div>
        )}
      </section>

      <section style={sectionStyle}>
        <h3 style={h3Style}>With Custom Content</h3>
        <FileDropzone onChange={() => {}}>
          <div style={{ padding: 20 }}>
            <strong>Drag &amp; drop your documents</strong>
            <br />
            <small>Supports PDF, DOCX, and images</small>
          </div>
        </FileDropzone>
      </section>
    </div>
  );
}
