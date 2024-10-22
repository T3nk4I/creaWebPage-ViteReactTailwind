import React from 'react'
import Carrousel from './Carrousel'

export default function Blog () {
  return (
    <div className='h-full w-full bg-bg_purple/40 rounded-3xl border-4 border-black'>
      <h2 className='h-1/6 font-bold text-sm sm:text-base md:text-xl lg:text-2xl w-full tracking-wide flex place-items-center justify-center'>
        Reglamentos de categorias para Xmas
      </h2>
      <div className=' h-5/6'>
        <Carrousel />
      </div>
    </div>
  )
}
