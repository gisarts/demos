/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#8c6510',
          strong: '#7a5810',
          bright: '#b8923a',
          tint: '#d8c79b',
        },
        cream: {
          DEFAULT: '#efe6d2',
          soft: '#f7f5f0',
          deep: '#ebe1c9',
        },
        ink: '#2b2b2b',
        muted: '#6c6c6c',
      },
      fontFamily: {
        sans: ['Lato', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      boxShadow: {
        soft: '0 4px 12px rgba(0, 0, 0, 0.08)',
        card: '0 10px 24px rgba(0, 0, 0, 0.10)',
        gold: '0 16px 30px rgba(140, 101, 16, 0.28)',
      },
      maxWidth: {
        content: '1200px',
      },
      keyframes: {
        updown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(12px)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        updown: 'updown 2s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
};
