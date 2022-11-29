import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios';

//axios.defaults.withCredentials = true
//axios.defaults.baseURL = 'http://127.0.0.1:8000';
axios.defaults.baseURL = 'https://api.mynikken.com/';
axios.interceptors.response.use(undefined, function (error) {
  if (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
  
        originalRequest._retry = true;
        store.dispatch('LogOut')
        return router.push('/login')
    }
  }
})

Vue.use(vuetify);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  axios,
  render: function (h) { return h(App) }
}).$mount('#app')
