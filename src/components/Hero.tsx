import { ArrowRight, Clock, Shield, Zap } from 'lucide-react'
import { Reveal } from './motion/Reveal'
import { CountUp } from './motion/CountUp'
import { site } from '@/lib/site'

const trust = [
  { icon: Shield, text: 'Bank-grade security' },
  { icon: Zap, text: 'Instant transfers' },
  { icon: Clock, text: '24/7 available' },
]

const stats = [
  { value: '50+', label: 'Active users' },
  { value: '₦100k+', label: 'Processed daily' },
  { value: '99.9%', label: 'Uptime' },
  { value: '<3s', label: 'Response time' },
]

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20">
      <div className="grid-bg absolute inset-0 z-0" aria-hidden />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <Reveal y={10}>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-xs font-medium">
                <span className="size-1.5 rounded-full bg-primary" />
                WhatsApp AI finance. Now live.
              </div>
            </Reveal>

            <Reveal delay={0.08} duration={0.6}>
              <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Your finance,
                <br className="hidden sm:block" /> inside{' '}
                <span className="accent-heading">WhatsApp</span>
              </h1>
            </Reveal>

            <Reveal delay={0.16} duration={0.6}>
              <p className="mt-6 max-w-lg mx-auto text-lg leading-relaxed text-muted-foreground sm:text-xl lg:mx-0">
                Send money, pay bills and buy airtime through a simple WhatsApp
                chat. No downloads. No forms. Just text, images or voice.
              </p>
            </Reveal>

            <Reveal delay={0.24} duration={0.6}>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start justify-center">
                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  {site.ctaLabel}
                  <ArrowRight
                    aria-hidden
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                  />
                </a>
                <a
                  href="/#how-it-works"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium transition-colors hover:bg-muted"
                >
                  See how it works
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.34} duration={0.6}>
              <ul className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
                {trust.map(({ icon: Icon, text }) => (
                  <li
                    key={text}
                    className="flex items-center gap-2 text-xs text-muted-foreground"
                  >
                    <Icon aria-hidden className="size-3.5 text-foreground" />
                    {text}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.2} duration={0.7} y={24}>
            <div className="mx-auto w-full max-w-sm">
              <div className="surface rounded-3xl p-6">
                <div className="mb-5 flex items-center gap-3 border-b border-border pb-4">
                  <div className="flex size-9 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">
                    {site.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold">{site.name}</p>
                    <p className="text-[11px] accent-text">online</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-primary px-4 py-2.5 text-sm text-primary-foreground">
                    Send ₦100 to Mom
                  </div>
                  <div className="w-fit max-w-[90%] rounded-2xl rounded-bl-sm bg-muted px-4 py-2.5 text-sm">
                    <p className="font-semibold">₦50,000 sent</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Just now to Nkechi
                    </p>
                    <p className="mt-2 text-xs font-semibold accent-text">Verified</p>
                  </div>
                  <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-primary px-4 py-2.5 text-sm text-primary-foreground">
                    Pay electricity bill
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} duration={0.6}>
          <dl className="mt-24 grid grid-cols-2 gap-8 border-t border-border pt-12 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <CountUp
                    value={stat.value}
                    className="block font-display text-3xl font-bold tracking-tight tabular-nums"
                  />
                  <span className="mt-1 block text-xs text-muted-foreground">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
