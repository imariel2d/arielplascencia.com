/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pond: {
          950: '#051019',
          900: '#07202e',
          800: '#0a2a3d',
          700: '#10405c',
          600: '#1a4d6e',
        },
        duck: {
          300: '#ffe08a',
          400: '#ffd34d',
          500: '#f6b71f',
        },
        beak: {
          400: '#ffb347',
          500: '#ff9f1c',
          600: '#f97316',
        },
      },
      fontFamily: {
        sans: ['Nunito', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
