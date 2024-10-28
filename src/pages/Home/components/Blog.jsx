import React from 'react'
import Carrousel from './Carrousel'

export default function Blog () {
  return (
    <div className='h-full w-full bg-bg_purple/40 rounded-3xl border-4 border-black'>
      <h2 className=' pt-6 px-6 text-center font-bold text-sm sm:text-base md:text-xl lg:text-2xl w-full tracking-wide flex place-items-center justify-center'>
        Reglamentos por categorias para Xmas
      </h2>
      <div className=' h-4/6 mt-8'>
        <Carrousel />
      </div>
    </div>
  )
}
