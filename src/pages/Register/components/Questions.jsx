import { useQuestionsStore } from '../../../store/questions'
import { useState } from 'react'
import snowMan from '../../../assets/snowMan.png'

export default function Questions () {
  const questions = useQuestionsStore(state => state.questions)
  const currentQuestion = useQuestionsStore(state => state.currentQuestion)
  const setAnswer = useQuestionsStore(state => state.setAnswer)
  const setCurrentQuestion = useQuestionsStore(state => state.setCurrentQuestion)

  const questionInfo = questions[currentQuestion]

  const [answ, setAnsw] = useState('')

  const handleClickNext = (questionId, answer) => {
    setAnswer(questionId, answer)
    setCurrentQuestion(questions[currentQuestion + 1].id)
    setAnsw('')
  }

  const handleClickBefore = (questionId, answer) => {
    setAnswer(questionId, answer)
    setCurrentQuestion(questions[currentQuestion - 1].id)
    setAnsw('')
  }

  return (
    <>
      <form>
        <label className=' font-semibold'>{questionInfo.question}</label>
        <input type='text' value={answ} onChange={(e) => setAnsw(e.target.value)} className='w-full outline-none rounded-lg p-3 mt-8' />
      </form>
      <div className='w-full grid grid-rows-1 grid-cols-3 mt-6'>
        <button
          hidden={questionInfo.id !== 0}
          key='bt1'
          className='place-self-center justify-self-start h-fit mx-2 font-normal rounded-xl py-2 px-3 bg-transparent cursor-default'
        />
        <button
          onClick={() => {
            handleClickBefore(questionInfo.id, answ)
          }}
          hidden={questionInfo.id === 0}
          key='bt2'
          className='place-self-center justify-self-start h-fit mx-2 font-normal rounded-xl py-2 px-3 transition-colors bg-complementary hover:bg-darkComplementary active:bg-primary active:text-white'
        >Anterior
        </button>
        <img src={snowMan} alt='mascota oficial del CREA' className=' h-28 mx-auto' />
        <button
          onClick={() => {
            handleClickNext(questionInfo.id, answ)
          }}
          hidden={questionInfo.id === 6}
          key='bt3'
          className='place-self-center justify-self-end h-fit mx-2 font-normal rounded-xl py-2 px-3 transition-colors bg-complementary hover:bg-darkComplementary active:bg-primary active:text-white '
        >Siguiente
        </button>
        <button
          onClick={() => {
            console.log('finalizar')
          }}
          hidden={questionInfo.id !== 6}
          key='bt4'
          className='place-self-center justify-self-end h-fit mx-2 font-normal rounded-xl py-2 px-3 transition-colors text-white bg-primary-light hover:bg-primary active:bg-primary-dark'
        >Finalizar
        </button>
      </div>
    </>
  )
}
