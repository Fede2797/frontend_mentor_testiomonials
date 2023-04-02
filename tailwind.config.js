/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
      // Primary:
      'moderate-violet': 'hsl(263, 55%, 52%)',
      'grayish-blue': 'hsl(217, 19%, 35%)',
      'blackish-blue': 'hsl(219, 29%, 14%)',
      'white': 'hsl(0, 0%, 100%)',
      // Neutral:
      'light-gray': 'hsl(0, 0%, 81%)',
      'lightgray-blue': 'hsl(210, 46%, 95%)',
      },
      fontFamily: {
        'sans': ['Barlow Semi Condensed', 'sans-serif']
      }
    },
  },
  plugins: [
    plugin(function({ addBase }) {
     addBase({
        'html': { fontSize: "13px" },
      })
    }),
  ],
}

