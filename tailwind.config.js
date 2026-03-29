/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        ink: {
          DEFAULT: '#0D0D0D',
          soft: '#1a1a1a',
          muted: '#2e2e2e',
        },
        paper: {
          DEFAULT: '#F5F2ED',
          warm: '#EDE9E1',
          cool: '#F8F7F5',
        },
        accent: {
          DEFAULT: '#D4522A',
          hover: '#BE4422',
          soft: '#F5E6DF',
        },
        jade: {
          DEFAULT: '#2A7A5A',
          soft: '#E0F0EA',
        },
        amber: {
          DEFAULT: '#C4882A',
          soft: '#FAF0DC',
        },
        border: '#DDD8D0',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.04)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.12), 0 8px 32px rgba(0,0,0,0.06)',
        'input': '0 1px 2px rgba(0,0,0,0.05)',
        'input-focus': '0 0 0 3px rgba(212,82,42,0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease forwards',
        'slide-up': 'slideUp 0.3s ease forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideUp: {
          from: { opacity: 0, transform: 'translateY(8px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
