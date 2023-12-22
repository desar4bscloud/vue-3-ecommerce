<script lang="ts">

    import type { PropType } from 'vue';
    import type { Product } from './types';

    export default {
        props:{
            product: {
                type: Object as PropType<Product>,
                required: true
            }
        },
        emits: [
            'addProduct'
        ],
        methods: {
            buttonClick() {
                this.$emit('addProduct');
            }
        }
    }
</script>

<template>
    <p>Nombre: {{ product.name }}</p>
    <p>Precio: {{ product.price }}</p>
    <button @click="buttonClick">
        Agregar al carrito
    </button>
    <hr>
</template>