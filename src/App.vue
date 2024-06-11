<script setup>
import { ref } from "vue";
import { useProducats } from "./composable/useProducats";

const limit = ref(8);
const skip = ref(0);
const { products, error, loading, fetchProducts } = useProducats(limit, skip);

fetchProducts(); // Initial fetch

const loadMore = () => {
  fetchProducts();
};
</script>

<template>
  <div>
    <div v-if="loading">Loading ...</div>
    <h2 class="text-center py-5">Products</h2>

    <div class="grid grid-cols-4 gap-5">
      <div
        class="bg-gray-200 p-5 rounded"
        v-for="product in products"
        :key="product.id"
      >
        <img :src="product.thumbnail" alt="" />
        <h1 class="text-2xl font-medium line-clamp-1 my-3">
          {{ product.title }}
        </h1>
        <p class="line-clamp-2 mb-3">{{ product.description }}</p>
        <h1 class="text-2xl font-medium">${{ product.price }}</h1>
      </div>
    </div>
    <button @click="loadMore" class="mt-5 bg-blue-500 text-white py-2 px-4 rounded">
      Load More
    </button>
  </div>
</template>

<style scoped></style>
