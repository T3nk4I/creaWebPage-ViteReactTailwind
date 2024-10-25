import React from 'react'
import Carrousel from '../../../components/Carrousel'

export default function Categories () {
  return (
    <div className=' w-full pt-20 bg-gradient-to-b to-black from-bg_purple/75'>
      <h2 className=' mb-8 font-bold sm:text-base md:text-xl lg:text-2xl w-full tracking-wide flex place-items-center justify-center'>
        Categorías en las que trabajamos
      </h2>
      <div className='w-full h-96'>
        <Carrousel />
      </div>
    </div>
  )
}
