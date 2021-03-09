import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import allMerchants from './modules/allMerchants';
import polpularMerchants from './modules/popularMerchants';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState({
    paths: ['user',]
  })],
  modules: {
    user,
    allMerchants,
    polpularMerchants
  }
});
