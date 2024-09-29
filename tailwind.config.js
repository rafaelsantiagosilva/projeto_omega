/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        thirdman: ['ThirdMan', 'sans-serif'],
        vampireone: ['VampireOne', 'sans-serif'],
        jetbrainsmono: ['JetBrains Mono', 'monospace'],
      },
      textShadow: {
        DEFAULT: '2px 2px 4px rgba(0, 0, 0, 0.25)',
        md: '3px 3px 6px rgba(0, 0, 0, 0.3)',
        lg: '4px 4px 8px rgba(0, 0, 0, 0.4)',
        none: 'none',
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      }
    },
  },
  plugins: [

    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
        },
        '.text-shadow-md': {
          textShadow: '3px 3px 6px rgba(0, 0, 0, 0.3)',
        },
        '.text-shadow-lg': {
          textShadow: '4px 4px 4px #D15043',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}