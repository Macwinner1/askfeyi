// Renders every route to its own static HTML file. Crawlers and link
// scrapers (WhatsApp's does not run JS) then see real content, and
// Cloudflare Pages serves /privacy from privacy.html and unmatched paths
// from 404.html with a real 404 status.
import { readFileSync, writeFileSync } from 'node:fs'
import { render } from '../dist-ssr/entry-server.js'

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

const template = readFileSync('dist/index.html', 'utf8')
if (!template.includes('<div id="root"></div>')) {
  throw new Error('prerender: root placeholder missing from dist/index.html')
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
