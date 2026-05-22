import { motion } from 'framer-motion'
import {
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
} from 'react-icons/fa'
import { HiHeart } from 'react-icons/hi'

const socialLinks = [
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaTwitter, href: '#', label: 'Twitter' },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  { icon: FaGithub, href: '#', label: 'GitHub' },
]

const footerLinks = [
  { label: 'Beranda', href: '#home' },
  { label: 'Tentang', href: '#about' },
  { label: 'Divisi', href: '#division' },
  { label: 'Linimasa', href: '#timeline' },
]

export default function Footer() {
  return (
    <footer id="footer" className="relative py-16 lg:py-20 px-4 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="#home"
              className="text-2xl font-display font-bold text-gradient"
            >
              Volunext
            </a>
            <p className="text-gray-500 mt-3 text-sm leading-relaxed max-w-xs">
              Membangun jembatan melalui kerelawanan. Bergabunglah dengan komunitas kami dan buat perubahan bersama.
            </p>
          </motion.div>

          {/* Tautan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-heading font-semibold text-light mb-4">
              Tautan Cepat
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Kontak */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-heading font-semibold text-light mb-4">
              Kontak
            </h4>
            <a
              href="mailto:hello@volunext.com"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors text-sm group"
            >
              <FaEnvelope className="group-hover:text-primary transition-colors" />
              hello@volunext.com
            </a>

            {/* Ikon Sosial */}
            <div className="flex gap-3 mt-5">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="w-10 h-10 rounded-xl bg-dark-light border border-white/5 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/30 transition-all"
                >
                  <social.icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bar Bawah */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-600 text-sm flex items-center gap-1">
            &copy; {new Date().getFullYear()} Volunext. Dibuat dengan{' '}
            <HiHeart className="text-red-500 inline" /> oleh tim.
          </p>
          <p className="text-gray-600 text-sm">
            Hak cipta dilindungi.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}