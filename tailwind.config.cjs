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
      primary: '#DB7C00',
      primary_light: '#FEEA00',
      complementary: '#E4007C',
      light: '#FEFADC',
      dark: '#380042'
    },
    extend: {}
  },
  plugins: []
}
