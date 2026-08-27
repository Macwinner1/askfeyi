import { site } from '@/lib/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-6 md:flex-row md:gap-10">
            <span className="font-display text-lg font-bold tracking-tight">
              {site.name}
              <span className="text-primary">.</span>
            </span>
            <nav className="flex flex-wrap items-center justify-center gap-6">
              {site.nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
            <p className="text-sm text-muted-foreground">
              © {year} {site.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {site.legal.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
