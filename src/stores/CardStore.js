import { defineStore } from "pinia";
import { groupBy } from "lodash";

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
    grouped: (state) => groupBy(state.items, (item) => item.name),
    groupCount: (state) => (name) => state.grouped[name].length, // Dynamic getters
    total: (state) => state.items.reduce((p, c) => p + c.price, 0),
  },
  // actions
  actions: {
    addItem(count, item) {
      count = parseInt(count);
      for (let i = 0; i < count; i++) {
        this.items.push({ ...item }); // clone items state every time this will fix bug
      }
    },

    clearItem(itemName) {
      this.items = this.items.filter((item) => item.name !== itemName);
    },
  },
});
