<script setup>
// imports
import { ref } from "vue";
import CartItem from "./CartItem.vue";
import { useCardStore } from "../stores/CardStore";
const cardStore = useCardStore();
// data
const active = ref(false);
</script>
<template>
  <div class="relative">
    <!-- Icon that always shows -->
    <span class="cursor-pointer" @click="active = true">
      <fa icon="shopping-cart" size="lg" class="text-gray-700" />
      <div class="cart-count absolute">{{ cardStore.count }}</div>
    </span>
    <!-- Modal Overlay only shows when cart is clicked on -->
    <AppModalOverlay :active="active" @close="active = false">
      <div v-if="!cardStore.isEmpty">
        <ul class="items-in-cart">
          <CartItem
            v-for="(items, name) in cardStore.grouped"
            :key="name"
            :product="items[0]"
            :count="cardStore.groupCount(name)"
            @updateCount="cardStore.setItemCount(items[0], $event)"
            @clear="cardStore.clearItem(name)"
          />
        </ul>
        <div class="flex justify-end text-2xl mb-5">
          Total: <strong>${{ cardStore.total }}</strong>
        </div>
        <div class="flex justify-end">
          <AppButton class="secondary mr-2" @click="cardStore.$reset()"
            >Clear Cart</AppButton
          >
          <AppButton class="primary" @click="cardStore.checkOut">
            Checkout
          </AppButton>
        </div>
      </div>
      <!-- Uncomment and use condition to show when cart is empty -->
      <div><em>Cart is Empty</em></div>
    </AppModalOverlay>
  </div>
</template>
<style lang="pcss" scoped>
.items-in-cart{
  @apply mb-5;
}
.items-in-cart li{
  @apply flex justify-between p-2;
}
.items-in-cart li:nth-of-type(even){
  @apply bg-gray-300;
}
</style>
