import { defineStore } from "pinia";
// import products from "@/data/products.json"; // static import

export const useProductStore = defineStore("ProductStore", {
  state: () => {
    return {
      products: [],
    };
  },
  // actions
  actions: {
    async fill() {
      //  using dynamic import
      this.products = (await import("@/data/products.json")).default;
    },
  },
  // getters
});
