import { ArrowRight } from 'lucide-react'
import { Reveal } from './motion/Reveal'
import { site } from '@/lib/site'

export function CTA() {
  return (
    <section className="relative overflow-hidden py-28">

      <div className="container relative mx-auto px-4 text-center lg:px-8">
        <Reveal duration={0.6} y={32}>
          <h2 className="section-heading">
            Ready to bank on <span className="accent-heading">WhatsApp?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Ready to manage your finance on WhatsApp? Join hundreds who are already
            financing smarter. Start today. It's fast, reliable and secure.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {site.ctaLabel}
              <ArrowRight
                aria-hidden
                className="size-4 transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <span className="text-xs text-muted-foreground">
              Free to start. 256-bit encryption.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
