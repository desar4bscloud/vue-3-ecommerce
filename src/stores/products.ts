import type { Product } from '@/model/types'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
  state: () => ({
    categoryId:null as number|null,
    _products: [
        { 
            id: 1,
            name: 'Silla',
            price: 56,
            image: '/products/silla.jpg',
            categoryId: 1
        },
        { 
            id: 2,
            name: 'Monitor',
            price: 450,
            image: '/products/monitor.jpg',
            categoryId: 1
        },
        { 
            id: 3,
            name: 'Micrófono',
            price: 120,
            image: '/products/microfono.jpg',
            categoryId: 2
        },
        { 
            id: 4,
            name: 'Parlante',
            price: 56,
            image:'/products/parlante.jpg',
            categoryId: 1
        },
        { 
            id: 5,
            name: 'Audífonos',
            price: 450,
            image: '/products/audifonos.jpg',
            categoryId: 2
        },
        { 
            id: 6,
            name: 'Mouse',
            price: 120,
            image: '/products/mouse.jpg',
            categoryId: 2
        },
    ] as Product[]
  }),
  getters: {    
    products(state){
        if(!state.categoryId){
            return state._products
        }

        return state._products.filter(p => p.categoryId === state.categoryId)
    }
  },
  actions: {
    selectCategory(categoryId:number){
        this.categoryId = categoryId;
    }
  },
})