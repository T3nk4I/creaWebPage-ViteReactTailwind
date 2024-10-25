import { Link } from 'react-router-dom'

export default function Hero () {
  const joke = () => {
    // eslint-disable-next-line no-undef
    alert('Es totalmente GRATIS ¿Qué esperabas?')
  }
  return (
    <div className='w-full mb-20 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] to-black from-bg_accent_dark/70'>
      <h1 className='w-full mt-14 text-center text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-txt_white to-txt_white_purple md:mt-0 md:pt-20 md:text-6xl lg:pt-32 lg:text-7xl xl:text-8xl xl:pt-40'>Xmas <span className='bg-clip-text text-transparent bg-gradient-to-tr from-accent to-secondary'>2024</span></h1>
      <h3 className='w-full mt-3 text-center font-semibold text-xs text-primary_dark/75 md:mt-4 md:text-sm lg:mt-6 lg:text-base xl:mt-8 xl:text-lg'>Nuestro evento mas importante del año <br /><h4 className='mt-1 font-bold text-primary_dark/85'>4 y 5 de Diciembre</h4></h3>
      <div className='flex flex-col w-fit mt-12 mx-auto text-center font-medium text-sm md:flex-row md:w-1/3 md:text-base md:mt-16 lg:text-lg lg:mt-24 xl:text-xl xl:mt-28'>
        <button className='flex-1 flex h-fit px-4 py-2 rounded-lg text-black bg-primary'><Link className='flex-1' to='https://docs.google.com/forms/d/e/1FAIpQLSeibZ72C2mAxaysksWpbAc2JV6nWeZOvuzDmYRPu1lkU7ZGPQ/viewform'>Inscribete</Link></button>

        <button className='flex-1 w-full h-fit mt-4 mb-12 px-4 py-2 rounded-lg text-txt_white_purple/60 bg-bg_accent_dark md:mt-0 md:ml-8 md:mb-16 lg:mb-24 xl:mb-32' onClick={joke}>Precios</button>
      </div>
    </div>
  )
}
