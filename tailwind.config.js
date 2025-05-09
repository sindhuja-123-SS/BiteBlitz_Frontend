/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx,html}",
      "./index.html"
    ],
    theme: {
      extend: {
        colors: {
          'tomato-red': '#FF6347',
          'avocado-green': '#8BC34A',
          'cheese-yellow': '#FFD700',
          'olive-brown': '#6B4E31',
          'cream-white': '#FFFDD0'
        }
      }
    },
    plugins: []
  };