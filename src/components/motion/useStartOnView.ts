import { useEffect, useRef, useState } from 'react'

/**
 * Fires once when an element is on screen.
 *
 * Deliberately not motion's useInView: these animations sit inside <Reveal>
 * wrappers that animate translateY on the compositor, and IntersectionObserver
 * does not reliably re-evaluate for compositor-driven transforms. An element
 * parked near the trigger boundary could stay untriggered until a real scroll.
 *
 * So: check the rect up front and start immediately if it is already visible,
 * and observe with no shrinking margin for everything below the fold.
 */
export function useStartOnView<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (started) return
    const el = ref.current
    if (!el) return

    if (!('IntersectionObserver' in window)) {
      setStarted(true)
      return
    }

    // Already on screen (or scrolled past)? Start now, don't wait for a scroll.
    if (el.getBoundingClientRect().top < window.innerHeight) {
      setStarted(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true)
      },
      { threshold: 0 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [started])

  return { ref, started }
}
