import { Link } from 'react-router-dom'

export default function Hero () {
  const joke = () => {
    alert('Es totalmente GRATIS ¿Qué esperabas?')
  }
  return (
    <div className='w-full  bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] to-black via-bg_accent_dark/50 from-bg_accent_dark '>
      <h1 className='w-full text-center  text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-txt_white to-txt_white_purple  '>Xmas <span className='bg-clip-text text-transparent bg-gradient-to-tr from-accent to-secondary'>2024</span></h1>
      <h3 className='w-full text-center font-semibold text-xs text-primary_dark/75 mt-3'>Nuestro evento mas importante del año <br /><h4 className=' font-bold text-primary_dark/85 mt-1'>4 y 5 de Diciembre</h4></h3>
      <div className='mt-10  mx-auto w-fit text-center'>
        <button className='bg-primary rounded-lg px-3 py-2 text-black font-medium text-sm'><Link to='https://docs.google.com/forms/d/e/1FAIpQLSdPmPZQSUtVt3pN-Dk3IOiIFgLFZ8DT6pNls18MvjHuOVF6lQ/viewform?usp=sf_link'>Inscribete</Link></button>
        <br />
        <button className='mt-4 mb-6 w-full bg-bg_accent_dark rounded-lg px-3 py-2 text-txt_white_purple/80 font-medium text-sm' onClick={joke}>Precios</button>
      </div>
    </div>
  )
}
