import * as fs from 'node:fs';

/** Parse styles.css.js → { semanticName: hashedName } */
export function parseClassMap(cssJsPath: string): Record<string, string> {
  const content = fs.readFileSync(cssJsPath, 'utf-8');
  const map: Record<string, string> = {};
  const re = /"([^"]+)":\s*"([^"]+)"/g;
  let m;
  while ((m = re.exec(content)) !== null) {
    map[m[1]] = m[2];
  }
  return map;
}

/** Build reverse map: hashedName → semanticName */
export function buildReverseMap(forward: Record<string, string>): Record<string, string> {
  const rev: Record<string, string> = {};
  for (const [semantic, hashed] of Object.entries(forward)) {
    rev[hashed] = semantic;
  }
  return rev;
}
