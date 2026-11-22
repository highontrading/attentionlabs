// Tiny static server for local preview: `npm run dev` → http://localhost:4321
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const ROOT = 'dist';
const PORT = process.env.PORT || 4321;
const TYPES = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.woff2': 'font/woff2', '.mp4': 'video/mp4', '.ico': 'image/x-icon', '.webmanifest': 'application/manifest+json', '.png': 'image/png', '.jpg': 'image/jpeg', '.xml': 'application/xml', '.txt': 'text/plain' };

createServer(async (req, res) => {
  let p = normalize(decodeURIComponent(new URL(req.url, 'http://x').pathname)).replace(/^(\.\.[/\\])+/, '');
  let f = join(ROOT, p);
  try {
    if ((await stat(f)).isDirectory()) f = join(f, 'index.html');
  } catch {
    try { await stat(f + '.html'); f += '.html'; } catch { f = null; }
  }
  try {
    if (!f) throw 0;
    const body = await readFile(f);
    const type = TYPES[extname(f)] || 'application/octet-stream';
    // Byte ranges (needed for video playback, esp. Safari)
    const m = /^bytes=(\d*)-(\d*)$/.exec(req.headers.range || '');
    if (m) {
      const start = m[1] ? +m[1] : body.length - +m[2];
      const end = m[1] && m[2] ? Math.min(+m[2], body.length - 1) : body.length - 1;
      res.writeHead(206, { 'Content-Type': type, 'Accept-Ranges': 'bytes', 'Content-Range': `bytes ${start}-${end}/${body.length}`, 'Content-Length': end - start + 1 });
      return res.end(body.subarray(start, end + 1));
    }
    res.writeHead(200, { 'Content-Type': type, 'Accept-Ranges': 'bytes' });
    res.end(body);
  } catch {
    res.writeHead(404, { 'Content-Type': TYPES['.html'] });
    res.end(await readFile(join(ROOT, '404.html')).catch(() => 'Not found'));
  }
}).listen(PORT, () => console.log(`→ http://localhost:${PORT}`));
