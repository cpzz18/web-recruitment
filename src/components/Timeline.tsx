import { motion } from 'framer-motion'
import {
  HiDocumentText,
  HiUserGroup,
  HiSpeakerphone,
} from 'react-icons/hi'

const steps = [
  {
    icon: HiDocumentText,
    title: 'Open Registration',
    date: 'Phase 1',
    desc: 'Submit your application through our online form. Tell us about your skills, experience, and which division excites you the most.',
    status: 'active',
  },
  {
    icon: HiUserGroup,
    title: 'Interview',
    date: 'Phase 2',
    desc: 'Shortlisted candidates will be invited for a friendly chat. We want to get to know you and understand your motivation.',
    status: 'upcoming',
  },
  {
    icon: HiSpeakerphone,
    title: 'Announcement',
    date: 'Phase 3',
    desc: 'Selected volunteers will be announced. Get ready to embark on an exciting journey with the Volunext family!',
    status: 'upcoming',
  },
]

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-24 lg:py-32 px-4">
      {/* Blob decoration */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-primary/6 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">
            Timeline
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mt-3 mb-4">
            How to{' '}
            <span className="text-gradient">Join</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Our selection process is simple and transparent. Here's what to
            expect on your journey to becoming part of Volunext.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
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
              {/* Content */}
              <div
                className={`flex-1 ${
                  i % 2 === 0 ? 'md:text-right md:pr-0' : 'md:text-left md:pl-0'
                } pl-16 md:pl-0`}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass-card p-6 inline-block md:max-w-sm"
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
                      Current Phase
                    </span>
                  )}
                </motion.div>
              </div>

              {/* Dot on the line */}
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

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}