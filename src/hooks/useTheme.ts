import { useCallback, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'
const KEY = 'feyi-theme'

function resolve(): Theme {
  if (typeof window === 'undefined') return 'dark'
  const stored = localStorage.getItem(KEY)
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(resolve)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem(KEY, theme)
  }, [theme])

  const toggle = useCallback(
    () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
    [],
  )

  return { theme, toggle }
}
