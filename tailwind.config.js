/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        beige: '#f5f5dc',
        brushRed: '#ff4c4c',
        brushBlue: '#4c6eff',
        brushGreen: '#4cff95',
      },
    },
  },
  plugins: [],
}
