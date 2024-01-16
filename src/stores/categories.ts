import type { Category } from '@/model/types'
import { defineStore } from 'pinia'
import categoriesData from '../data/categories.json'

export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    categories: categoriesData as Category[]
  }),
  getters: {
    
  },
  actions: {

  }
})