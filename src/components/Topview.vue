<template>
  <div class="top-view">
    <v-container fluid>
      <v-row class="grey-lighten-3 top-view" align="center">
        <v-col lg="8" md="8" sm="8">
          <div @click="backToHome">
            <ul>
              <li class="logo"><img src="../assets/deliman-logo.svg" /></li>
            </ul>
          </div>
        </v-col>
        <v-col>
          <div v-if="isLoggedIn">
            <v-text-field
              hide-details
              label="Search for merchant"
              class="font-weight-light mr-7"
              color="grey"
              outlined
              dense
              single-line
              append-icon="mdi-magnify"
            ></v-text-field>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  methods: {
    backToHome() {
      if (this.isLoggedIn) {
        this.$router.push("/");
      }
    },
  },
  computed: {
    ...mapGetters(["isLoggedIn", "getUserProfile"]),
  },
};
</script>

<style scoped>
ul {
  display: flex;
  list-style: none;
  flex-wrap: wrap;
}
.top-view {
  text-align: center;
  background: #f7faff;
}
</style>