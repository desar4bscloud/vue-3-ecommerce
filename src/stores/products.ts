import type { Product } from '@/model/types'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
  state: () => ({
    order: 'price' as string,
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
        let products = null;
        // Filter
        if(state.categoryId){
            products = state._products.filter(p => p.categoryId === state.categoryId)
        }else{
            products = state._products
        }
        // Order
        if(state.order === ''){
            return products
        }        
        if(state.order === 'price'){
            return products.sort((a,b)=> a.price - b.price)
        }
        if(state.order === 'priceDesc'){
            return products.sort((a,b)=> b.price - a.price)
        }
        if(state.order === 'name'){
            return products.sort((a,b)=> a.name.localeCompare(b.name))
        }
        if(state.order === 'nameDesc'){
            return products.sort((a,b)=> b.name.localeCompare(a.name))
        }
    }
  },
  actions: {
    selectCategory(categoryId:number){
        this.categoryId = categoryId;
    },
    orderByPrice(){
        this.order = 'price';
    },
    orderByName(){
        this.order = 'name';
    },
    orderByPriceDesc(){
        this.order = 'priceDesc';
    },
    orderByNameDesc(){
        this.order = 'nameDesc';
    },
  },
})