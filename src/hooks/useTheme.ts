import { useCallback, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'
const KEY = 'feyi-theme'

function resolve(): Theme {
  const stored = localStorage.getItem(KEY)
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

/**
 * The inline script in index.html has already put the right class on <html>
 * before first paint. This hook only takes over afterwards.
 *
 * State starts at a fixed value so the server render and the first client
 * render agree — reading localStorage during render would break hydration.
 * `mounted` lets the toggle hold its space until the real value is known.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    try {
      setTheme(resolve())
    } catch {
      /* storage blocked — keep the default */
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    document.documentElement.classList.toggle('dark', theme === 'dark')
    try {
      localStorage.setItem(KEY, theme)
    } catch {
      /* storage blocked — theme still applies for this session */
    }
  }, [theme, mounted])

  const toggle = useCallback(
    () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
    [],
  )

  return { theme, toggle, mounted }
}
