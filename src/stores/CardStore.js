import { defineStore } from "pinia";
import { groupBy } from "lodash";
import { useAuthUserStore } from "../stores/AuthUserStore";

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
    grouped: (state) => {
      const grouped = groupBy(state.items, (item) => item.name);
      const sorted = Object.keys(grouped).sort();

      let inOrder = {};

      sorted.forEach((key) => (inOrder[key] = grouped[key]));
      return inOrder;
    },
    groupCount: (state) => (name) => state.grouped[name].length, // Dynamic getters
    total: (state) => state.items.reduce((p, c) => p + c.price, 0),
  },
  // actions
  actions: {
    checkOut() {
      const authUserStore = useAuthUserStore();
      alert(
        `${authUserStore.userName} just bought ${this.count} items at a total of $${this.total}`
      );
    },

    addItem(count, item) {
      count = parseInt(count);
      for (let i = 0; i < count; i++) {
        this.items.push({ ...item }); // clone items state every time this will fix bug
      }
    },

    clearItem(itemName) {
      this.items = this.items.filter((item) => item.name !== itemName);
    },

    setItemCount(item, count) {
      this.clearItem(item.name);
      this.addItem(count, item);
    },
  },
});
