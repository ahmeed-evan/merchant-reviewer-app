import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import Review from '../views/Review.vue';
import MerchantQuery from '../views/MerchantsQuery.vue';
import AddMerchant from '../views/AddMerchant.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/review/:merchantId',
    name: 'Review',
    component: Review,
    props:true
  },
  {
    path: '/',
    name: 'MerchantQuery',
    component: MerchantQuery
  },
  {
    path: "/add-merchant",
    name: 'AddMerchant',
    component: AddMerchant
  }

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
