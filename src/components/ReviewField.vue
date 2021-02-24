<template>
  <div class="review-input-field">
    <v-container class="mt-4 pb-4">
      <v-form>
        <v-row no-gutters class="d-flex justify-center">
          <v-col lg="6" md="6" sm="12">
            <v-rating
              background-color="grey lighten-1"
              color="orange"
              large
              class="d-flex justify-center"
            ></v-rating>
            <v-textarea
              class="font-weight-light"
              auto-grow
              outlined
              rows="3"
              row-height="40"
              shaped
              label="Type your review"
              value=""
            ></v-textarea>
            <v-col class="text-right pa-0">
              <v-btn color="#00BFA5" dark>Submit</v-btn>
            </v-col>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
    <div class="review-list">
      <v-container class="mt-4 pb-4">
        <v-row
          v-for="reviewInfo in reviewInfo"
          :key="reviewInfo.personName"
          no-gutters
          class="d-flex justify-center pb-10"
        >
          <v-col lg="6" md="6" sm="12">
            <v-row class="mr-0" justify="end"
              ><p class="caption">{{ reviewInfo.reviewDate }}</p></v-row
            >
            <v-card>
              <v-row no-gutters class="pt-2">
                <v-col lg="5" md="5" sm="5">
                  <v-card-title>
                    <v-icon left> mdi-account </v-icon>
                    <span class="body-1 font-weight-light">{{
                      reviewInfo.personName
                    }}</span>
                  </v-card-title>
                </v-col>
                <v-col
                  ><span class="caption font-weight-light"
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    soluta minus corporis nostrum at quibusdam ipsum fugit enim
                    suscipit, alias earum rerum laboriosam iure est recusandae,
                    culpa voluptas quisquam deserunt.</span
                  ></v-col
                >
              </v-row>
              <v-row class="ml-3">
                <v-rating
                  readonly
                  v-model="reviewInfo.givenReview"
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
      reviewInfo: [
        {
          personName: "Evan Ahmed",
          givenReview: 4.5,
          reviewDate: "feb-10-2021",
        },
        {
          personName: "Tanveer Ahmed",
          givenReview: 5.0,
          reviewDate: "feb-12-2021",
        },
        {
          personName: "Razib",
          givenReview: 3.0,
          reviewDate: "feb-15-2021",
        },
      ],
    };
  },
};
</script>
