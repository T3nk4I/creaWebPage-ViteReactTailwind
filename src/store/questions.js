import { create } from 'zustand'
import questionsData from '../../questionsData.json'

export const useQuestionsStore = create((set, get) => {
  return {
    questions: [],
    currentQuestion: 0,
    categorySelected: false,
    currentCategory: '',
    setStartingData: () => {
      set({
        questions: [],
        currentQuestion: 0,
        categorySelected: false,
        category: ''
      })
    },
    setCategory: (category) => {
      set({
        categorySelected: true,
        currentCategory: category
      })
    },
    setQuestions: async () => {
      const questions = questionsData
      set({ questions })
    },
    setAnswer: (questionId, answer) => {
      const { questions } = get()
      const newQuestions = structuredClone(questions)
      const questionInfo = newQuestions[questionId]
      newQuestions[questionId] = {
        ...questionInfo,
        answer
      }
      set({ questions: newQuestions })
      console.log('newwww', questions)
    },
    setCurrentQuestion: (questionId) => {
      set({ currentQuestion: questionId })
    }
  }
})
