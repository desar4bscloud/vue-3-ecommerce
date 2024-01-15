<script lang="ts">
    import ProductCard from './ProductCard.vue';  
    import Cart from './Cart.vue';  
    import type { CartDetail, Product } from '@/model/types';
    
    export default {
        components: {
            ProductCard,
            Cart
        },
        props: ['details'],
        data() {
            return {
                products: <Array<Product>> [
                    { id: 1, name: 'Silla', price: 56 },
                    { id: 2, name: 'Monitor', price: 450 },
                    { id: 3, name: 'Micr�fono', price: 120 }
                ]
            }
        },
        methods: {
            onAddProduct(productId: number) {
                const detailFound = this.details.find(d => d.productId === productId);

                if(detailFound){
                    detailFound.quantity++
                }else{
                    this.details.push({
                        productId: productId,
                        quantity: 1
                    });
                }

            }
        }
    }
</script>

<template>
        <v-row>
            <v-col v-for="p in products" cols="4">
                <ProductCard 
                    :product="p"
                    @addProduct="onAddProduct(p.id)"
                />
            </v-col>
        </v-row>
    
        <Cart :details="details"/>
</template>