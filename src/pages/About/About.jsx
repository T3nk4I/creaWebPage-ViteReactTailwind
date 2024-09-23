import creaLogo from '../../assets/creaLogo.jpeg'
export default function About () {
  return (
    <div className='p-0 m-0 bg-white w-full'>
      <div className='lg:flex items-center'>
        <div className='w-full lg:w-1/2 justify-items-center'>
          <img src={creaLogo} alt='nuestro logo' className='h-full' />
        </div>
        <div className=' w-full lg:w-1/2 '>
          <h2 className='font-bold text-sm sm:text-base md:text-lg lg:text-xl text-center  text-base-medium/80 tracking-wide mb-8 lg:-mt-8 '>CREA: Club de Robotica ESIME Azcapotzalco</h2>
          <div className=' w-full p-12 bg-primary-dark lg:rounded-s-3xl'>
            <h3 className='font-bold text-sm sm:text-base md:text-lg lg:text-xl  text-white tracking-wide max-w-prose'>
              Somos un club enfocado en la creación e innovación de proyectos tecnológicos, con un enfoque en la robótica de competencia.
            </h3>
            <br />
            <h3 className='text-sm sm:text-base md:text-lg lg:text-xl text-white tracking-wide max-w-prose'>Representamos a nuestra institución participando en diversos torneos, tanto nacionales como internacionales. De igual manera promovemos y educamos sobre tecnología, impartiendo cursos, charlas y demostraciones.</h3>
          </div>
        </div>
      </div>
      <div className='w-screen px-8 lg:px-0 lg:flex lg:py-8'>
        <div className=' mt-6 lg:mt-0 lg:w-1/2 lg:pl-8'>
          <h2 className='font-bold text-base sm:text-lg md:text-xl lg:text-2xl pl-4  text-black tracking-wide mb-4'>
            Visión
          </h2>
          <p className='p-2 px-4 max-w-prose font-medium text-base-medium '>
            Ser el mejor club de robótica de toda latinoamérica y obtener reconocimiento a nivel mundial. Ser un nuevo pilar para el progreso tecnologíco en nuestro país.
          </p>
        </div>
        <div className=' mt-10 pb-10 lg:mt-0 lg:pb-0 lg:w-1/2'>
          <h2 className='font-bold text-base sm:text-lg md:text-xl lg:text-2xl pl-4  text-black tracking-wide mb-4'>
            Misión
          </h2>
          <p className='p-2 px-4 max-w-prose font-medium text-base-medium '>
            Obtener la mayor cantidad de titulos tanto nacionales como internacionales en las distintas categorias en las que participamos y ser uno de los mayores representantes de robótica competitiva en México
          </p>
        </div>
      </div>
    </div>
  )
}
