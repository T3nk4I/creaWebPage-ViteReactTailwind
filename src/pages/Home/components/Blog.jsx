import React from 'react'
import Carrousel from './Carrousel'

export default function Blog () {
  return (
    <div className='h-full w-full'>
      <h2 className=' font-bold text-base text-primary-dark w-full text-center pt-4 tracking-wide'>
        Reglamentos de categorias para Xmas
      </h2>
      <div className=' h-5/6'>
        <Carrousel />
      </div>
    </div>
  )
}
