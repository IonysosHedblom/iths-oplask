import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false

new Vue({
  router,

  data: function () {
    return {
      favorites: [],
      images: [],
      page: 1,
      totalPages: [],
    }
  },

  store,
  render: h => h(App)
}).$mount('#app')
