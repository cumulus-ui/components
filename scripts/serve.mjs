import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve, extname } from 'node:path';

const MIME = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.mjs': 'application/javascript',
};
const ROOT = resolve(import.meta.dirname, '..');
const PORT = Number(process.env.PORT) || 3000;

createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  const path = resolve(ROOT, '.' + (url.pathname === '/' ? '/demo/index.html' : url.pathname));
  if (!path.startsWith(ROOT)) { res.writeHead(403).end(); return; }
  try {
    const data = await readFile(path);
    res.writeHead(200, {
      'content-type': MIME[extname(path)] || 'application/octet-stream',
      'cache-control': 'no-cache',
    }).end(data);
  } catch {
    res.writeHead(404).end('Not found');
  }
}).listen(PORT, () => console.log(`Demo server: http://localhost:${PORT}`));
