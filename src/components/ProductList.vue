<script lang="ts">
    import ProductCard from './ProductCard.vue'; 
    import type { Product } from '@/model/types';
    
    export default {
        components: {
            ProductCard
        },
        data() {
            return {
                products: [
                    { id: 1, name: 'Silla', price: 56,image:'https://www.toplivingusa.com/images/productos/59812015-BURDEOS-0.jpg'},
                    { id: 2, name: 'Monitor', price: 450,image:'https://pcredcom.com/blog/wp-content/uploads/2020/07/monitor-dell.jpg' },
                    { id: 3, name: 'Micrófono', price: 120, image:'https://files.soniccdn.com/files/2022/11/20/se-electronics-v7.jpg'},
                    { id: 4, name: 'Parlante', price: 56, image:'/parlante.jpg'},
                    { id: 5, name: 'Audífonos', price: 450},
                    { id: 6, name: 'Mouse', price: 120}
                ] as Product[]
            }
        }
    }
</script>

<template>
        <v-row>
            <v-col v-for="p in products" :key="p.id" cols="4">
                <ProductCard :product="p"/>
            </v-col>
        </v-row>
</template>