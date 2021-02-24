<template>
  <div class="login-content">
    <v-container>
      <img class="img_image1" src="../assets/login-bg-img.svg" />

      <v-row class="mt-4">
        <v-divider light></v-divider>
      </v-row>
      <div class="my-8">
        <span class="subtitle font-weight-light"
          >Log in to feedback community with</span
        >
      </div>
      <v-row no-gutter>
        <v-col class="text-center">
          <v-btn
            @click="loginWithFacebook"
            block
            color="blue lighten-1 font-weight-light"
            dark
          >
            <v-icon left> mdi-facebook </v-icon>
            Facebook
          </v-btn>
        </v-col>
        <v-col class="text-center">
          <v-btn
            @click="loginWithGoogle"
            block
            dark
            color="red lighten-1 font-weight-light"
            ><v-icon left> mdi-google </v-icon> Google</v-btn
          ></v-col
        >
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",

  methods: {
    ...mapActions(["loginWithGoogle"]),
  },
};
</script>

<style scoped>
.login-content {
  text-align: center;
  margin-top: 5%;
}
</style>