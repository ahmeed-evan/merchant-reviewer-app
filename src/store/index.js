import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import allMerchants from './modules/allMerchants';
import polpularMerchants from './modules/popularMerchants';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    allMerchants,
    polpularMerchants
  }
});
