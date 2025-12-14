/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"], // Si votre HTML est dans public
  theme: {
    extend: {
      colors: {
        violet: '#7C4DFF',
        green: '#66BB6A',
        orange: '#FF9800',
        red: '#FF5252',
        white: '#FFFFFF',
        black: '#000000',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
