// Renders every route to its own static HTML file. Crawlers and link
// scrapers (WhatsApp's does not run JS) then see real content, and
// Cloudflare Pages serves /privacy from privacy.html and unmatched paths
// from 404.html with a real 404 status.
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs'
import { pathToFileURL } from 'node:url'

/**
 * Locate the built SSR entry. vite.config.ts pins it to dist-ssr/entry-server.js,
 * but a build plugin can still relocate or hash it, so fall back to a search
 * rather than failing on a hard-coded path.
 */
function findEntry() {
  const pinned = 'dist-ssr/entry-server.js'
  if (existsSync(pinned)) return pinned
  const stack = ['dist-ssr']
  while (stack.length) {
    const dir = stack.pop()
    if (!existsSync(dir)) continue
    for (const item of readdirSync(dir, { withFileTypes: true })) {
      const full = `${dir}/${item.name}`
      if (item.isDirectory()) stack.push(full)
      else if (/^entry-server.*\.js$/.test(item.name)) return full
    }
  }
  throw new Error('prerender: no SSR entry found under dist-ssr/')
}

const entry = findEntry()
const { render } = await import(pathToFileURL(entry).href)
console.log(`prerender: using ${entry}`)

const ROUTES = [
  { path: '/', file: 'index.html', title: 'Feyi. Your finance, inside WhatsApp' },
  {
    path: '/privacy',
    file: 'privacy.html',
    title: 'Privacy Policy | Feyi',
    description: 'How Feyi collects, uses and protects your personal information.',
  },
  {
    path: '/terms',
    file: 'terms.html',
    title: 'Terms of Service | Feyi',
    description: 'The terms that govern your use of Feyi.',
  },
  {
    path: '/404',
    file: '404.html',
    title: 'Page not found | Feyi',
    description: 'That page does not exist.',
    noindex: true,
  },
]

// `vite build` always regenerates dist/index.html with an empty root, and it
// runs immediately before this script, so an exact match is safe.
const template = readFileSync('dist/index.html', 'utf8')
if (!template.includes('<div id="root"></div>')) {
  throw new Error(
    'prerender: dist/index.html has no empty <div id="root"></div>. ' +
      'Run `vite build` immediately before this script.',
  )
}

for (const route of ROUTES) {
  let html = template.replace(
    '<div id="root"></div>',
    `<div id="root">${render(route.path)}</div>`,
  )

  if (route.title) {
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${route.title}</title>`)
  }
  if (route.description) {
    html = html.replace(
      /(<meta\s+name="description"\s+content=")[^"]*(")/s,
      `$1${route.description}$2`,
    )
  }
  // Only the landing page is the canonical entry; sub-pages point at themselves.
  if (route.path !== '/') {
    html = html.replace(
      /(<link rel="canonical" href=")[^"]*(")/,
      `$1https://askfeyi.com${route.path}$2`,
    )
  }
  if (route.noindex) {
    html = html.replace('</head>', '  <meta name="robots" content="noindex" />\n  </head>')
  }

  writeFileSync(`dist/${route.file}`, html)
  console.log(`prerendered ${route.path.padEnd(9)} -> dist/${route.file}`)
}
