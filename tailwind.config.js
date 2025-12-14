/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*"],
  theme: {
    extend: {
      colors: {
        violet: '#7C4DFF', // Violet
        green: '#66BB6A', // Vert
        orange: '#FF9800', // Orange
        red: '#FF5252', // Rouge
        white: '#FFFFFF', // Blanc
        black: '#000000', // Noir
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
