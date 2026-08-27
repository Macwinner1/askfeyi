import {
  BarChart3,
  CalendarClock,
  MessageSquare,
  Send,
  Smartphone,
  Zap,
} from 'lucide-react'
import { Reveal } from './Reveal'

const features = [
  {
    icon: Send,
    title: 'Smart Transfers',
    desc: 'AI-powered recipient suggestions and fraud detection. Single or bulk — it just works.',
    accent: 'group-hover:shadow-emerald-500/10',
  },
  {
    icon: CalendarClock,
    title: 'Schedule Payments',
    desc: 'Set it and forget it. One-time or recurring transfers with smart reminders.',
    accent: 'group-hover:shadow-sky-500/10',
  },
  {
    icon: Zap,
    title: 'Pay Utility Bills',
    desc: 'Electricity — pay your bills instantly.',
    accent: 'group-hover:shadow-amber-500/10',
  },
  {
    icon: Smartphone,
    title: 'Airtime & Data',
    desc: 'Top up any network instantly. Bulk purchases supported.',
    accent: 'group-hover:shadow-purple-500/10',
  },
  {
    icon: MessageSquare,
    title: 'Natural Chat',
    desc: 'Skip the menus and codes. Just use your natural language — type, send an image, or record a voice note.',
    accent: 'group-hover:shadow-pink-500/10',
  },
  {
    icon: BarChart3,
    title: 'Spending Insights',
    desc: 'Ask Feyi about your spending. Get summaries.',
    accent: 'group-hover:shadow-cyan-500/10',
  },
]

export function Features() {
  return (
    <section id="features" className="relative py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 size-[400px] rounded-full bg-primary/[0.04] blur-[120px]"
      />

      <div className="container relative mx-auto px-4 lg:px-8">
        <Reveal>
          <div className="mb-20 text-center">
            <span className="text-xs font-medium uppercase tracking-widest text-primary">
              Features
            </span>
            <h2 className="section-heading mt-4">
              Everything you need,{' '}
              <span className="gradient-text">nothing you don't</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">
              Powerful financial tools wrapped in the simplicity of a chat message
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc, accent }, i) => (
            <Reveal key={title} delay={i * 60} duration={400} distance={6}>
              <div className={`group glass-card-hover h-full rounded-2xl p-7 ${accent}`}>
                <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                  <Icon aria-hidden className="size-5 text-primary" />
                </div>
                <h3 className="mb-2 font-display text-lg font-bold">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
