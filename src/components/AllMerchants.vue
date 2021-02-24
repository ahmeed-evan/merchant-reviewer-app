<template>
  <v-container fluid>
    <span class="d-flex justify-center">All Merchants</span>
    <v-row class="d-flex justify-start">
      <v-col
        v-for="merchant in getMerchantsList"
        :key="merchant.merchantName"
        class="mt-4"
        sm="6"
        md="4"
        lg="3"
        cols="12"
      >
        <v-card text class="text-start">
          <v-responsive class="pa-4">
            <v-avatar size="40" class="grey lighten-2">
              <img :src="merchant.merchantLogo" />
            </v-avatar>
          </v-responsive>
          <span class="caption pa-4"> {{ merchant.merchantName }} </span>
          <v-divider class="mt-2"></v-divider>
          <v-row class="justify-space-between">
            <v-col>
              <v-rating
                readonly
                v-model="merchant.merchantRatingValue"
                background-color="orange lighten-3"
                color="orange"
                small
              ></v-rating>
            </v-col>
            <v-col class="ma-1">
              <span class="ma-1 caption">
                {{ merchant.merchantRatingValue }}/5
              </span>
            </v-col>
            <v-col class="ma-1">
              <v-icon class="pb-1"> mdi-account</v-icon>
              <span class="caption ml-1">{{ merchant.reviewCount }}</span>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getMerchantsList"]),
  },
};
</script>