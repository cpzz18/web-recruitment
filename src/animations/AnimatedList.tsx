import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface AnimatedListProps {
  children: ReactNode[]
  className?: string
  stagger?: number
}

export default function AnimatedList({ children, className = '', stagger = 0.1 }: AnimatedListProps) {
  return (
    <div className={className}>
      {children.map((child, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * stagger, duration: 0.5 }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  )
}