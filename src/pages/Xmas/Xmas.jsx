// General components
import Footer from '../../components/Footer'

import snowMan from '../../assets/snowMan.png'
import creaLogo from '../../assets/creaLogo.jpeg'
import { Link } from 'react-router-dom'

function Xmas () {
  return (
    <div className=' max-w-screen p-0 m-0 pt-14 bg-white'>
      <div>
        <section className='w-screen'>
          <main className=' w-full lg:flex'>
            <section className=' flex flex-col lg:flex-col lg:pr-14 w-full lg:w-1/2'>

              <div className=' flex-1 cursor-default'>
                <p className=' max-w-prose text-base mx-auto px-12 pt-7 '>
                  Xmas es el evento anual donde se une la{' '}
                  <strong>robótica de competencia</strong> y el{' '}
                  <strong>networking</strong> entre entusiastas de la tecnologia,
                  estudiantes y empresas.
                </p>
                <p className=' max-w-prose text-base mx-auto px-12 pt-9 '>
                  Es organizado por el Club de Robótica de ESIME Azcapotzalco, por
                  lo que se lleva acabo en las instalaciones de la universidad.
                </p>
                <h3 className=' text-center mt-10 text-primary font-bold'>
                  7 y 8 de Diciembre ¡No faltes!
                </h3>
                <div className='mx-auto mt-8 w-fit flex-none'>
                  <Link to='/register' className=' text-base font-medium rounded-xl py-3 px-6 transition-colors bg-complementary hover:bg-primary  hover:text-white active:bg-primary-light active:text-white '>
                    Inscribete
                  </Link>
                </div>
              </div>
            </section>
            <section className='w-screen lg:w-1/2'>
              <div className=' mt-6 h-80 flex items-center mx-auto'>
                <img src={snowMan} alt='' className=' h-full' />
                <img src={creaLogo} alt='' className=' h-3/4 ml-10 ' />
              </div>
            </section>
          </main>

          <div className=' lg:mt-12 lg:mb-10 lg:border-t border-base-light cursor-default'>
            <p className=' max-w-prose text-base mx-auto px-8 pt-7'>
              Las categorías en las que se realizarán las competencias son las
              siguientes:
              <ul className='text-sm pt-6 font-semibold text-primary-dark'>
                <li>Minisumo autónomo profesional</li>
                <li>Minisumo autónomo amateur</li>
                <li>Minisumo RC profesional</li>
                <li>Minisumo RC amateur</li>
                <li>Microsumo</li>
                <li>Seguidor de línea profesional</li>
                <li>Seguidor de línea amateur</li>
                <li>Guerra 1 lb</li>
                <li>Guerra 3 lb</li>
                <li>Guerra 12 lb</li>
                <li>Robosoccer</li>
                <li>Exposicion de Humanoide</li>
              </ul>
            </p>
            <p className=' max-w-prose text-sm mx-auto px-8 pt-7'>
              Puedes consultar los premios para cada categoría dando click {' '}
              <a
                href='https://www.facebook.com/cc.roboticaazc'
                className='text-primary font-bold underline underline-offset-2 hover:text-primary-light active:text-complementary '
              >
                aquí
              </a>
            </p>
          </div>
        </section>
        <div className=' bg-primary-dark w-screen h-auto mt-8'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Xmas
