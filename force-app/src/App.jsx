import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import Ticker       from './components/Ticker'
import PainSection  from './components/PainSection'
import Features     from './components/Features'
import Metrics      from './components/Metrics'
import Process      from './components/Process'
import Pricing      from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQ          from './components/FAQ'
import CTASection   from './components/CTASection'
import Footer       from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <PainSection />
        <Features />
        <Metrics />
        <Ticker reverse />
        <Process />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
