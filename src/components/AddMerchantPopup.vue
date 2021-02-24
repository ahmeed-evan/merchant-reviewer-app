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
        <v-form>
          <v-list-item>
            <v-col class="mb-4">
              <v-text-field
                class="mt-2"
                label="Business Name"
                outlined
                color="grey"
                rows="1"
              ></v-text-field>
              <v-text-field
                class="mt-2"
                label="Facebook Link"
                outlined
                color="grey"
                rows="1"
              ></v-text-field>
              <v-text-field
                class="mt-2"
                label="Address (optional)"
                outlined
                color="grey"
                rows="1"
              ></v-text-field>
              <v-text-field
                class="mt-2"
                label="Phone Number (optional)"
                outlined
                color="grey"
                rows="1"
              ></v-text-field>
              <v-text-field
                class="mt-2"
                label="Email (optional)"
                outlined
                color="grey"
                rows="1"
              ></v-text-field>
              <v-row>
                <v-col class="text-center " lg="6" md="6" sm="6">
                  <v-btn block color="red lighten-1 caption" dark>Cancel</v-btn>
                </v-col>
                <v-col class="text-center" > <v-btn block dark color="blue lighten-1 caption">Add</v-btn></v-col>
              </v-row>
            </v-col>
          </v-list-item>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>
<style scoped>
</style>