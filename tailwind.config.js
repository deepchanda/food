/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
     './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
    './src/**/*.js',
  ],
  theme: {
    extend: {
       colors: {
        'turbo': '#F4CD1F',
        'tangerine_yellow':'#F4CA09',
        'moon_yellow':'#F1B516',
        'white-smoke':"#F5F5F5",
        'light-coral':'#FF7474',
        'charcoal':'#424242',
        'darkTangerine':'#FFB30E',
        'light_grayish_orange':'#FEFAF1',
        'dark_gray':'#212121'
        
      },
       boxShadow: {
        'header': '0px 5px 10px rgba(255, 174, 0, 0.26), 0px 20px 40px rgba(255, 174, 0, 0.29)',
        'button':'(95.71deg, #FF7A7A -39.64%, #F75900 135.31%)',
        'panel1':'180deg, rgba(255, 206, 103, 0.22) -42.47%, rgba(253, 237, 202, 0) 100%',
      },
      screens: {
        '3xl': '1920px',
    },
          fontFamily: {
        libre: ['"Libre Baskerville"', ...defaultTheme.fontFamily.sans]
      },

    },
  },
  plugins: [],
}