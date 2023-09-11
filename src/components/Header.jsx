import React from 'react'
import { Link } from 'react-router-dom'
import creaLogo from '../assets/creaLogo.jpeg'
import DropDownMenu from './DropDownMenu'

export default function Header () {
  return (
    <div className='opacity-90 px-4 py-1 flex place-items-center h-full w-full border-b-2 border-b-primary-dark border-opacity-75 '>
      <button className='h-full flex-shrink-0'>
        <Link to='/home' className='h-full'>
          <img src={creaLogo} alt='CREA Logo' className='h-full' />
        </Link>
      </button>
      <div className=' flex-auto flex justify-end visible sm:collapse'>
        <DropDownMenu />
      </div>
      <div className=' collapse sm:visible flex flex-auto overflow-x-hidden'>
        <div className='flex-auto text-center text-xl lg:text-2xl text-base-light md:tracking-[.2em] lg:tracking-[.3em] xl:tracking-[.5em] 2xl:tracking-[.7em] opacity-75 uppercase invisible md:visible'>
          Club de Robótica
        </div>
        <div className='flex flex-shrink-0 justify-end pr-4 text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl'>
          <button className=' hover:text-primary-light text-primary-dark font-semibold '>
            <h3>Contacto</h3>
          </button>
          <button className=' hover:text-primary-light ml-10'>
            <h3>Torneos</h3>
          </button>
          <button className=' hover:text-primary-light ml-10'>
            <h3>Misión</h3>
          </button>
          <button className=' hover:text-primary-light ml-10'>
            <h3>Visión</h3>
          </button>
        </div>
      </div>
    </div>
  )
}
