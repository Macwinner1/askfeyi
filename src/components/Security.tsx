import { ShieldCheck, ShieldOff, Smartphone } from 'lucide-react'
import { Reveal } from './motion/Reveal'
import { site } from '@/lib/site'

export function Security() {
  return (
    <section id="security" className="relative bg-foreground py-24 text-background lg:py-32">
      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="border-b border-background/15 pb-10 md:border-b-0 md:border-r md:pb-0 md:pr-12 lg:pr-16">
              <Reveal y={20}>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-destructive/20 bg-destructive/[0.06] px-4 py-1.5 text-xs font-medium text-destructive">
                  <Smartphone aria-hidden className="size-3.5" />
                  Lost your phone?
                </div>
                <h2 className="font-display text-3xl font-bold tracking-tight">
                  Secure your {site.name} instantly
                </h2>
                <p className="mt-4 leading-relaxed text-background/65">
                  If your device is ever stolen or compromised, there's no need to
                  panic. Simply tap <strong className="text-background">Instant Block</strong>,
                  and all payment activity will be paused immediately. When you're
                  ready, just tap <strong className="text-background">Unblock</strong> to
                  resume.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-destructive px-6 py-3 text-sm font-semibold text-destructive-foreground transition-colors hover:bg-destructive/90"
                  >
                    <ShieldOff aria-hidden className="size-4" />
                    Block account
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-background/25 px-6 py-3 text-sm font-medium transition-colors hover:bg-background/10"
                  >
                    <ShieldCheck aria-hidden className="size-4 text-background" />
                    Unblock account
                  </button>
                </div>
              </Reveal>
            </div>

            <div className="pt-10 md:pl-12 md:pt-0 lg:pl-16">
              <Reveal delay={0.15} y={20}>
                <span className="text-xs font-medium uppercase tracking-widest text-primary">
                  Security
                </span>
                <h3 className="section-heading mt-4">
                  Protected by <span className="text-primary">design</span>
                </h3>
                <ul className="mt-8 space-y-5">
                  {[
                    {
                      title: 'Explicit confirmation',
                      desc: 'Every transaction requires your approval. Nothing moves without it.',
                    },
                    {
                      title: 'End-to-end encryption',
                      desc: `Because ${site.name} runs on WhatsApp, your chats carry 256-bit encryption.`,
                    },
                    {
                      title: 'CBN-licensed partners',
                      desc: 'Your funds are held by regulated banking partners, not by us.',
                    },
                  ].map((item) => (
                    <li key={item.title} className="flex gap-4">
                      <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-background/10">
                        <ShieldCheck aria-hidden className="size-4 text-background" />
                      </div>
                      <div>
                        <p className="font-display text-sm font-semibold">
                          {item.title}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-background/65">
                          {item.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
