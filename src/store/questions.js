import { create } from 'zustand'

export const useQuestionsStore = create((set) => {
  return {
    questions: [],
    currentQuestion: 0,
    categorySelected: false,
    currentCategory: '',
    setStartingData: async () => {
      set({
        questions: [],
        currentQuestion: 7,
        categorySelected: false,
        category: ''
      })
    },
    setCategory: async (category) => {
      set({
        categorySelected: true,
        currentCategory: category
      })
    }
  }
})
