// Serves dist/ the way Cloudflare Pages does: exact file, then <path>.html,
// then 404.html with a real 404 status. `vite preview` falls back to
// index.html for everything, which misrepresents how the deploy behaves.
import { createServer } from 'node:http'
import { readFileSync, existsSync, statSync } from 'node:fs'
import { extname, join, normalize } from 'node:path'

const ROOT = new URL('../dist/', import.meta.url).pathname
const PORT = Number(process.env.PORT) || 4173
const TYPES = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.png': 'image/png', '.svg': 'image/svg+xml', '.woff2': 'font/woff2',
  '.xml': 'text/xml', '.txt': 'text/plain', '.ico': 'image/x-icon',
}

createServer((req, res) => {
  const path = normalize(decodeURIComponent(req.url.split('?')[0])).replace(/^(\.\.[/\\])+/, '')
  const candidates = [
    join(ROOT, path),
    join(ROOT, path, 'index.html'),
    join(ROOT, path.replace(/\/$/, '') + '.html'),
  ]
  for (const file of candidates) {
    if (existsSync(file) && statSync(file).isFile()) {
      res.writeHead(200, { 'content-type': TYPES[extname(file)] ?? 'application/octet-stream' })
      return res.end(readFileSync(file))
    }
  }
  res.writeHead(404, { 'content-type': 'text/html' })
  res.end(readFileSync(join(ROOT, '404.html')))
}).listen(PORT, () => {
  console.log(`\n  Serving dist/ with Cloudflare Pages routing\n  → http://localhost:${PORT}/\n`)
})
