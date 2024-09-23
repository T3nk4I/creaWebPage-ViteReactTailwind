/** @type {import('tailwindcss').Config} */

// Se recomienda que el tamano de las imagenes que se agreguen a la pagina
// sea de 1920x1080 pixeles, ya que se adecua a los breakpoints de pantalla
// y puede recortarse a 1080x1080 en caso de ser necesaria la resolucion 1:1

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
