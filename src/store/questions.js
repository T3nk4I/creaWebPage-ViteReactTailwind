import { create } from 'zustand'

export const useQuestionsStore = create((set) => {
  return {
    questions: [],
    currentQuestion: 0,
    fetchQuestions: async (limit) => {
      console.log('hola')
    }
  }
})
