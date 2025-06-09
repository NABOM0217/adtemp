/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'slide-in-fwd-bottom': 'slide-in-fwd-bottom 0.6s ease-out both',
      },
      keyframes: {
        'slide-in-fwd-bottom': {
          '0%': {
            transform: 'translateZ(-1400px) translateY(80px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateZ(0) translateY(0)',
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
};
