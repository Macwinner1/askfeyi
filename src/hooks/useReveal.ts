import { useEffect, useRef, useState } from 'react'

/**
 * Reveals an element the first time it scrolls into view — the React
 * equivalent of the <Transition appear> pattern the design uses.
 *
 * Reveal-on-scroll hides content by default, so it fails badly if the
 * observer never fires (fast programmatic scrolling, restored scroll
 * position, no IntersectionObserver). Two guards prevent that:
 *   - anything already in view (or scrolled past) at mount is revealed
 *     immediately, so a restored scroll position never lands on a blank page;
 *   - reduced-motion and missing-IntersectionObserver both fall back to
 *     rendering the content outright.
 */

export function useReveal<T extends HTMLElement = HTMLDivElement>(
  rootMargin = '0px 0px -10% 0px',
) {
  const ref = useRef<T | null>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    if (shown) return
    const el = ref.current
    if (!el) return

    const reveal = () => setShown(true)

    const reducedMotion = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (reducedMotion || !('IntersectionObserver' in window)) {
      reveal()
      return
    }

    // Already on screen, or above it — don't wait for a scroll event.
    if (el.getBoundingClientRect().top < window.innerHeight) {
      reveal()
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) reveal()
      },
      { rootMargin, threshold: 0.05 },
    )
    observer.observe(el)

    return () => observer.disconnect()
  }, [rootMargin, shown])

  return { ref, shown }
}
