import {
  BarChart3,
  CalendarClock,
  Moon,
  Send,
  Smartphone,
  Sun,
  Sunrise,
  Users,
} from 'lucide-react'
import { Reveal } from './Reveal'

const timeline = [
  {
    icon: Sunrise,
    period: 'Morning',
    gradient: 'from-amber-500/10 to-orange-500/10',
    iconColor: 'text-amber-400',
    items: [
      {
        icon: Send,
        title: 'Scheduled Transfer',
        desc: '₦2,000 to Nkechi weekly',
        cmd: '"Send 2k to Nkechi every Monday"',
      },
      {
        icon: Smartphone,
        title: 'Data Purchase',
        desc: 'Buy 2GB data for the day',
        cmd: '"Buy 2GB MTN for 08012345678"',
      },
    ],
  },
  {
    icon: Sun,
    period: 'Afternoon',
    gradient: 'from-sky-500/10 to-blue-500/10',
    iconColor: 'text-sky-400',
    items: [
      {
        icon: Users,
        title: 'Bulk Airtime',
        desc: 'Top up your 4 staff phones',
        cmd: '"Send ₦500 airtime to my staff list"',
      },
      {
        icon: Send,
        title: 'Bulk Transfer',
        desc: 'Pay 3 vendors at once',
        cmd: '"Pay Emeka 15k, Tunde 8k, Ada 5k"',
      },
    ],
  },
  {
    icon: Moon,
    period: 'Evening',
    gradient: 'from-purple-500/10 to-indigo-500/10',
    iconColor: 'text-purple-400',
    items: [
      {
        icon: BarChart3,
        title: 'Spending Summary',
        desc: '"What did I spend today?"',
        cmd: '"Show me today\'s spending"',
      },
      {
        icon: CalendarClock,
        title: 'Schedule for Friday',
        desc: 'Rent due? Schedule it now',
        cmd: '"Send ₦120k to landlord on Friday"',
      },
    ],
  },
]

export function DailyLife() {
  return (
    <section id="how-it-works" className="relative py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 size-[300px] rounded-full bg-primary/[0.03] blur-[100px]"
      />

      <div className="container relative mx-auto px-4 lg:px-8">
        <Reveal>
          <div className="mb-20 text-center">
            <span className="text-xs font-medium uppercase tracking-widest text-primary">
              How it works
            </span>
            <h2 className="section-heading mt-4">
              Feyi fits your <span className="gradient-text">daily routine</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">
              From morning transfers to evening reports — financial services that
              flow with your day
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {timeline.map(({ icon: Icon, period, gradient, iconColor, items }, i) => (
            <Reveal key={period} delay={i * 150} distance={6}>
              <div className="space-y-4">
                <div
                  className={`mb-4 inline-flex items-center gap-3 rounded-full bg-gradient-to-r px-4 py-2 ${gradient}`}
                >
                  <Icon aria-hidden className={`size-4 ${iconColor}`} />
                  <span className="font-display text-sm font-semibold">{period}</span>
                </div>

                {items.map((item) => (
                  <div
                    key={item.title + item.cmd}
                    className="glass-card-hover space-y-3 rounded-xl p-5"
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10">
                        <item.icon aria-hidden className="size-4 text-primary" />
                      </div>
                      <span className="font-display text-sm font-semibold">
                        {item.title}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                    <code className="block rounded-lg bg-muted px-3 py-2 font-mono text-xs text-muted-foreground">
                      {item.cmd}
                    </code>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
