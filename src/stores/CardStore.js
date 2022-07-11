import { defineStore } from "pinia";

export const useCardStore = defineStore("CardStore", {
  state: () => {
    return {
      items: [],
    };
  },
  // getters
  getters: {
    count: (state) => state.items.length,
    isEmpty: (state) => state.count === 0,
  },
  // actions
  actions: {
    addItem(count, item) {
      count = parseInt(count);
      for (let i = 0; i < count; i++) {
        this.items.push({ ...item }); // clone items state every time this will fix bug
      }
    },
  },
});
