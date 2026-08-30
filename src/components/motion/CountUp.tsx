import { useEffect, useState } from 'react'
import { animate, useReducedMotion } from 'motion/react'
import { useStartOnView } from './useStartOnView'

type Props = {
  /** Full label, e.g. "₦100k+", "99.9%", "<3s". */
  value: string
  duration?: number
  /** ms to wait after the element is on screen */
  delay?: number
  className?: string
}

/** Splits a label so "₦100k+" counts 0 to 100 while keeping its affixes. */
function parse(value: string) {
  const match = value.match(/-?[\d,]*\d(?:\.\d+)?/)
  if (!match || match.index === undefined) return null
  const raw = match[0]
  const decimals = raw.includes('.') ? raw.split('.')[1].length : 0
  return {
    prefix: value.slice(0, match.index),
    suffix: value.slice(match.index + raw.length),
    target: parseFloat(raw.replace(/,/g, '')),
    decimals,
    grouped: raw.includes(','),
    /** How many distinct values the eye will actually see. */
    steps: Math.round(Math.abs(parseFloat(raw.replace(/,/g, ''))) * 10 ** decimals),
  }
}

const group = (s: string) => s.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

function format(n: number, p: NonNullable<ReturnType<typeof parse>>) {
  const fixed = n.toFixed(p.decimals)
  if (!p.grouped) return `${p.prefix}${fixed}${p.suffix}`
  const [whole, frac] = fixed.split('.')
  return `${p.prefix}${group(whole)}${frac ? '.' + frac : ''}${p.suffix}`
}

/**
 * Counting is sold by how many distinct values tick past, not by the easing.
 * An eased curve spends most of its time within a hair of the target, so the
 * number appears near-final and then crawls. Linear at a constant rate reads
 * as counting.
 *
 * Below MIN_STEPS there are too few values for any curve to look like counting
 * (a "<3s" would show 0, 1, 2, 3 and read as a stutter), so those render at
 * their final value straight away.
 */
const MIN_STEPS = 12

export function CountUp({ value, duration = 1.8, delay = 0, className }: Props) {
  const { ref, started } = useStartOnView<HTMLSpanElement>()
  const reduced = useReducedMotion()
  const parsed = parse(value)
  const animates = !!parsed && parsed.steps >= MIN_STEPS
  const [display, setDisplay] = useState(() =>
    parsed && animates ? format(0, parsed) : value,
  )

  useEffect(() => {
    if (!parsed || !animates || !started) return
    if (reduced) {
      setDisplay(value)
      return
    }
    const timer = setTimeout(() => {
      const controls = animate(0, parsed.target, {
        duration,
        ease: 'linear',
        onUpdate: (v) => setDisplay(format(v, parsed)),
      })
      stop = () => controls.stop()
    }, delay)
    let stop = () => {}
    return () => {
      clearTimeout(timer)
      stop()
    }
    // parsed derives from `value`, already a dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, reduced, value, duration, delay, animates])

  if (!parsed) return <span className={className}>{value}</span>

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
