import { defineStore } from "pinia";

export const useAuthUserStore = defineStore("AuthUserStore", {
  state: () => {
    return {
      userName: "Omar Nizam Aldeen",
    };
  },
});
