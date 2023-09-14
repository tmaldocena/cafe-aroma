/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        grotesque: ['Darker Grotesque', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors:{
        "brown": '#5E503F',
        "light-brown": '#C6AC8F',
        "bone": '#EAE0D5',
        "light-dark": '#22333B',
        "dark": '#0A0908'
      },
      gridTemplateColumns:{
        'square': 'repeat(2, 400px)'
      },
      gridTemplateRows:{
        'square': 'repeat(2, 400px)'
      },
    },
  },
  plugins: [],
}
