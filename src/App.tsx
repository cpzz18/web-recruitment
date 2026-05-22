import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Division from './components/Division'
import Timeline from './components/Timeline'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import Aurora from './components/Aurora'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Lapisan Aurora - Slate Netral */}
      <div className="fixed inset-0 -z-20">
        <Aurora
          colorStops={['#0F172A', '#1E293B', '#334155']}
          amplitude={0.5}
          blend={0.3}
          speed={0.25}
          className="w-full h-full"
        />
      </div>

      {/* Overlay tipis agar konten tetap terbaca */}
      <div className="fixed inset-0 -z-10 bg-dark/30 backdrop-blur-[1px]" />

      {/* Konten */}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Division />
        <Timeline />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}