const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
          950: '#083344',
        },
        secondary: {
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
          950: '#042f2e',
        },
        ocean: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        coral: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        sand: {
          50: '#fefdfb',
          100: '#fefbf3',
          200: '#fdf4e1',
          300: '#fae8c1',
          400: '#f6d389',
          500: '#f2c464',
          600: '#eca638',
          700: '#d18422',
          800: '#ae6a1f',
          900: '#8d561f',
          950: '#4f2d0e',
        },
        gradient: {
          'ocean-start': '#06b6d4',
          'ocean-end': '#0891b2',
          'coral-start': '#f87171',
          'coral-end': '#ef4444',
          'deep-start': '#0c4a6e',
          'deep-end': '#164e63',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        display: ['var(--font-sora)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-mono)', ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '96': '24rem',
        '128': '32rem',
      },
      backgroundImage: {
        'gradient-ocean': 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
        'gradient-coral': 'linear-gradient(135deg, #f87171 0%, #ef4444 100%)',
        'gradient-deep': 'linear-gradient(135deg, #0c4a6e 0%, #164e63 100%)',
        'gradient-surface': 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
        'gradient-glass': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        'noise': "url('data:image/svg+xml,%3Csvg width=\"200\" height=\"200\" viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noise\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"4\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noise)\" opacity=\"0.4\"/%3E%3C/svg%3E')",
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-inset': 'inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)',
        'ocean': '0 25px 50px -12px rgba(6, 182, 212, 0.25)',
        'coral': '0 25px 50px -12px rgba(248, 113, 113, 0.25)',
        'deep': '0 25px 50px -12px rgba(12, 74, 110, 0.25)',
        'xl-soft': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl-soft': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'wave': 'wave 2.5s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '33%': { transform: 'translateY(-10px) rotate(1deg)' },
          '66%': { transform: 'translateY(-5px) rotate(-1deg)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(6, 182, 212, 0.4)' },
          '100%': { boxShadow: '0 0 30px rgba(6, 182, 212, 0.8)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      blur: {
        '4xl': '72px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function({ addUtilities }) {
      const newUtilities = {
        '.glass': {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.glass-dark': {
          background: 'rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
        '.text-gradient-ocean': {
          background: 'linear-gradient(135deg, #06b6d4, #0891b2)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.text-gradient-coral': {
          background: 'linear-gradient(135deg, #f87171, #ef4444)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.bg-mesh': {
          backgroundImage: `
            radial-gradient(at 40% 20%, hsla(206, 96%, 55%, 0.3) 0px, transparent 50%),
            radial-gradient(at 80% 0%, hsla(189, 84%, 69%, 0.3) 0px, transparent 50%),
            radial-gradient(at 0% 50%, hsla(355, 84%, 69%, 0.3) 0px, transparent 50%),
            radial-gradient(at 80% 50%, hsla(340, 84%, 69%, 0.3) 0px, transparent 50%),
            radial-gradient(at 0% 100%, hsla(22, 91%, 75%, 0.3) 0px, transparent 50%),
            radial-gradient(at 80% 100%, hsla(242, 67%, 75%, 0.3) 0px, transparent 50%),
            radial-gradient(at 0% 0%, hsla(343, 67%, 75%, 0.3) 0px, transparent 50%)
          `,
        },
      };
      addUtilities(newUtilities);
    },
  ],
  darkMode: 'class',
};
