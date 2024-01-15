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
                    { id: 1, name: 'Silla', price: 56 },
                    { id: 2, name: 'Monitor', price: 450 },
                    { id: 3, name: 'Micrófono', price: 120 },
                    { id: 1, name: 'Silla', price: 56 },
                    { id: 2, name: 'Monitor', price: 450 },
                    { id: 3, name: 'Micrófono', price: 120 }
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