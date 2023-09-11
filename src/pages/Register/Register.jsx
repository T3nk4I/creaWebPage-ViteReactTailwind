import { useQuestionsStore } from '../../store/questions'
import Questions from './components/Questions'

export default function Register () {
  const currentQuestion = useQuestionsStore(state => state.currentQuestion)
  const categorySelected = useQuestionsStore(state => state.categorySelected)

  const setStartingData = useQuestionsStore(state => state.setStartingData)
  const setCategory = useQuestionsStore(state => state.setCategory)

  const handleClick = () => {
    setStartingData()
    console.log('-------------')
    console.log(categorySelected)
    setCategory('sumitit')
  }
  console.log('currentQuestion: ', currentQuestion)
  console.log('categorySelected', categorySelected)

  return (
    <div className='p-0 m-0 pt-8 bg-white min-h-screen'>
      <div className=' bg-base-light/50 rounded-3xl p-10 w-1/2 mx-auto'>
        {categorySelected === false && (
          <div>
            <h2 className=' text-xl font-semibold w-fit mx-auto'>Selecciona la categoría en la que quieres realizar tu registro</h2>
            <section className=' mt-8'>

              <button onClick={handleClick} className=' m-2 font-normal rounded-xl py-2 px-3 transition-colors bg-complementary hover:bg-primary  hover:text-white active:bg-primary-light active:text-white'>Minisumo autónomo profesional</button>

              <button className=' m-2 font-normal rounded-xl py-2 px-3 transition-colors bg-complementary hover:bg-primary  hover:text-white active:bg-primary-light active:text-white'>Minisumo autónomo amateur</button>

              <hr className=' text-base-dark/10  ' />
              <button className=' m-2 font-normal rounded-xl py-2 px-3 transition-colors bg-complementary hover:bg-primary  hover:text-white active:bg-primary-light active:text-white'>Minisumo RC profesional</button>

              <button className=' m-2 font-normal rounded-xl py-2 px-3 transition-colors bg-complementary hover:bg-primary  hover:text-white active:bg-primary-light active:text-white'>Minisumo RC amateur</button>

              <br />
              <hr className=' text-base-dark/10  ' />
              <button className=' m-2 font-normal rounded-xl py-2 px-3 transition-colors bg-complementary hover:bg-primary  hover:text-white active:bg-primary-light active:text-white'>Sumo 3kg</button>

              <button className=' m-2 font-normal rounded-xl py-2 px-3 transition-colors bg-complementary hover:bg-primary  hover:text-white active:bg-primary-light active:text-white'>Microsumo</button>

              <br />
              <hr className=' text-base-dark/10  ' />
              <button className=' m-2 font-normal rounded-xl py-2 px-3 transition-colors bg-complementary hover:bg-primary  hover:text-white active:bg-primary-light active:text-white'>Seguidor de línea profesional</button>

              <button className=' m-2 font-normal rounded-xl py-2 px-3 transition-colors bg-complementary hover:bg-primary  hover:text-white active:bg-primary-light active:text-white'>Seguidor de línea amateur</button>

              <br />
              <hr className=' text-base-dark/10  ' />
              <button className=' m-2 font-normal rounded-xl py-2 px-3 transition-colors bg-complementary hover:bg-primary  hover:text-white active:bg-primary-light active:text-white'>Guerra 1 lb</button>

              <button className=' m-2 font-normal rounded-xl py-2 px-3 transition-colors bg-complementary hover:bg-primary  hover:text-white active:bg-primary-light active:text-white'>Guerra 3 lb</button>

              <button className=' m-2 font-normal rounded-xl py-2 px-3 transition-colors bg-complementary hover:bg-primary  hover:text-white active:bg-primary-light active:text-white'>Guerra 12 lb</button>

              <br />
              <hr className=' text-base-dark/10 ' />
              <button className=' m-2 font-normal rounded-xl py-2 px-3 transition-colors bg-complementary hover:bg-primary  hover:text-white active:bg-primary-light active:text-white'>Robosoccer</button>

            </section>

          </div>
        )}

        {categorySelected === true && <Questions />}

      </div>
      <div className=' text-center'>

        <button onClick={() => setStartingData()} className=' m-6 font-medium rounded-xl py-2 px-4 transition-colors bg-primary-dark hover:bg-primary text-white active:bg-primary-light '>Reiniciar</button>
      </div>
    </div>
  )
}
