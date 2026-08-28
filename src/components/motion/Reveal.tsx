import type { ReactNode } from 'react'
import * as motion from 'motion/react-m'

type Props = {
  children: ReactNode
  delay?: number
  /** travel distance in px */
  y?: number
  duration?: number
  className?: string
}

/**
 * Fades and lifts content the first time it scrolls into view.
 *
 * Uses the `m` component rather than `motion`, so the animation features are
 * code-split and loaded by the LazyMotion provider in App instead of being
 * pulled into the main bundle.
 */
export function Reveal({
  children,
  delay = 0,
  y = 16,
  duration = 0.5,
  className,
}: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration, delay, ease: [0.21, 0.5, 0.35, 1] }}
    >
      {children}
    </motion.div>
  )
}
