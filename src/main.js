import Vue from 'vue';
import VueAxios from 'vue-axios';
import Vuex from 'vuex';
import Vuesax from 'vuesax';
import 'vuesax/dist/vuesax.css';
import 'material-icons/iconfont/material-icons.css';
import axios from './backend/axios';
import { securedAxiosInstance, plainAxiosInstance } from './backend/axios';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.use(VueAxios, {
  secured: securedAxiosInstance,
  plain: plainAxiosInstance,
});
Vue.use(Vuex);
Vue.use(Vuesax);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  securedAxiosInstance,
  plainAxiosInstance,
  components: { App },
  template: '<App/>',
});
