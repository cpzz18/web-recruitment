import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { REGISTRATION_LINK } from '../config'

export default function FinalCTA() {
  return (
    <section className="relative py-24 lg:py-32 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 sm:p-12 lg:p-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            Siap Menjadi Bagian dari{' '}
            <span className="text-gradient">Perubahan</span>?
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto mb-8">
            Jangan lewatkan kesempatan untuk berkembang, berjejaring, dan memberi dampak nyata. Klik tombol di bawah dan daftar sekarang!
          </p>
          <a
            href={REGISTRATION_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 font-semibold text-white rounded-full bg-gradient-to-r from-primary to-primary-light hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1"
          >
            Daftar Sekarang
            <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}