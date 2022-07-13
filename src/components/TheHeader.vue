<script>
// imports
import CartWidget from "./CartWidget.vue";
import { useAuthUserStore } from "../stores/AuthUserStore";
import { mapState, mapActions } from "pinia";
// import { mapWritableState } from "pinia";

export default {
  components: {
    CartWidget,
  },
  computed: {
    // ...mapState(useAuthUserStore, ["userName"]),
    /**
     * *other way
     * */
    // ...mapState(useAuthUserStore, {
    //   user: "userName",
    // }),
    /**
     * *it can be returning function so you can change the value:
     * */
    ...mapState(useAuthUserStore, {
      user: (store) => `Welcome ${store.userName}`,
    }),
    /**
     * * we can mutate state from component
     * */
    // ...mapWritableState(useAuthUserStore, {
    //   user: "userName",
    // }),
  },
  methods: {
    ...mapActions(useAuthUserStore, {
      toGitHub: "visitGitHubProfile",
    }),
  },
};
</script>

<template>
  <header
    class="flex justify-between p-6 mb-10 items-center"
    style="background-image: url('src/assets/images/double-bubble-outline.png')"
  >
    <h1 class="text-4xl text-gray-700 font-bold">The Pineapple Stand</h1>
    <div>
      <!-- <input v-model="user" type="text" /> -->
      <span class="mr-5" @click="toGitHub">{{ user }}</span>
      <CartWidget class="inline-block" />
    </div>
  </header>
</template>
