import { Moon, Sun, Sunrise } from 'lucide-react'
import { Reveal } from './motion/Reveal'
import { Typewriter } from './motion/Typewriter'

const timeline = [
  {
    icon: Sunrise,
    period: 'Morning',
    time: '7:30',
    exchanges: [
      { you: 'Send 2k to Nkechi every Monday', feyi: 'Scheduled. Every Monday at 8:00.' },
      { you: 'Buy 2GB MTN for 08012345678', feyi: '2GB delivered. ₦1,200 debited.' },
    ],
  },
  {
    icon: Sun,
    period: 'Afternoon',
    time: '13:15',
    exchanges: [
      { you: 'Send ₦500 airtime to my staff list', feyi: '4 lines topped up. ₦2,000 total.' },
      { you: 'Pay Emeka 15k, Tunde 8k, Ada 5k', feyi: '3 transfers ready. Confirm?' },
    ],
  },
  {
    icon: Moon,
    period: 'Evening',
    time: '20:45',
    exchanges: [
      { you: "Show me today's spending", feyi: '₦31,200 across 7 payments.' },
      { you: 'Send ₦120k to landlord on Friday', feyi: 'Scheduled for Friday at 9:00.' },
    ],
  },
]

export function DailyLife() {
  return (
    <section id="how-it-works" className="relative py-28">
      <div className="container relative mx-auto px-4 lg:px-8">
        <Reveal>
          <div className="mb-16 text-center">
            <span className="text-xs font-semibold uppercase tracking-widest accent-text">
              How it works
            </span>
            <h2 className="section-heading mt-4">
              Feyi fits your <span className="accent-heading">daily routine</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">
              From morning transfers to evening reports, money that moves at the
              speed of a text message.
            </p>
          </div>
        </Reveal>

        <div className="relative">
          {/* Rail connecting the three stations on desktop. */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-5 hidden h-px bg-border md:block"
          />

          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {timeline.map(({ icon: Icon, period, time, exchanges }, col) => (
              <Reveal key={period} delay={col * 0.12} className="relative">
                <div className="flex items-center gap-3">
                  <span className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-background">
                    <Icon aria-hidden className="size-4 text-foreground" />
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold">{period}</p>
                    <p className="text-xs tabular-nums text-muted-foreground">{time}</p>
                  </div>
                </div>

                <div className="mt-6 space-y-5">
                  {exchanges.map((ex, row) => (
                    <div key={ex.you} className="surface rounded-2xl p-4">
                      {/* Outgoing: the way you would actually type it. */}
                      <p className="ml-auto w-fit max-w-[92%] rounded-2xl rounded-br-sm bg-primary px-3.5 py-2 text-left text-sm text-primary-foreground">
                        <Typewriter
                          text={ex.you}
                          delay={400 + col * 120 + row * 900}
                          speed={30}
                        />
                      </p>
                      <p className="mt-2.5 w-fit max-w-[92%] rounded-2xl rounded-bl-sm bg-muted px-3.5 py-2 text-sm text-muted-foreground">
                        {ex.feyi}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
