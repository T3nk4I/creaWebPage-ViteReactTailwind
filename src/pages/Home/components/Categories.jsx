import React from 'react'
import Carrousel from '../../../components/Carrousel'

export default function Categories () {
  return (
    <div className='w-full h-full border-b border-base-light border-opacity-40'>
      <h2 className=' h-1/6 font-bold text-light/85 sm:text-base md:text-xl lg:text-2xl w-full tracking-wide flex place-items-center justify-center'>
        Categorías en las que trabajamos
      </h2>
      <div className='w-full h-5/6'>
        <Carrousel />
      </div>
    </div>
  )
}
