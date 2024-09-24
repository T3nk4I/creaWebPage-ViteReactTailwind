// General components

import Footer from '../../components/Footer'

// Page components
import Categories from './components/Categories'
import Achievements from './components/Achievements'
import Blog from './components/Blog'
import Xmas from './components/Xmas'

function Home () {
  return (
    <div className='p-0 m-0 bg-dark w-full'>
      <div>
        <section className='w-full'>
          <div className='h-96 w-full'>
            <div className='h-full w-full z-10 pt-2'>
              <Categories />
            </div>
          </div>
          <div className='w-full'>
            <div className='w-full z-10 pt-2'>
              <Achievements />
            </div>
          </div>
          <div className=' h-96 w-full sm:flex'>
            <div className='w-full h-1/2 sm:h-full sm:w-1/2 border border-black border-opacity-40'>
              <Xmas />
            </div>
            <div className='w-full h-1/2 sm:h-full sm:w-1/2 border border-black border-opacity-50'>
              <Blog />
            </div>
          </div>
        </section>
        <div className=' bg-black w-full h-auto'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home
