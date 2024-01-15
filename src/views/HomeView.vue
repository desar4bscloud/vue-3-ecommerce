<script lang="ts">
  import CategoryList from '@/components/CategoryList.vue';
  import ProductList from '@/components/ProductList.vue';

  export default{
      components: {
        ProductList,
        CategoryList,
    }
  }
</script>

<template>

  <v-row>
    <v-col cols="2">
      <CategoryList/>
    </v-col>
    <v-col cols="10">
      <ProductList />
    </v-col>
  </v-row>

</template>
