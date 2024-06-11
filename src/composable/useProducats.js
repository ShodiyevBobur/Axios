import { ref } from "vue";
import axios from "axios";

export function useProducats(limit, skip) {
  const products = ref([]);
  const error = ref(null);
  const loading = ref(false);

  const fetchProducts = async () => {
    loading.value = true;
    try {
      const res = await axios.get(
        `https://dummyjson.com/products?limit=${limit.value}&skip=${skip.value}`
      );
      products.value = [...products.value, ...res.data.products];
      skip.value += limit.value;
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  return { products, error, loading, fetchProducts };
}
