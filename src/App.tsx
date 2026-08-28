import { LazyMotion, MotionConfig } from 'motion/react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { DailyLife } from './components/DailyLife'
import { Security } from './components/Security'
import { FAQ } from './components/FAQ'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'
import { LegalPage } from './pages/LegalPage'
import { NotFound } from './pages/NotFound'
import { privacy, terms } from './pages/legalContent'

const loadMotionFeatures = () =>
  import('./components/motion/features').then((mod) => mod.default)

function Landing() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <DailyLife />
        <Security />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

/**
 * Every page is prerendered to its own HTML file and links are plain <a>
 * tags, so there is nothing to route at runtime — this switch only picks
 * what to render for a given path at build time and on hydration.
 */
export default function App({ path }: { path?: string }) {
  const current =
    path ?? (typeof window === 'undefined' ? '/' : window.location.pathname)
  const route = current.replace(/\/+$/, '') || '/'

  const page =
    route === '/' ? (
      <Landing />
    ) : route === '/privacy' ? (
      <LegalPage {...privacy} />
    ) : route === '/terms' ? (
      <LegalPage {...terms} />
    ) : (
      <NotFound />
    )

  // LazyMotion keeps the animation feature set out of the main bundle;
  // reducedMotion="user" makes every motion component honour the OS setting.
  return (
    <LazyMotion features={loadMotionFeatures} strict>
      <MotionConfig reducedMotion="user">{page}</MotionConfig>
    </LazyMotion>
  )
}
