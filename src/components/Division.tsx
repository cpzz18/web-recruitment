import { motion, easeOut } from 'framer-motion'
import {
  HiColorSwatch,
  HiCode,
  HiCalendar,
  HiCamera,
} from 'react-icons/hi'

const divisions = [
  {
    icon: HiColorSwatch,
    title: 'Designer',
    desc: 'Craft stunning visuals, UI/UX designs, and brand identities that bring our mission to life.',
    color: 'from-purple-500/20 to-pink-500/20',
    iconColor: 'text-purple-400',
  },
  {
    icon: HiCode,
    title: 'Developer',
    desc: 'Build robust applications and websites that power our community and drive impact.',
    color: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-blue-400',
  },
  {
    icon: HiCalendar,
    title: 'Event Organizer',
    desc: 'Plan and execute memorable events that bring people together and spark collaboration.',
    color: 'from-orange-500/20 to-yellow-500/20',
    iconColor: 'text-orange-400',
  },
  {
    icon: HiCamera,
    title: 'Media',
    desc: 'Capture moments, manage social media, and tell compelling stories that amplify our voice.',
    color: 'from-green-500/20 to-emerald-500/20',
    iconColor: 'text-green-400',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  }

export default function Division() {
  return (
    <section id="division" className="relative py-24 lg:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">
            Divisions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mt-3 mb-4">
            Find Your{' '}
            <span className="text-gradient">Role</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Choose a division that matches your passion and skills. Each role is
            essential in making Volunext extraordinary.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {divisions.map((div) => (
            <motion.div
              key={div.title}
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow: '0 20px 50px rgba(16, 185, 129, 0.15)',
                borderColor: 'rgba(16, 185, 129, 0.4)',
              }}
              className={`glass-card p-6 flex flex-col items-center text-center border border-white/5 hover:border-primary/40 transition-all duration-300 cursor-default relative overflow-hidden group`}
            >
              {/* Gradient bg on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${div.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <div className="relative z-10 w-16 h-16 rounded-2xl bg-dark-light flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <div.icon className={`text-3xl ${div.iconColor}`} />
              </div>
              <h3 className="relative z-10 font-heading font-semibold text-light text-lg mb-2">
                {div.title}
              </h3>
              <p className="relative z-10 text-gray-400 text-sm leading-relaxed">
                {div.desc}
              </p>

              {/* Corner glow */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/20 transition-colors" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}