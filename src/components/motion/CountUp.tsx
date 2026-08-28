import { useEffect, useState } from 'react'
import { animate, useReducedMotion } from 'motion/react'
import { useStartOnView } from './useStartOnView'

type Props = {
  /** Full label, e.g. "₦100k+", "99.9%", "<3s". */
  value: string
  duration?: number
  className?: string
}

/** Splits a label so "₦100k+" counts 0 to 100 while keeping its affixes. */
function parse(value: string) {
  const match = value.match(/-?\d+(?:\.\d+)?/)
  if (!match || match.index === undefined) return null
  const raw = match[0]
  return {
    prefix: value.slice(0, match.index),
    suffix: value.slice(match.index + raw.length),
    target: parseFloat(raw),
    decimals: raw.includes('.') ? raw.split('.')[1].length : 0,
  }
}

export function CountUp({ value, duration = 1.8, className }: Props) {
  const { ref, started } = useStartOnView<HTMLSpanElement>()
  const reduced = useReducedMotion()
  const parsed = parse(value)
  const [display, setDisplay] = useState(() =>
    parsed ? `${parsed.prefix}${(0).toFixed(parsed.decimals)}${parsed.suffix}` : value,
  )

  useEffect(() => {
    if (!parsed || !started) return
    if (reduced) {
      setDisplay(value)
      return
    }
    const controls = animate(0, parsed.target, {
      duration,
      // Linear on purpose. Eased curves deliver most of the value in the first
      // fraction of the run (an expo-out curve is at ~50% by 10% of the time),
      // so the number appears near its target and then crawls. A constant
      // climb is what actually reads as counting.
      ease: 'linear',
      onUpdate: (v) =>
        setDisplay(`${parsed.prefix}${v.toFixed(parsed.decimals)}${parsed.suffix}`),
    })
    return () => controls.stop()
    // parsed is derived from `value`, already a dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, reduced, value, duration])

  if (!parsed) return <span className={className}>{value}</span>

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
