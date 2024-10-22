import creaLogo from '../../assets/creaLogo_alt.png'
export default function About () {
  return (
    <div className='p-0 mt-20 bg-dark w-full min-h-screen'>
      <div className='lg:flex items-center'>
        <div className='w-full lg:w-1/2'>
          <img src={creaLogo} alt='nuestro logo' className='h-full lg:ml-12' />
        </div>
        <div className=' w-full lg:w-1/2 '>
          <h2 className='font-bold text-sm sm:text-base md:text-lg lg:text-xl text-center text-txt_white/40 tracking-wide mt-8 mb-8 lg:-mt-8 '>CREA: Club de Robótica ESIME Azcapotzalco</h2>
          <div className=' w-full p-12 bg-gradient-to-r from-accent/80 to-primary/80  lg:rounded-s-3xl'>
            <h3 className='font-bold text-sm sm:text-base md:text-lg lg:text-xl tracking-wide max-w-prose drop-shadow'>
              Somos un club dedicado a la creación e innovación de proyectos tecnológicos, con un enfoque en la robótica de competencia.
            </h3>
            <br />
            <h3 className=' text-sm sm:text-base md:text-lg lg:text-xl tracking-wide max-w-prose drop-shadow'>Representamos a nuestra institución participando en diversos torneos, tanto nacionales como internacionales. De igual manera promovemos y educamos sobre tecnología, impartiendo cursos, charlas y demostraciones.</h3>
          </div>
        </div>
      </div>
      <div className='w-screen px-8 lg:px-0 lg:flex lg:py-10'>
        <div className=' pt-2 mt-10 lg:mt-4 lg:w-1/2 lg:pl-8'>
          <h2 className='font-bold text-base sm:text-lg md:text-xl lg:text-2xl pl-4 tracking-wide mb-4 text-primary'>
            Visión
          </h2>
          <p className='p-2 px-4 max-w-prose font-medium '>
            Convertirnos en el mejor club de robótica de toda latinoamérica y obtener reconocimiento a nivel mundial. Además de ser un nuevo pilar para el progreso tecnologíco en nuestro país.
          </p>
        </div>
        <div className=' pt-2 mt-10 pb-10 lg:mt-4 lg:pb-0 lg:w-1/2'>
          <h2 className='font-bold text-base sm:text-lg md:text-xl lg:text-2xl pl-4 tracking-wide mb-4 text-primary'>
            Misión
          </h2>
          <p className='p-2 px-4 max-w-prose font-medium '>
            Obtener la mayor cantidad de títulos, tanto nacionales como internacionales, en las distintas categorias en las que participamos y ser uno de los mayores representantes de robótica competitiva en México.
          </p>
        </div>
      </div>
    </div>
  )
}
