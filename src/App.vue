<template>
  <v-app>
    <Navbar />
    <v-main>
      <Topview />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import Topview from "./components/Topview.vue";
import firebase from "firebase";

export default {
  name: "App",

  components: {
    Topview,
    Navbar,
  },

  beforeMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$router.replace("/");
      } else {
        this.$router.replace("/login");
      }
    });
  },

  data: () => ({
    //
  }),
};
</script>
