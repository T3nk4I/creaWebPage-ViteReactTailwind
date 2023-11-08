/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      black: '#000000',
      primary: {
        light: '#E43452',
        DEFAULT: '#A3263A',
        dark: '#631724'
      },
      complementary: 'darkorange',
      darkComplementary: '#e27c00',

      base: {
        light: '#CCCCCC',
        lightOrange: '#5f4c32',
        medium: '#474747',
        dark: '#B0B0B0'
      }
    },
    extend: {}
  },
  plugins: []
}
