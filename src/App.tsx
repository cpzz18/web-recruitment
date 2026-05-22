import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Division from './components/Division'
import Timeline from './components/Timeline'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import ParticlesBackground from './components/ParticlesBackground'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] animate-blob" />
        <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-primary-light/8 blur-[100px] animate-blob-slow" />
        <div className="absolute -bottom-20 right-1/3 w-[400px] h-[400px] rounded-full bg-accent/6 blur-[100px] animate-blob" />
      </div>

      <ParticlesBackground />
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