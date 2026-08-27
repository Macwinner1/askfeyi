import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { DailyLife } from './components/DailyLife'
import { Security } from './components/Security'
import { FAQ } from './components/FAQ'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

export default function App() {
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
