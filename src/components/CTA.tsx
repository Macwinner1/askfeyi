import { ArrowRight } from 'lucide-react'
import { Reveal } from './Reveal'
import { site } from '@/lib/site'

export function CTA() {
  return (
    <section className="relative overflow-hidden py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.05] blur-[130px]"
      />

      <div className="container relative mx-auto px-4 text-center lg:px-8">
        <Reveal duration={600} distance={8}>
          <h2 className="section-heading">
            Ready to bank on <span className="gradient-text">WhatsApp?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Ready to manage your finance on WhatsApp? Join hundreds who are already
            financing smarter. Start today — it's fast, reliable and secure.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              {site.ctaLabel}
              <ArrowRight
                aria-hidden
                className="size-4 transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <span className="text-xs text-muted-foreground">
              Free to start · 256-bit encryption
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
