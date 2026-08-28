import {
  BarChart3,
  CalendarClock,
  MessageSquare,
  Send,
  Smartphone,
  Zap,
} from 'lucide-react'
import { Reveal } from './motion/Reveal'

const features = [
  {
    icon: Send,
    title: 'Smart transfers',
    desc: 'AI-powered recipient suggestions and fraud detection. Single or bulk, it just works.',
  },
  {
    icon: CalendarClock,
    title: 'Schedule payments',
    desc: 'Set it and forget it. One-time or recurring transfers with smart reminders.',
  },
  {
    icon: Zap,
    title: 'Pay utility bills',
    desc: 'Pay your electricity bills instantly, without leaving the chat.',
  },
  {
    icon: Smartphone,
    title: 'Airtime and data',
    desc: 'Top up any network instantly. Bulk purchases supported.',
  },
  {
    icon: MessageSquare,
    title: 'Natural chat',
    desc: 'Skip the menus and codes. Use everyday language: type, send an image, or record a voice note.',
  },
  {
    icon: BarChart3,
    title: 'Spending insights',
    desc: 'Ask Feyi where your money went and get a clear summary back.',
  },
]

export function Features() {
  return (
    <section id="features" className="relative py-28">
      <div className="container relative mx-auto px-4 lg:px-8">
        <Reveal>
          <div className="mb-16 text-center">
            <span className="text-xs font-semibold uppercase tracking-widest accent-text">
              Features
            </span>
            <h2 className="section-heading mt-4">
              Everything you need,{' '}
              <span className="accent-heading">nothing you don't</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">
              Powerful financial tools wrapped in the simplicity of a chat message.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 0.05} duration={0.45}>
              <div className="surface-hover h-full rounded-2xl p-7">
                <div className="mb-5 flex size-11 items-center justify-center rounded-xl bg-muted">
                  <Icon aria-hidden className="size-5 text-foreground" />
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
