import achievements from '../assets/achievements.webp'
import { Link } from 'react-router-dom'

export default function Achievements () {
  return (
    <div>
      <h2 className=' font-bold text-base sm:text-lg md:text-xl lg:text-2xl  text-primary-dark w-full tracking-wide flex place-items-center justify-center'>
        Nuestros logros
      </h2>
      <div className=' h-40 flex place-content-center pb-4'>
        <Link to='/xmas' className=' cursor-pointer h-full'>
          <img src={achievements} alt='' className=' h-full' />
        </Link>
      </div>
    </div>
  )
}
