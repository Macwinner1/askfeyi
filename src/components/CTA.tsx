import { ArrowRight } from 'lucide-react'
import * as motion from 'motion/react-m'
import { site } from '@/lib/site'

/** A spring with enough overshoot to read as a bounce, not a wobble. */
const bounce = {
  type: 'spring' as const,
  stiffness: 380,
  damping: 13,
  mass: 0.9,
}

const settle = { ...bounce, damping: 20 }

export function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-border py-28 lg:py-40">
      <div className="container relative mx-auto px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 26, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '0px 0px -12% 0px' }}
          transition={bounce}
          className="max-w-[14ch] font-display text-[clamp(2.2rem,5vw,3.75rem)] font-extrabold leading-[1.0] tracking-[-0.035em]"
        >
          Your first payment is one message away.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -12% 0px' }}
          transition={{ ...settle, delay: 0.08 }}
          className="mt-6 max-w-[44ch] text-lg leading-relaxed text-muted-foreground"
        >
          No app to install and no forms to fill. Save the number, send Feyi a
          message, and pay whoever you owe before you finish your coffee.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '0px 0px -12% 0px' }}
          transition={{ ...bounce, delay: 0.16 }}
          className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
        >
          <motion.a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={bounce}
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground"
          >
            {site.ctaLabel}
            <ArrowRight
              aria-hidden
              className="size-4 transition-transform group-hover:translate-x-0.5"
            />
          </motion.a>
          <span className="font-mono text-xs text-muted-foreground">
            Free to start. Every transaction needs your yes.
          </span>
        </motion.div>
      </div>
    </section>
  )
}
