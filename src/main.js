import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false

new Vue({
  router,
  data: function(){
    return {
      favorites: [],
      images: [],
      randomtest: [1,2,3,4,5,6,7,6,6,6,66,6],
    }
  },
  render: h => h(App)
}).$mount('#app')
