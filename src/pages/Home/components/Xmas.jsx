import React from 'react'
import { Link } from 'react-router-dom'
import creaNeedYou from '../assets/creaNeedYou.webp'

export default function Xmas () {
  return (
    <div className='h-full w-full'>
      <div className='h-1/4'>
        <div className='w-full text-center pt-4'>

          <h2 className='font-bold text-lg text-primary tracking-wide'>
            <Link to='/creaWebPage-ViteReactTailwind/xmas' className=' cursor-pointer hover:text-primary-light hover:underline '>
              Xmas
            </Link>
          </h2>
          <h4 className='hidden sm:block text-black font-semibold text-sm w-full text-center  pt-2 pb-4 tracking-wide'>
            <Link to='/xmas' className=' cursor-pointer hover:text-primary hover:underline'>
              ¡Conoce nuestro evento anual más importante! Inscríbete
            </Link>
          </h4>
        </div>
      </div>
      <div className=' h-3/4 flex place-content-center pb-4'>
        <Link to='/xmas' className=' cursor-pointer h-full'>
          <img src={creaNeedYou} alt='' className=' h-full' />
        </Link>
      </div>
    </div>
  )
}
