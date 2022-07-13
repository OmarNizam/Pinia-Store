import { defineStore } from "pinia";

export const useAuthUserStore = defineStore("AuthUserStore", {
  state: () => {
    return {
      userName: "OmarNizam",
    };
  },
  // getters: {
  //   userName: () => "Omar from Getter",
  // },
  actions: {
    visitGitHubProfile() {
      window.open(`https://github.com/${this.userName}`, "_blank");
    },
  },
});
