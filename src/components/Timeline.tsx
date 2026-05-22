import { motion } from 'framer-motion'
import { HiDocumentText, HiUserGroup, HiSpeakerphone } from 'react-icons/hi'
import FadeContent from '../animations/FadeContent'
import TrueFocus from '../animations/TrueFocus'

const steps = [
  {
    icon: HiDocumentText,
    title: 'Pendaftaran Dibuka',
    date: 'Tahap 1',
    desc: 'Kirimkan aplikasimu melalui formulir online. Ceritakan tentang keahlian, pengalaman, dan divisi mana yang paling kamu minati.',
    status: 'active',
  },
  {
    icon: HiUserGroup,
    title: 'Wawancara',
    date: 'Tahap 2',
    desc: 'Kandidat terpilih akan diundang untuk obrolan santai. Kami ingin mengenalmu lebih dekat dan memahami motivasimu.',
    status: 'upcoming',
  },
  {
    icon: HiSpeakerphone,
    title: 'Pengumuman',
    date: 'Tahap 3',
    desc: 'Relawan terpilih akan diumumkan. Bersiaplah untuk memulai perjalanan seru bersama keluarga Volunext!',
    status: 'upcoming',
  },
]

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-24 lg:py-32 px-4">
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-primary/6 blur-[120px] pointer-events-none" />

      <FadeContent>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">
              Linimasa
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mt-3 mb-4">
              Cara{' '}
              <span className="text-gradient">Bergabung</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Proses seleksi kami sederhana dan transparan. Inilah yang bisa kamu
              harapkan dalam perjalanan menjadi bagian dari Volunext.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent md:-translate-x-px" />

            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative flex items-start gap-8 mb-16 last:mb-0 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div
                  className={`flex-1 ${
                    i % 2 === 0 ? 'md:text-right md:pr-0' : 'md:text-left md:pl-0'
                  } pl-16 md:pl-0`}
                >
                  <TrueFocus
                    hoverColor="rgba(16, 185, 129, 0.08)"
                    className="inline-block rounded-2xl md:max-w-sm"
                  >
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="glass-card p-6"
                    >
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                        {step.date}
                      </span>
                      <h3 className="font-heading font-semibold text-light text-lg mt-1 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {step.desc}
                      </p>
                      {step.status === 'active' && (
                        <span className="inline-block mt-3 px-3 py-1 text-xs font-medium rounded-full bg-primary/15 text-primary border border-primary/30">
                          Fase Saat Ini
                        </span>
                      )}
                    </motion.div>
                  </TrueFocus>
                </div>

                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                      step.status === 'active'
                        ? 'bg-primary/20 border-primary shadow-lg shadow-primary/30'
                        : 'bg-dark-light border-white/10'
                    }`}
                  >
                    <step.icon
                      className={`text-lg ${
                        step.status === 'active' ? 'text-primary' : 'text-gray-500'
                      }`}
                    />
                  </motion.div>
                </div>

                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </FadeContent>
    </section>
  )
}