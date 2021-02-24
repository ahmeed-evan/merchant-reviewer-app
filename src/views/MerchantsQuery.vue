<template>
  <div class="main-contents">
    <div class="query-field">
      <v-container>
        <v-row no-gutters class="pa-4 d-flex justify-center">
          <v-col>
            <span class="display-1">
              Search merchant and <br />
              give feedback ...
            </span>
          </v-col>

          <v-col class="mt-5 text-center">
            <span class="headline">OR</span></v-col
          >

          <v-col class="text-center"
            ><v-btn @click=" $router.push('/add-merchant') " color="#2979FF" dark class="mt-4"
              >Register as a merchant</v-btn
            ></v-col
          >
        </v-row>
      </v-container>
    </div>
    <popularMerchant />
    <v-divider class="mt-10"></v-divider>
    <AllMerchants class="pb-10" />
  </div>
</template>
<script>
import PopularMerchant from "../components/PopularMerchant";
import AllMerchants from "../components/AllMerchants";
export default {
  components: {
    PopularMerchant,
    AllMerchants,
  },
};
</script>
<style scoped>
.query-field {
  background-image: url("../assets/merchant-query.png");
  background-size: 100%;
  color: white;
  height: auto;
  background-repeat: repeat;
  background-position: center;
}
</style>
