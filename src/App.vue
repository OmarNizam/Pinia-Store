<script setup>
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";
// import products from "@/data/products.json";
import { useProductStore } from "./stores/ProductStore";
import { useCardStore } from "./stores/CardStore";
const productStore = useProductStore();
const cardStore = useCardStore();
productStore.fill();

const addToCard = (count, product) => {
  count = parseInt(count);
  cardStore.$patch((state) => {
    for (let i = 0; i < count; i++) {
      state.items.push(product);
    }
  });
};
</script>

<template>
  <div class="container">
    <TheHeader />
    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <ProductCard
        v-for="product in productStore.products"
        :key="product.name"
        :product="product"
        @addToCart="addToCard($event, product)"
      />
    </ul>
  </div>
</template>
