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
        dark: '#121212',
        accent: '#a5b4fc'

      }
    },
  },
  plugins: [],
}

