import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import firebase from 'firebase';

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyBkefppHAb0hSFDBrzx1dWVLQFKBZkaLZw",
  authDomain: "merchant-review-app.firebaseapp.com",
  projectId: "merchant-review-app",
  storageBucket: "merchant-review-app.appspot.com",
  messagingSenderId: "705979132520",
  appId: "1:705979132520:web:91c7c527c950f2a0d529dd",
  measurementId: "G-N3QLB562K0"
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
