/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(200, 15%, 85%)',
        input: 'hsl(200, 15%, 85%)',
        ring: '#008080',
        background: 'hsl(0, 0%, 100%)',
        foreground: 'hsl(0, 0%, 15%)',
        primary: {
          DEFAULT: '#008080',
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          foreground: 'hsl(0, 0%, 100%)',
        },
        secondary: {
          DEFAULT: '#607D8B',
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          foreground: 'hsl(0, 0%, 100%)',
        },
        accent: {
          DEFAULT: '#880044',
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
          foreground: 'hsl(0, 0%, 100%)',
        },
        destructive: { DEFAULT: 'hsl(0, 84%, 60%)', foreground: 'hsl(0, 0%, 100%)' },
        muted: { DEFAULT: 'hsl(210, 17%, 98%)', foreground: 'hsl(210, 9%, 60%)' },
        popover: { DEFAULT: 'hsl(0, 0%, 100%)', foreground: 'hsl(210, 11%, 15%)' },
        card: { DEFAULT: 'hsl(0, 0%, 100%)', foreground: 'hsl(210, 11%, 15%)' },
        success: { DEFAULT: '#10b981', foreground: 'hsl(0, 0%, 100%)' },
        warning: { DEFAULT: '#f59e0b', foreground: 'hsl(0, 0%, 100%)' },
        wassel: {
          teal: '#008080',
          gray: '#607D8B',
          burgundy: '#880044',
          light: '#f8fafc',
          dark: '#0f172a',
        },
      },
      borderRadius: {
        lg: '12px',
        md: '8px',
        sm: '4px',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        headline: ['Poppins', 'sans-serif'],
        arabic: ['Noto Sans Arabic', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'wassel-gradient': 'linear-gradient(135deg, #008080 0%, #607D8B 100%)',
        'wassel-accent': 'linear-gradient(135deg, #880044 0%, #be185d 100%)',
        'wassel-light': 'linear-gradient(135deg, #f0fdfa 0%, #f8fafc 100%)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    function ({ addComponents }) {
      addComponents({
        '.wassel-button-primary': {
          '@apply bg-primary text-primary-foreground hover:bg-primary/90 font-medium rounded-md px-4 py-2 transition-colors': {},
        },
      });
    },
  ],
};