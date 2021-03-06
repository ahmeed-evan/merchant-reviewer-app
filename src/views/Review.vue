<template>
  <div class="merchant-review">
    <div class="merchant-review-bg">
      <v-container class="pt-6 pb-4">
        <v-row class="pb-4">
          <v-col lg="4" md="6" sm="6">
            <v-card class="text-start">
              <v-responsive class="pa-4">
                <v-avatar size="40" class="grey lighten-2">
                  <img :src="selectedMerchant.merchantLogo" />
                </v-avatar>
              </v-responsive>
              <span class="caption pa-4">
                {{ selectedMerchant.merchantName }}
              </span>
              <v-divider class="mt-2"></v-divider>
              <v-row class="justify-space-between">
                <v-col>
                  <v-rating
                    readonly
                    v-model="selectedMerchant.merchantRatingValue"
                    background-color="orange lighten-3"
                    color="orange"
                    small
                  ></v-rating>
                </v-col>
                <v-col class="ma-1">
                  <span class="ma-1 caption">
                    {{ selectedMerchant.merchantRatingValue }}/5
                  </span>
                </v-col>
                <v-col class="ma-1">
                  <v-icon class="pb-1"> mdi-account</v-icon>
                  <span class="caption ml-1">{{
                    selectedMerchant.reviewCount
                  }}</span>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        <span
          ><p class="caption mt-5 text-no-wrap">
            {{ selectedMerchant.merchantAddress }}
          </p></span
        >
        <span
          ><p class="caption text-no-wrap">
            {{ selectedMerchant.merchantContactNumber }}
          </p></span
        >
      </v-container>
    </div>
    <ReviewField />
  </div>
</template>

<script>
import ReviewField from "../components/ReviewField";
import axios from "axios";

export default {
  components: {
    ReviewField,
  },
  props: ["merchantId"],
  data() {
    return {};
  },

  created() {
    const response = axios.get("http://localhost:8080/merchant/get-merchant", {
      params: this.merchantId,
    });

    if (response != null) {
      console.log(response.body);
    }
  },
};
</script>

<style scoped>
.merchant-review-bg {
  background-image: url("../assets/merchant-review-dis-pic.png");
  background-size: 100%;
  color: white;
  height: auto;
  background-repeat: repeat round;
  background-position: center;
}
</style>