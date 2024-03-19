import { useState } from 'react'

import { Link } from 'react-router-dom'
// Icons (arrows and dots) import. You need to install the library: npm install react-icons
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

// You can delete or modify any object in the array
export default function Carrousel () {
  const imagesArray = [
    { name: 'Minisumo autónomo profesional', link: 'https://docs.google.com/document/d/1k5rlef1_2SyRy3tnRFDPJI_7D0vdKj6_lh6LedBeh5c/edit#heading=h.lrxxfbed5gkl' },
    { name: 'Minisumo RC profesional', link: 'https://docs.google.com/document/d/1k5rlef1_2SyRy3tnRFDPJI_7D0vdKj6_lh6LedBeh5c/edit#heading=h.lrxxfbed5gkl' },
    { name: 'Minisumo autónomo amateur', link: 'https://docs.google.com/document/d/1k5rlef1_2SyRy3tnRFDPJI_7D0vdKj6_lh6LedBeh5c/edit#heading=h.lrxxfbed5gkl' },
    { name: 'Minisumo RC amateur', link: 'https://docs.google.com/document/d/1k5rlef1_2SyRy3tnRFDPJI_7D0vdKj6_lh6LedBeh5c/edit#heading=h.lrxxfbed5gkl' },
    { name: 'Microsumo', link: 'https://docs.google.com/document/d/1Zd5_bKdkOZDldijVbBp4a5fnF_jPxZENVx-3VbZYtbQ/edit#heading=h.lrxxfbed5gkl' },
    { name: 'Seguidor de línea profesional', link: 'https://docs.google.com/document/d/1Rf05I65rkRRZ-yZVycBUTn5rYrbeFq3orRDf3bm4B-w/edit#heading=h.32gsyl5eo0v1' },
    { name: 'Seguidor de línea amateur', link: 'https://docs.google.com/document/d/1Rf05I65rkRRZ-yZVycBUTn5rYrbeFq3orRDf3bm4B-w/edit#heading=h.32gsyl5eo0v1' },
    { name: 'Guerra 1 lb', link: 'https://docs.google.com/document/d/17QN0frI29Gl5NHOOpmWr1Euv9XmDuQrkkwxR0Wv0xMI/edit#heading=h.mh48o2h9ps9f' },
    { name: 'Guerra 3 lb', link: 'https://docs.google.com/document/d/17QN0frI29Gl5NHOOpmWr1Euv9XmDuQrkkwxR0Wv0xMI/edit#heading=h.mh48o2h9ps9f' },
    { name: 'Guerra 12 lb', link: 'https://docs.google.com/document/d/17QN0frI29Gl5NHOOpmWr1Euv9XmDuQrkkwxR0Wv0xMI/edit#heading=h.mh48o2h9ps9f' },
    { name: 'Robosoccer', link: 'https://docs.google.com/document/d/1An3iLLKc9C9CeJBwyR-7pms6LVJqUl4SOI4Y18ReCD8/edit' }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? imagesArray.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === imagesArray.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (specificSlide) => {
    setCurrentIndex(specificSlide)
  }

  return (
    // Has w-full and h-full to adjust its entire size as its father, where will be imported
    <div className='w-full px-6 lg:mx-auto h-full mx-auto flex flex-col items-center justify-center pb-6'>
      <div className='group bg-base-dark h-5/6 h- min-w-full m-auto'>
        <div
          className=' h-full max-w-full bg-cover bg-center bg-white flex items-center justify-between px-3 md:px-5 xl:px-7'
        >

          {/* --- Left arrows --- */}
          <div
            className=' block sm:hidden opacity-80 w-fit h-fit rounded-xl bg-black/50 hover:bg-black/80  text-white
          cursor-pointer duration-75 py-3'
          >
            <BsChevronCompactLeft size={25} onClick={prevSlide} />
          </div>

          <div
            className=' hidden sm:block md:hidden opacity-80 w-fit h-fit rounded-xl bg-black/50 hover:bg-black/80 text-white
          cursor-pointer duration-75 py-3'
          >
            <BsChevronCompactLeft size={35} onClick={prevSlide} />
          </div>

          <div
            className=' hidden md:block xl:hidden opacity-80 w-fit h-fit rounded-xl bg-black/50 hover:bg-black/80 text-white
          cursor-pointer duration-75 py-3'
          >
            <BsChevronCompactLeft size={40} onClick={prevSlide} />
          </div>

          <div
            className=' hidden xl:block opacity-80 w-fit h-fit rounded-xl bg-black/50 hover:bg-black/80 text-white
          cursor-pointer duration-75 py-3'
          >
            <BsChevronCompactLeft size={45} onClick={prevSlide} />
          </div>

          {/* -------- Midle text -------- */}
          <div className='text-center text-sm md:text-base px-4 mb-4 h-1/2 lg:text-xl font-bold text-base-medium self-end hover:text-primary hover:cursor-pointer hover:underline'>
            <Link to={`${imagesArray[currentIndex].link}`}>
              {imagesArray[currentIndex].name}
            </Link>
          </div>
          {/* --- Right arrows --- */}

          <div
            className=' block sm:hidden opacity-80 w-fit h-fit rounded-xl bg-black/50 hover:bg-black/80 text-white
          cursor-pointer duration-75 py-3'
          >
            <BsChevronCompactRight size={25} onClick={nextSlide} />
          </div>

          <div
            className=' hidden sm:block md:hidden opacity-80 w-fit h-fit rounded-xl bg-black/50 hover:bg-black/80 text-white
          cursor-pointer duration-75 py-3'
          >
            <BsChevronCompactRight size={35} onClick={nextSlide} />
          </div>

          <div
            className=' hidden md:block xl:hidden opacity-80 w-fit h-fit rounded-xl bg-black/50 hover:bg-black/80 text-white
          cursor-pointer duration-75 py-3'
          >
            <BsChevronCompactRight size={40} onClick={nextSlide} />
          </div>

          <div
            className=' hidden xl:block opacity-80 w-fit h-fit rounded-xl bg-black/50 hover:bg-black/80 text-white
          cursor-pointer duration-75 py-3'
          >
            <BsChevronCompactRight size={45} onClick={nextSlide} />
          </div>
        </div>
      </div>

      {/* --- Section name --- */}

      <div className=' sm:text-base md:text-lg lg:text-xl h-1/6 flex flex-col place-items-center justify-center text-base-lightOrange '>
        {/* -- Section dots -- */}
        <div className=' h-1/2 flex place-items-baseline justify-center'>
          {imagesArray.map((slide, index) => {
            if (index === currentIndex) {
              return (
                <div
                  className=' text-xl sm:text-2xl cursor-pointer scale-150 text-complementary '
                  key={index}
                  onClick={() => goToSlide(index)}
                >
                  <RxDotFilled />
                </div>
              )
            } else {
              return (
                <div
                  className=' text-xl sm:text-2xl scale-110  cursor-pointer text-black/30 '
                  key={index}
                  onClick={() => goToSlide(index)}
                >
                  <RxDotFilled />
                </div>
              )
            }
          })}
        </div>

      </div>
    </div>
  )
}
