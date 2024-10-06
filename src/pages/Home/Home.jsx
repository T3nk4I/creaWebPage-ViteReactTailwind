// General components

// Page components
import Categories from './components/Categories'
import Achievements from './components/Achievements'
import Blog from './components/Blog'
import Xmas from './components/Xmas'

function Home () {
  return (
    <div className=' bg-dark w-full'>
      <div>
        <section className='w-full'>
          <div className='w-full my-10'>
            <div className='h-96 w-full z-10'>
              <Categories />
            </div>
          </div>
          <div className='w-full'>
            <div className='w-full z-10'>
              <Achievements />
            </div>
          </div>
          <div className=' h-96 w-full sm:flex bg-bg_purple_light pb-2'>
            <div className='w-full h-1/2 sm:h-full sm:w-1/2 p-2 '>
              <Xmas />
            </div>
            <div className='w-full h-1/2 sm:h-full sm:w-1/2 p-2'>
              <Blog />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
