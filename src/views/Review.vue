<template>
  <div class="merchant-review">
    <div class="merchant-review-bg">
      <v-container class="pt-6 pb-4">
        <v-row class="pb-4">
          <v-col lg="4" md="6" sm="6">
            <v-card class="text-start">
              <v-responsive class="pa-4">
                <v-avatar size="40" class="grey lighten-2">
                  <img :src="merchantFacebookLink" />
                </v-avatar>
              </v-responsive>
              <span class="caption pa-4">
                {{ merchantBusinessName }}
              </span>
              <v-divider class="mt-2"></v-divider>
              <v-row class="justify-space-between">
                <v-col>
                  <v-rating
                    readonly
                    v-model="merchantAvgRating"
                    background-color="orange lighten-3"
                    color="orange"
                    small
                  ></v-rating>
                </v-col>
                <v-col class="ma-1">
                  <span class="ma-1 caption"> {{ merchantAvgRating }}/5 </span>
                </v-col>
                <v-col class="ma-1">
                  <v-icon class="pb-1"> mdi-account</v-icon>
                  <span class="caption ml-1">{{ totalReview }}</span>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        <span
          ><p class="caption mt-5 text-no-wrap">
            {{ merchantAddress }}
          </p></span
        >
        <span
          ><p class="caption text-no-wrap">
            +880
            {{ merchantPhoneNumber }}
          </p></span
        >
      </v-container>
    </div>
    <ReviewField :merchantId="merchantId" />
  </div>
</template>

<script>
import ReviewField from "../components/ReviewField";

export default {
  components: {
    ReviewField,
  },
  data() {
    return {
      merchantBusinessName: "",
      merchantFacebookLink: "",
      merchantAddress: "",
      merchantEmail: "",
      merchantPhoneNumber: "",
      merchantAvgRating: 0,
      totalReview: 0,
      merchantId: this.$route.params.merchantId,
    };
  },

  created() {
    let merchant = this.$store.getters.getMerchantByMerchantId(this.merchantId);
    this.merchantBusinessName = merchant.merchantBusinessName;
    this.merchantFacebookLink = merchant.merchantFacebookLink;
    this.merchantAddress = merchant.merchantAddress;
    this.merchantEmail = merchant.merchantEmail;
    this.merchantPhoneNumber = merchant.merchantPhoneNumber;
    this.merchantAvgRating = merchant.merchantAvgRating;
    this.totalReview = merchant.totalReview;
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