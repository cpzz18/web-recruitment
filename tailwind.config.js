/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#10b981',
          'primary-light': '#34d399',
          dark: '#111827',
          'dark-light': '#1f2937',
          light: '#f9fafb',
          accent: '#34d399',
        },
        fontFamily: {
          heading: ['Poppins', 'sans-serif'],
          body: ['Inter', 'sans-serif'],
          display: ['Outfit', 'sans-serif'],
        },
        animation: {
          'blob': 'blob 8s ease-in-out infinite',
          'blob-slow': 'blob 12s ease-in-out infinite',
          'float': 'float 6s ease-in-out infinite',
        },
        keyframes: {
          blob: {
            '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
            '33%': { transform: 'translate(30px, -30px) scale(1.1)' },
            '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          },
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-15px)' },
          },
        },
      },
    },
    plugins: [],
  }