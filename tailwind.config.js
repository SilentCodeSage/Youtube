


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}" // Corrected file path pattern
  ],
  theme: {
    extend: {},
  },
  plugins: [

    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar')
  ],
}

