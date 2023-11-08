import React from 'react'
import { Link } from 'react-router-dom'
import elCreaTeNecesita from '../assets/elCreaTeNecesita.jpeg'
import { pageName } from '../../../const.js'

export default function Xmas () {
  return (
    <div className='h-full w-full'>
      <div className='h-1/4'>
        <div className='w-full text-center pt-4'>

          <h2 className='font-bold text-lg text-primary-dark tracking-wide'>
            <Link to={`${pageName}/xmas`} className=' cursor-pointer hover:text-primary-light '>
              Xmas
            </Link>
          </h2>
          <h4 className='hidden sm:block text-base-medium text-opacity-75 font-semibold text-xs w-full text-center  pt-2 pb-4 tracking-wide'>
            <Link to={`${pageName}/xmas`} className=' cursor-pointer hover:text-primary'>
              ¡Conoce nuestro evento anual más importante! Inscríbete
            </Link>
          </h4>
        </div>
      </div>
      <div className=' h-3/4 flex place-content-center pb-4'>
        <Link to='/xmas' className=' cursor-pointer h-full'>
          <img src={elCreaTeNecesita} alt='' className=' h-full' />
        </Link>
      </div>
    </div>
  )
}
