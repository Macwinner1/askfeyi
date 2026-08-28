import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { site } from '@/lib/site'

export function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[70vh] items-center pt-24">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <span className="font-display text-sm font-medium uppercase tracking-widest text-primary">
            404
          </span>
          <h1 className="section-heading mt-4">
            This page doesn't <span className="accent-heading">exist</span>
          </h1>
          <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">
            The link may be broken, or the page may have moved.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/"
              className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Back to home
            </a>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-7 py-3.5 text-sm font-medium transition-colors hover:bg-muted"
            >
              Message {site.name} on WhatsApp
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
