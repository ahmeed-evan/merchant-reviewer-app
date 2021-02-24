<template>
  <div class="navbar">
    <v-container fluid>
      <v-row no-gutters align="center">
        <v-col lg="8" md="8" sm="12">
          <div class="text-content">
            <ul>
              <li><p class="font-weight-light mr-2">Have any question</p></li>
              <li>
                <v-icon class="ml-2 mr-2 orange--text"
                  >mdi-phone-in-talk</v-icon
                >
              </li>
              <li><p class="font-weight-light mr-2">+880 1300 667091</p></li>
              <li><v-icon class="ml-2 mr-2 orange--text">mdi-email</v-icon></li>
              <li><p class="font-weight-light">info@deliman.com.bd</p></li>
            </ul>
          </div>
        </v-col>
        <v-col lg="4" md="4">
          <v-row v-if="isLoggedIn" no-gutters class="px-4" align="center">
            <v-col>
              <v-avatar size="40" class="white dakern-3 mr-4">
                <img :src="getUserProfile.picture" />
              </v-avatar>
              <span class="profile-name font-weight-light white--text">
                {{ getUserProfile.name }}
              </span></v-col
            >
            <v-col lg="3" md="5" sm="5"
              ><v-btn
                @click="logout"
                color="#EF5350"
                dark
                class="font-weight-light"
              >
                Sign Out</v-btn
              ></v-col
            >
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Navbar",

  data() {
    return {};
  },
  methods: {
    ...mapActions(["logout"]),
  },

  computed: {
    ...mapGetters(["isLoggedIn", "getUserProfile"]),
  },
};
</script>

<style scoped>
.text-content ul {
  list-style: none;
  margin-top: 10px;
  color: white;
  display: inline-flex;
}
.navbar {
  background: #0d1f35;
}
</style>