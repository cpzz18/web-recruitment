import { motion } from 'framer-motion'
import { HiLightningBolt, HiUserGroup, HiGlobe } from 'react-icons/hi'

const features = [
  {
    icon: HiLightningBolt,
    title: 'Skill Development',
    desc: 'Level up your skills through hands-on projects and mentorship from experienced professionals.',
  },
  {
    icon: HiUserGroup,
    title: 'Community Network',
    desc: 'Connect with like-minded individuals, build lasting relationships, and expand your network.',
  },
  {
    icon: HiGlobe,
    title: 'Real Impact',
    desc: 'Contribute to meaningful projects that make a difference in the community and beyond.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 px-4">
      {/* Decorative blob */}
      <div className="absolute top-1/2 right-0 w-72 h-72 rounded-full bg-primary/8 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mt-3 mb-6 leading-tight">
              Empowering{' '}
              <span className="text-gradient">Changemakers</span> Through
              Collaboration
            </h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              Volunext is a community-driven platform that connects passionate
              individuals with opportunities to grow, create, and lead. Whether
              you're a designer, developer, organizer, or content creator —
              there's a place for you here.
            </p>
            <p className="text-gray-500 leading-relaxed mt-4">
              We believe in the power of collective action. Our events and
              programs are designed to foster collaboration, innovation, and
              real-world impact.
            </p>
          </motion.div>

          {/* Right - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                whileHover={{ x: 6 }}
                className="glass-card p-6 flex gap-5 items-start group cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-light text-lg mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}