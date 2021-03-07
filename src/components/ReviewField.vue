<template>
  <div class="review-input-field">
    <v-container class="mt-4 pb-4">
      <v-row no-gutters class="d-flex justify-center">
        <v-col lg="6" md="6" sm="12">
          <v-rating
            v-model="reviewDetails.merchantRating"
            background-color="grey lighten-1"
            color="orange"
            large
            class="d-flex justify-center"
            value=""
          ></v-rating>
          <v-textarea
            v-model="reviewDetails.reviewComment"
            class="font-weight-light"
            auto-grow
            outlined
            rows="3"
            color="grey darken-1"
            row-height="40"
            shaped
            label="Type your review"
            value=""
          ></v-textarea>
          <v-col class="text-right pa-0">
            <v-btn @click="submit" color="#00BFA5" dark>Submit</v-btn>
          </v-col>
        </v-col>
      </v-row>
    </v-container>
    <div class="review-list">
      <v-container class="mt-4 pb-4">
        <v-row
          v-for="review in reviewInfo"
          :key="review.reviewDate"
          no-gutters
          class="d-flex justify-center pb-10"
        >
          <v-col lg="6" md="6" sm="12">
            <v-row class="mr-0" justify="end"
              ><p class="caption">{{ review.reviewCreated }}</p></v-row
            >
            <v-card>
              <v-row no-gutters class="pt-2">
                <v-col lg="5" md="5" sm="5">
                  <v-card-title>
                    <v-avatar size="20" class="grey lighten-2">
                      <img :src="review.userPictureUrl" />
                    </v-avatar>
                    <span class="body-1 ml-2 font-weight-light">{{
                      review.userName
                    }}</span>
                  </v-card-title>
                </v-col>
                <v-col
                  ><span class="caption font-weight-light">{{
                    review.reviewComment
                  }}</span></v-col
                >
              </v-row>
              <v-row class="ml-2">
                <v-rating
                  readonly
                  v-model="review.merchantRating"
                  background-color="white"
                  color="orange"
                  small
                ></v-rating>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      reviewInfo: [],
      reviewDetails: {
        merchantRating: 0,
        reviewComment: "",
        userName: "",
        userEmail: "",
        userPictureUrl: "",
      },
    };
  },

  methods: {
    submit() {
      console.log(this.reviewDetails);
    },

    mounted() {
      const user = this.$store.getters.getUserProfile;
      console.log("hello" + user);
    },
  },
};
</script>
