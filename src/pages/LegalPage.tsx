import { ArrowLeft } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { site } from '@/lib/site'

export type LegalSection = {
  heading: string
  /** Published prose. Accurate today, but not a complete legal document. */
  body: string[]
  /** NOT rendered — the open items counsel still has to supply. */
  todo?: string[]
}

type Props = {
  title: string
  updated: string
  intro: string
  sections: LegalSection[]
}

export function LegalPage({ title, updated, intro, sections }: Props) {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto max-w-3xl px-4 lg:px-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft aria-hidden className="size-4" />
            Back to {site.name}
          </a>

          <h1 className="section-heading mt-8">{title}</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Last updated: {updated}
          </p>

          <div className="surface mt-8 rounded-xl border-l-2 border-l-primary p-5">
            <p className="text-sm leading-relaxed text-muted-foreground">{intro}</p>
          </div>

          <div className="mt-12 space-y-10">
            {sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-xl font-bold tracking-tight">
                  {section.heading}
                </h2>
                {section.body.map((para) => (
                  <p
                    key={para.slice(0, 40)}
                    className="mt-3 leading-relaxed text-muted-foreground"
                  >
                    {para}
                  </p>
                ))}
              </section>
            ))}
          </div>

          <div className="mt-16 border-t border-border/50 pt-8">
            <p className="text-sm text-muted-foreground">
              Questions about this document? Contact{' '}
              <a
                href={`mailto:${site.legalEmail}`}
                className="text-primary hover:underline"
              >
                {site.legalEmail}
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
