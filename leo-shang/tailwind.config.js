/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        digifit: ['Digifit', 'sans-serif'],
        VCR: ['VCR', 'sans-serif'],
        IBMRegular: ['IBMRegular', 'sans-serif'],
        IBMMedium: ['IBMMedium', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

