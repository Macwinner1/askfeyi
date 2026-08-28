import { useLayoutEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'motion/react'
import { useStartOnView } from './useStartOnView'

type Props = {
  text: string
  /** ms per character */
  speed?: number
  delay?: number
  className?: string
}

/**
 * Types text out once it is on screen.
 *
 * Renders the COMPLETE string on the server and on the first client render, so
 * the prerendered HTML is readable without JS and hydration matches. A layout
 * effect then clears it before the browser paints, so typing starts with no
 * flash of the finished text.
 */
export function Typewriter({ text, speed = 30, delay = 300, className }: Props) {
  const { ref, started } = useStartOnView<HTMLSpanElement>()
  const reduced = useReducedMotion()
  const [count, setCount] = useState(text.length)
  const armed = useRef(false)

  useLayoutEffect(() => {
    if (armed.current || reduced) return
    armed.current = true
    setCount(0)
  }, [reduced])

  useLayoutEffect(() => {
    if (!started || reduced) return
    let i = 0
    let timer: ReturnType<typeof setTimeout>
    const start = setTimeout(function step() {
      i += 1
      setCount(i)
      if (i < text.length) timer = setTimeout(step, speed)
    }, delay)
    return () => {
      clearTimeout(start)
      clearTimeout(timer)
    }
  }, [started, reduced, text, speed, delay])

  const typing = armed.current && started && count < text.length

  return (
    <span
      ref={ref}
      className={`${className ?? ''} ${typing ? 'caret' : ''}`}
      /* Screen readers get the whole string, not one character at a time. */
      aria-label={text}
    >
      <span aria-hidden>{text.slice(0, count)}</span>
    </span>
  )
}
