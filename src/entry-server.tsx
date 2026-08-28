import { renderToString } from 'react-dom/server'
import App from './App'

/** Called at build time by scripts/prerender.mjs, once per route. */
export function render(path: string) {
  return renderToString(<App path={path} />)
}
