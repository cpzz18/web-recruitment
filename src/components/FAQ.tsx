import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronDown } from 'react-icons/hi'

const faqs = [
  {
    q: 'Apakah ada biaya pendaftaran?',
    a: 'Tidak, pendaftaran sepenuhnya gratis! Kami percaya bahwa semangat kerelawanan tidak boleh dihalangi biaya.'
  },
  {
    q: 'Siapa saja yang boleh mendaftar?',
    a: 'Siapa pun bisa mendaftar, tanpa batasan usia atau latar belakang. Yang penting punya semangat belajar dan berkontribusi.'
  },
  {
    q: 'Berapa lama durasi program relawan?',
    a: 'Program berlangsung selama 3 bulan, dengan kemungkinan perpanjangan untuk proyek tertentu.'
  },
  {
    q: 'Apakah bisa memilih lebih dari satu divisi?',
    a: 'Kamu bisa menyebutkan preferensi hingga 2 divisi, namun nantinya akan ditempatkan sesuai hasil wawancara dan kebutuhan tim.'
  },
  {
    q: 'Kapan pengumuman relawan terpilih?',
    a: 'Pengumuman akan dilakukan maksimal 1 minggu setelah tahap wawancara selesai. Pantau terus email dan media sosial kami!'
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq" className="relative py-24 lg:py-32 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mt-3 mb-4">
            Pertanyaan yang Sering{' '}
            <span className="text-gradient">Ditanyakan</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Semua yang perlu kamu ketahui sebelum mendaftar menjadi relawan Volunext.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="glass-card overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-heading font-medium text-light pr-4">
                  {faq.q}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-primary flex-shrink-0"
                >
                  <HiChevronDown size={20} />
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-gray-400 text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}