<template>
  <div>
    <div class="main-content">
      <div>
        <img class="bg-image" src="../assets/add-merchant-bg-pic.svg" />
        <h2>ops!!! We did not find any merchant as this name.</h2>
      </div>
      <v-row align="center" justify="center">
        <v-btn @click="$router.push('/')" dark class="black caption">Back home</v-btn>
        <AddMerchantPopup class="ml-5" />
      </v-row>
    </div>
  </div>
</template>
<script>

import AddMerchantPopup from "../components/AddMerchantPopup";

export default {
  components: {
    AddMerchantPopup,
  },
};
</script>
<style scoped>
.main-content {
  text-align: center;
  text-decoration-style: solid;
  padding-bottom: 40px;
}
h2 {
  padding: 50px;
}
</style>