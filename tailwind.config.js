/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'audiowide': ['Audiowide', 'sans-serif']
    },
    extend: {
      backgroundColor: {
        charcoal: '#121212',
        'charcoal-light': '#151515',
        accent: '#a5b4fc'

      }
    },
  },
  plugins: [],
}

