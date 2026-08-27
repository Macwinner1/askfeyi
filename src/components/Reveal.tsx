import type { ReactNode } from 'react'
import { useReveal } from '@/hooks/useReveal'
import { cn } from '@/lib/cn'

type Props = {
  children: ReactNode
  /** ms to stagger this item behind its siblings */
  delay?: number
  /** how far it travels on the way in */
  distance?: 4 | 5 | 6 | 8
  duration?: 400 | 500 | 600 | 800
  className?: string
}

const FROM: Record<number, string> = {
  4: 'translate-y-4',
  5: 'translate-y-5',
  6: 'translate-y-6',
  8: 'translate-y-8',
}

export function Reveal({
  children,
  delay = 0,
  distance = 5,
  duration = 500,
  className,
}: Props) {
  const { ref, shown } = useReveal()

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
      className={cn(
        'transition-all ease-out motion-reduce:transition-none',
        shown ? 'opacity-100 translate-y-0' : `opacity-0 ${FROM[distance]}`,
        className,
      )}
    >
      {children}
    </div>
  )
}
