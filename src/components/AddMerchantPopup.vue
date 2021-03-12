<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn color="#2F80ED" class="caption" dark v-on="on"
          >Add new Merchant</v-btn
        >
      </template>

      <v-card>
        <v-card-title class="caption grey lighten-2" primary-title
          >Add Merchant Information</v-card-title
        >
        <v-form ref="form">
          <v-list-item>
            <v-col class="mb-4">
              <v-text-field
                :rules="businessNameRules"
                class="mt-2"
                label="Business Name"
                outlined
                v-model="merchantInfo.merchantBusinessName"
                color="grey"
                rows="1"
              ></v-text-field>
              <v-text-field
                :rules="fbLinkRules"
                class="mt-2"
                v-model="merchantInfo.merchantFacebookLink"
                label="Facebook Link"
                outlined
                color="grey"
                rows="1"
              ></v-text-field>
              <v-text-field
                v-model="merchantInfo.merchantAddress"
                class="mt-2"
                label="Address (optional)"
                outlined
                color="grey"
                rows="1"
              ></v-text-field>
              <v-text-field
                :rules="phoneNumberRule"
                class="mt-2"
                v-model="merchantInfo.merchantPhoneNumber"
                label="Phone Number"
                outlined
                prefix="+880"
                color="grey"
                rows="1"
              ></v-text-field>
              <v-text-field
                :rules="emailRules"
                class="mt-2"
                label="Email "
                outlined
                v-model="merchantInfo.merchantEmail"
                color="grey"
                rows="1"
              ></v-text-field>
              <v-row>
                <v-col class="text-center" lg="6" md="6" sm="6">
                  <v-btn
                    @click="dialog = false"
                    block
                    color="red lighten-1 caption"
                    dark
                    >Cancel</v-btn
                  >
                </v-col>
                <v-col class="text-center">
                  <v-btn
                    @click="addMerchant"
                    block
                    dark
                    color="blue lighten-1 caption"
                    >Add</v-btn
                  ></v-col
                >
              </v-row>
            </v-col>
          </v-list-item>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      dialog: false,

      merchantInfo: {
        merchantBusinessName: "",
        merchantFacebookLink: "",
        merchantAddress: "",
        merchantEmail: "",
        merchantPhoneNumber: "",
      },

      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      businessNameRules: [
        (v) => !!v || "Business Name is required",
        //  (v) => v.length >= 4 || "",
      ],
      fbLinkRules: [
        (v) => !!v || "Facebook link is required",
        //  (v) => v.length >= 4 || "",
      ],

      phoneNumberRule: [
        (v) => !!v || "Phone Number is required",
        (v) => v.length == 10 || "Number must be valid(User only number)",
      ],
    };
  },

  methods: {
    async addMerchant() {
      if (this.$refs.form.validate()) {
        await axios
          .post(
            "http://localhost:8080/merchant/add-merchant",
            this.merchantInfo
          )
          .then((res) => console.log(res))
          .catch((err) => alert(err.message));
      }
      this.dialog = false;
      this.$router.replace("/");
    },
  },
};
</script>

<style scoped>
</style>