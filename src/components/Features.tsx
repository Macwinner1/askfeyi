import { Reveal } from './motion/Reveal'

const jobs = [
  {
    n: 'Bulk',
    title: 'Pay everybody in one message',
    body: 'Name them and the amounts in a single line. Feyi lays out who gets what, totals it, and sends every one of them their own receipt once you approve.',
    example: 'Pay Emeka 15k, Tunde 8k, Ada 5k',
  },
  {
    n: 'Standing',
    title: 'Money that goes out without you',
    body: 'Rent on the last Friday. Salaries on the 28th. Data for the team every Monday. Tell Feyi once and it holds the schedule, then tells you before it runs.',
    example: 'Send ₦120k to landlord every last Friday',
  },
  {
    n: 'Ledger',
    title: 'Ask where the money went',
    body: 'No dashboard to learn. Ask in the chat and Feyi answers with the figure and the breakdown behind it, for today, this week, or one person.',
    example: 'How much did I send Emeka this month?',
  },
]

export function Features() {
  return (
    <section id="features" className="border-t border-border py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <h2 className="max-w-[18ch] font-display text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-[1.02] tracking-[-0.03em]">
            Three things people actually use it for.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px bg-border lg:grid-cols-3">
          {jobs.map((job, i) => (
            <Reveal key={job.title} delay={i * 0.07} className="bg-background">
              <div className="flex h-full flex-col gap-4 py-8 lg:px-8 lg:first:pl-0">
                <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] accent-text">
                  {job.n}
                </span>
                <h3 className="font-display text-xl font-bold leading-snug tracking-[-0.01em]">
                  {job.title}
                </h3>
                <p className="text-[0.95rem] leading-relaxed text-muted-foreground">
                  {job.body}
                </p>
                <p className="mt-auto pt-2">
                  <code className="font-mono text-[0.78rem] leading-relaxed text-foreground">
                    &ldquo;{job.example}&rdquo;
                  </code>
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
