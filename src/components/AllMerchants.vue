<template>
  <v-container fluid>
    <span class="d-flex justify-center">All Merchants</span>
    <v-row class="d-flex justify-start">
      <v-col
        v-for="merchant in getMerchantsList"
        :key="merchant.merchantId"
        class="mt-4"
        sm="6"
        md="4"
        lg="3"
        cols="12"
      >
        <v-card
          @click="goToReview(merchant.merchantId)"
          text
          class="text-start"
        >
          <v-responsive class="py-4 px-3">
            <v-avatar size="40" class="grey lighten-2">
              <img :src="merchant.merchantFacebookLink" />
            </v-avatar>
          </v-responsive>
          <span class="caption pa-4">
            {{ merchant.merchantBusinessName }}
          </span>

          <v-divider class="mt-2"></v-divider>

          <v-row class="justify-space-between">
            <v-col>
              <v-rating
                readonly
                v-model="merchant.merchantAvgRating"
                background-color="orange lighten-3"
                color="orange"
                small
              ></v-rating>
            </v-col>
            <v-col class="ma-1">
              <span class="ma-1 caption">
                {{ merchant.merchantAvgRating }}/5
              </span>
            </v-col>
            <v-col class="ma-1">
              <v-icon class="pb-1"> mdi-account</v-icon>
              <span class="caption ml-1">{{ merchant.totalReview }}</span>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["fetchAllMerchants"]),
    goToReview(merchantId) {
      this.$router.push({ name: "Review", params: { merchantId: merchantId } });
    },
  },
  computed: {
    ...mapGetters(["getMerchantsList"]),
  },
  created() {
    this.fetchAllMerchants();
  },
};
</script>