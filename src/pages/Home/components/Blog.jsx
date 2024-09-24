import React from 'react'
import Carrousel from './Carrousel'

export default function Blog () {
  return (
    <div className='h-full w-full'>
      <h2 className='h-1/6 font-bold text-sm sm:text-base md:text-xl lg:text-2xl  text-light/90 w-full tracking-wide flex place-items-center justify-center'>
        Reglamentos de categorias para Xmas
      </h2>
      <div className=' h-5/6'>
        <Carrousel />
      </div>
    </div>
  )
}
