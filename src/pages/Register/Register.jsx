import { useQuestionsStore } from '../../store/questions'

export default function Register () {
  const questions = useQuestionsStore(state => state.questions)
  console.log(questions)
  return (
    <div className='p-0 m-0 bg-white min-h-screen'>
      <div className=' bg-base-light/50 rounded-full p-6 w-1/2 mx-auto'>
        <h2 className=' font-semibold w-fit mx-auto'>Selecciona la categoría en la que quieres realizar tu registro</h2>
        <button>Minisumo autónomo profesional</button>
        <button>Minisumo autónomo amateur</button>
        <button>Minisumo RC profesional</button>
        <button>Minisumo RC amateur</button>
        <button>Sumo 3kg</button>
        <button>Microsumo</button>
        <button>Seguidor de línea profesional</button>
        <button>Seguidor de línea amateur</button>
        <button>Guerra 1 lb</button>
        <button>Guerra 3 lb</button>
        <button>Guerra 12 lb</button>
        <button>Robosoccer</button>
      </div>
    </div>
  )
}
