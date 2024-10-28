// General components

// Page components
import Categories from './components/Categories'
import Achievements from './components/Achievements'
import Blog from './components/Blog'
import Xmas from './components/Xmas'
import Hero from './components/Hero'
import Countdown from './components/Countdown'

function Home () {
  return (
    <div className=' w-full'>
      <section className='w-full'>
        <div className='w-full'>
          <Hero />
        </div>
        <div className='flex items-center justify-center mb-14 lg:mb-20'>
          <Countdown />
        </div>
        <div className='w-full h-fit sm:flex pb-2'>
          <div className='w-full sm:w-1/2 p-2 '>
            <Xmas />
          </div>
          <div className='w-full h-auto sm:w-1/2 p-2'>
            <Blog />
          </div>
        </div>
        <div className='w-full z-10'>
          <Achievements />
        </div>
        <div className='w-full z-10 mb-20'>
          <Categories />
        </div>
      </section>
    </div>
  )
}

export default Home
