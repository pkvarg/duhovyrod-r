/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        hotPink: '#FF69B4',
        indigo: '#4B0082',
        darkTurquoise: '#00CED1',
      },
    },
  },
  plugins: [],
}
