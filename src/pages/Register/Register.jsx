import { useQuestionsStore } from '../../store/questions'
// import Questions from './components/Questions'
import categoriesData from './categoriesData.json'

export default function Register () {
  const currentQuestion = useQuestionsStore(state => state.currentQuestion)
  const currentCategory = useQuestionsStore(state => state.currentCategory)
  const categorySelected = useQuestionsStore(state => state.categorySelected)

  const setStartingData = useQuestionsStore(state => state.setStartingData)
  const setCategory = useQuestionsStore(state => state.setCategory)

  const handleClick = (category) => {
    setStartingData()
    console.log('-------------')
    console.log(categorySelected)
    setCategory(category)
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
              {categoriesData.map((element) => (
                <button
                  key={element.id}
                  onClick={() => {
                    handleClick(element.categoryId)
                  }} className=' m-2 font-normal rounded-xl py-2 px-3 transition-colors bg-complementary hover:bg-primary  hover:text-white active:bg-primary-light active:text-white'
                >{element.name}
                </button>
              ))}

            </section>

          </div>
        )}

        {categorySelected === true && currentCategory}

      </div>
      <div className=' text-center'>

        <button onClick={() => setStartingData()} className=' m-6 font-medium rounded-xl py-2 px-4 transition-colors bg-primary-dark hover:bg-primary text-white active:bg-primary-light '>Reiniciar</button>
      </div>
    </div>
  )
}
