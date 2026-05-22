import React, { useRef, useEffect, ReactNode, CSSProperties } from 'react'

interface TrueFocusProps {
  children: ReactNode
  className?: string
  hoverColor?: string
}

export default function TrueFocus({ children, className = '', hoverColor = 'rgba(16, 185, 129, 0.15)' }: TrueFocusProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      el.style.setProperty('--mouse-x', `${x}px`)
      el.style.setProperty('--mouse-y', `${y}px`)
    }

    const handleMouseLeave = () => {
      el.style.setProperty('--mouse-x', `-100px`)
      el.style.setProperty('--mouse-y', `-100px`)
    }

    el.addEventListener('mousemove', handleMouseMove)
    el.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      el.removeEventListener('mousemove', handleMouseMove)
      el.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{
        '--mouse-x': '-100px',
        '--mouse-y': '-100px',
      } as CSSProperties}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(120px circle at var(--mouse-x) var(--mouse-y), ${hoverColor}, transparent)`,
          opacity: 'var(--hover-opacity, 0)',
        } as CSSProperties}
        onMouseEnter={(e) => (e.currentTarget.style.setProperty('--hover-opacity', '1'))}
        onMouseLeave={(e) => (e.currentTarget.style.setProperty('--hover-opacity', '0'))}
      />
      {children}
    </div>
  )
}