<script lang="ts">
    import ProductCard from './ProductCard.vue';  
    import Cart from './Cart.vue';  
    import type { CartDetail, Product } from './types';

    export default {
        components: {
            ProductCard,
            Cart
        },
        data() {
            return {
                products: <Array<Product>> [
                    { id: 1, name: 'Silla', price: 56 },
                    { id: 2, name: 'Monitor', price: 450 },
                    { id: 3, name: 'Micrófono', price: 120 }
                ],
                details: <Array<CartDetail>>[]
            };
        },
        methods: {
            onAddProduct(productId: number) {
                const detailFound = this.details.find(d => d.productId === productId);

                console.log(detailFound);

                this.details.push({
                    productId: productId,
                    quantity: 1
                });
            }
        }
    }
</script>

<template>
    <ProductCard 
        v-for="p in products" 
        :product="p"
        @addProduct="onAddProduct(p.id)"
    />

    <Cart :details="details"/>
</template>