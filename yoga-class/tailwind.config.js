/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    require.resolve('react-widgets/styles.css'),
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bud-1': "url('/public/theme.jpg')",
        'bud-2': "url('/public/buddha2.jpeg')",
      },
      fontFamily: {
        tangerine: ['"Tangerine"', ...defaultTheme.fontFamily.sans],
        courgette: ['"Courgette"', ...defaultTheme.fontFamily.sans],
        slabo: ['"Slabo+27px"', ...defaultTheme.fontFamily.sans],
        archivo: ['"Archivo"', ...defaultTheme.fontFamily.sans] 
      }
    },
  },
  plugins: [require('react-widgets-tailwind')],

}
 
