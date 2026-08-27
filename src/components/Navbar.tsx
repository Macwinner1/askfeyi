import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { site } from '@/lib/site'
import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/lib/cn'

export function Navbar() {
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'glass-card-navbar border-b border-border/50' : 'bg-transparent',
      )}
    >
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        <a href="#" className="font-display text-xl font-bold tracking-tight">
          {site.name}
          <span className="text-primary">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            {theme === 'dark' ? (
              <Sun className="size-4" aria-hidden />
            ) : (
              <Moon className="size-4" aria-hidden />
            )}
          </button>

          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex"
          >
            {site.ctaLabel}
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:hidden"
          >
            {menuOpen ? <X className="size-4" aria-hidden /> : <Menu className="size-4" aria-hidden />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="glass-card-navbar border-t border-border/50 md:hidden">
          <div className="container mx-auto flex flex-col gap-1 px-4 py-4">
            {site.nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-medium text-primary-foreground"
            >
              {site.ctaLabel}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
