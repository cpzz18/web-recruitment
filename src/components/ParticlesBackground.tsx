import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import type { Engine } from 'tsparticles-engine'

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="fixed inset-0 -z-10"
      options={{
        fullScreen: false,
        background: {
          color: 'transparent',
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'grab',
            },
            onClick: {
              enable: true,
              mode: 'push',
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 200,
              links: {
                opacity: 0.3,
                color: '#34d399',
              },
            },
            push: {
              quantity: 3,
            },
          },
        },
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              area: 1000,
            },
          },
          color: {
            value: ['#10b981', '#34d399', '#6ee7b7'],
          },
          shape: {
            type: 'circle',
          },
          opacity: {
            value: 0.4,
            random: true,
            anim: {
              enable: true,
              speed: 0.5,
              minimumValue: 0.1,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 4 },
            random: true,
          },
          links: {
            enable: true,
            color: '#34d399',
            opacity: 0.15,
            distance: 150,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.8,
            direction: 'none',
            random: true,
            straight: false,
            outModes: {
              default: 'bounce',
            },
          },
        },
        detectRetina: true,
      }}
    />
  )
}