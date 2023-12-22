<script lang="ts">    
import type { PropType } from 'vue';
import type { CartDetail } from './types';

export default {
    props: {
        details: {
            type: Object as PropType<Array<CartDetail>>,
            required: true
        }
    }
}
</script>

<template>
    <p>Productos agregados al carrito:</p>
    <ul>
        <li v-for="detail in details">
            Producto: {{ detail.productId }} (Cantidad: {{detail.quantity }})
        </li>
    </ul>
</template>