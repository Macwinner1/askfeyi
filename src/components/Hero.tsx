import { ArrowRight, Clock, Shield, Zap } from 'lucide-react'
import { Reveal } from './Reveal'
import { site } from '@/lib/site'

const trust = [
  { icon: Shield, text: 'Bank-grade Security' },
  { icon: Zap, text: 'Instant Transfers' },
  { icon: Clock, text: '24/7 Available' },
]

const stats = [
  { value: '50+', label: 'Active Users' },
  { value: '₦100k+', label: 'Processed Daily' },
  { value: '99.9%', label: 'Uptime' },
  { value: '<3s', label: 'Response Time' },
]

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-20">
      <div className="grid-bg absolute inset-0 z-0" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute top-20 left-1/4 size-[500px] rounded-full bg-primary/[0.04] blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-20 right-1/4 size-[400px] rounded-full bg-primary/[0.03] blur-[100px]"
      />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* ---- Copy ---- */}
          <div className="text-center lg:text-left">
            <Reveal distance={4}>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                <span className="size-1.5 animate-pulse rounded-full bg-primary" />
                WhatsApp AI Finance — Now Live
              </div>
            </Reveal>

            <Reveal delay={100} duration={600}>
              <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Your Finance,
                <br className="hidden sm:block" /> inside{' '}
                <span className="gradient-text">WhatsApp</span>
              </h1>
            </Reveal>

            <Reveal delay={200} duration={600}>
              <p className="mt-6 max-w-lg mx-auto text-lg leading-relaxed text-muted-foreground sm:text-xl lg:mx-0">
                Send money, pay bills, buy airtime — all through a simple WhatsApp
                chat. No downloads. No forms. Just text, images or voice.
              </p>
            </Reveal>

            <Reveal delay={300} duration={600}>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start justify-center">
                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  {site.ctaLabel}
                  <ArrowRight
                    aria-hidden
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                  />
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium transition-colors hover:bg-muted"
                >
                  See how it works
                </a>
              </div>
            </Reveal>

            <Reveal delay={500} duration={600}>
              <ul className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
                {trust.map(({ icon: Icon, text }) => (
                  <li
                    key={text}
                    className="flex items-center gap-2 text-xs text-muted-foreground"
                  >
                    <Icon aria-hidden className="size-3.5 text-primary" />
                    {text}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* ---- Chat mock ---- */}
          <Reveal delay={300} duration={800} distance={8}>
            <div className="relative mx-auto w-full max-w-sm">
              <div className="glass-card-hover animate-float rounded-3xl p-6">
                <div className="mb-5 flex items-center gap-3 border-b border-border/50 pb-4">
                  <div className="flex size-9 items-center justify-center rounded-full bg-primary/10 font-display text-sm font-bold text-primary">
                    {site.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold">{site.name}</p>
                    <p className="text-[11px] text-primary">online</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-primary px-4 py-2.5 text-sm text-primary-foreground">
                    Send ₦100 to Mom
                  </div>
                  <div className="w-fit max-w-[90%] rounded-2xl rounded-bl-sm bg-muted px-4 py-2.5 text-sm">
                    <p className="font-medium">₦50,000 sent</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Just now · to Nkechi
                    </p>
                    <p className="mt-2 text-xs font-medium text-primary">Verified ✓</p>
                  </div>
                  <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-primary px-4 py-2.5 text-sm text-primary-foreground">
                    Pay electricity bill
                  </div>
                </div>
              </div>

              <div
                aria-hidden
                className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-primary/[0.06] blur-3xl"
              />
            </div>
          </Reveal>
        </div>

        {/* ---- Stats ---- */}
        <Reveal delay={600} duration={600}>
          <dl className="mt-24 grid grid-cols-2 gap-8 border-t border-border/50 pt-12 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-3xl font-bold tracking-tight">
                    {stat.value}
                  </span>
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
