import { useState, useEffect } from 'react'
import { motion, AnimatePresence, easeOut } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { REGISTRATION_LINK } from '../config'
import TrueFocus from '../animations/TrueFocus'

const navLinks = [
  { label: 'Beranda', href: '#home' },
  { label: 'Tentang', href: '#about' },
  { label: 'Divisi', href: '#division' },
  { label: 'Linimasa', href: '#timeline' },
  { label: 'Kontak', href: '#footer' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: easeOut }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark/60 backdrop-blur-3xl border-b border-white/10 shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo dengan hover */}
          <motion.a
            href="#home"
            className="text-2xl lg:text-3xl font-display font-bold text-gradient hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Volunext
          </motion.a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-primary transition-colors duration-300 relative group py-1"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-light rounded-full transition-all duration-500 ease-out group-hover:w-full" />
              </a>
            ))}
            <TrueFocus hoverColor="rgba(16, 185, 129, 0.2)" className="rounded-full">
              <a
                href={REGISTRATION_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 text-sm font-semibold rounded-full bg-gradient-to-r from-primary to-primary-light text-white shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                Daftar Sekarang
              </a>
            </TrueFocus>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-light p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="md:hidden overflow-hidden bg-dark/80 backdrop-blur-3xl border-b border-white/10"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 px-4 text-gray-300 hover:text-primary hover:bg-white/5 rounded-lg transition-all"
                >
                  {link.label}
                </motion.a>
              ))}
              <TrueFocus hoverColor="rgba(16, 185, 129, 0.2)" className="rounded-xl mt-3">
                <motion.a
                  href={REGISTRATION_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 px-4 text-center font-semibold rounded-xl bg-gradient-to-r from-primary to-primary-light text-white shadow-md shadow-primary/20"
                >
                  Daftar Sekarang
                </motion.a>
              </TrueFocus>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}