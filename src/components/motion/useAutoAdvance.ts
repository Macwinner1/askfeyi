import { useCallback, useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'motion/react'
import { useStartOnView } from './useStartOnView'

type Options = { count: number; dwell?: number }

/**
 * Steps through a set of panels on a timer, exposing 0..1 progress for the
 * active one so a bar can fill in step with it.
 *
 * Only runs once the group is on screen, pauses while the pointer or keyboard
 * focus is inside it, and reports `enabled: false` under reduced motion so the
 * caller can render every panel at once instead.
 */
export function useAutoAdvance({ count, dwell = 6000 }: Options) {
  const { ref, started } = useStartOnView<HTMLDivElement>()
  const reduced = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [paused, setPaused] = useState(false)
  const frame = useRef<number>(0)
  const origin = useRef<number>(0)

  const select = useCallback((i: number) => {
    setIndex(i)
    setProgress(0)
    origin.current = 0
  }, [])

  useEffect(() => {
    if (reduced || !started || paused) return

    let raf = 0
    const step = (now: number) => {
      if (!origin.current) origin.current = now - progress * dwell
      const elapsed = now - origin.current
      const pct = Math.min(elapsed / dwell, 1)
      setProgress(pct)
      if (pct >= 1) {
        origin.current = 0
        setProgress(0)
        setIndex((i) => (i + 1) % count)
      }
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    frame.current = raf
    return () => cancelAnimationFrame(raf)
    // progress is intentionally excluded: it is the value this loop produces
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced, started, paused, index, count, dwell])

  const holdProps = {
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
    onFocusCapture: () => setPaused(true),
    onBlurCapture: () => setPaused(false),
  }

  return { ref, index, progress, select, enabled: !reduced, holdProps }
}
