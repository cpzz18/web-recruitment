import { motion, easeOut } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { REGISTRATION_LINK } from '../config'
import SplitText from '../animations/SplitText'
import TrueFocus from '../animations/TrueFocus'
import AnimatedList from '../animations/AnimatedList'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: easeOut },
  }),
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-gray-300">Pendaftaran Relawan 2026</span>
        </motion.div>

        <motion.div
          custom={0.15}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
            <span className="inline-block">
              <SplitText text="Bergabunglah dengan" delay={0.3} />
            </span>
            <br />
            <span className="text-gradient inline-block">
              <SplitText text="Tim Relawan Kami" delay={0.6} />
            </span>
          </h1>
        </motion.div>

        <motion.p
          custom={0.3}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Bangun <span className="text-light font-medium">Pengalaman</span> &{' '}
          <span className="text-light font-medium">Koneksi</span> melalui proyek-proyek bermakna.
          Berkolaborasi, belajar, dan tumbuh bersama komunitas kreator dan penggerak perubahan yang bersemangat.
        </motion.p>

        <motion.div
          custom={0.45}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <TrueFocus hoverColor="rgba(16, 185, 129, 0.15)" className="rounded-full">
            <a
              href={REGISTRATION_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 font-semibold text-white rounded-full bg-gradient-to-r from-primary to-primary-light hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              Daftar Sekarang
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </TrueFocus>
          <a
            href="#about"
            className="px-8 py-4 font-semibold text-gray-300 rounded-full border border-white/10 hover:border-primary/40 hover:text-primary transition-all duration-300 hover:-translate-y-1"
          >
            Pelajari Lebih Lanjut
          </a>
        </motion.div>

        <motion.div
          custom={0.6}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16"
        >
          <AnimatedList className="grid grid-cols-3 gap-8 max-w-lg mx-auto" stagger={0.15}>
            {[
              { value: '500+', label: 'Relawan' },
              { value: '20+', label: 'Proyek' },
              { value: '4', label: 'Divisi' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl sm:text-3xl font-display font-bold text-gradient">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </AnimatedList>
        </motion.div>
      </div>
    </section>
  )
}