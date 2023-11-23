// General components

import Footer from '../../components/Footer'

// Page components
import Categories from './components/Categories'
import Blog from './components/Blog'
import Xmas from './components/Xmas'

function Home () {
  return (
    <div className='p-0 m-0 bg-white w-full'>
      <div>
        <section className='w-full bg-white'>
          <div className=' bg h-96 w-full'>
            <div className='bg-white h-full w-full z-10 pt-2'>
              <Categories />
            </div>
          </div>
          <div className=' h-96 w-full sm:flex'>
            <div className='bg-white w-full h-1/2 sm:h-full sm:w-1/2 border border-base-light border-opacity-40'>
              <Xmas />
            </div>
            <div className='bg-white w-full h-1/2 sm:h-full sm:w-1/2 border border-base-light border-opacity-50'>
              <Blog />
            </div>
          </div>
        </section>
        <div className=' bg-primary-dark w-full h-auto'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home
