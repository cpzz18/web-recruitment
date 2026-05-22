import { useRef, useEffect } from 'react'
import gsap from 'gsap'

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
}

export default function SplitText({ text, className = '', delay = 0 }: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const chars = container.querySelectorAll('.char')
    gsap.fromTo(
      chars,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.03,
        delay,
        ease: 'power3.out',
      }
    )
  }, [delay])

  return (
    <div ref={containerRef} className={className} aria-label={text}>
      {text.split('').map((char, i) => (
        <span key={i} className="char inline-block" style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  )
}