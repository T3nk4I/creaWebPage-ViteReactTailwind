import achievements from '../assets/achievements2.png'
import { Link } from 'react-router-dom'

export default function Achievements () {
  return (
    <div>
      <h2 className=' font-bold text-light/85 sm:text-lg md:text-xl lg:text-2xl w-full tracking-wide flex place-items-center justify-center cursor-pointer hover:text-primary active:text-secondary'>
        <Link to='/creaWebPage-ViteReactTailwind/about' className='cursor-pointer h-full'>
          Nuestros logros
        </Link>
      </h2>
      <div className=' h-40 lg:h-56 2xl:h-64 flex place-content-center pb-4'>
        <Link to='/creaWebPage-ViteReactTailwind/about' className=' cursor-pointer h-full'>
          <img src={achievements} alt='' className=' h-full' />
        </Link>
      </div>
    </div>
  )
}
