import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as api from '@/api'
Vue.config.productionTip = false

new Vue({
  router,
  data: function(){
    return {
      data:[]
    }
  },
  async created(){
    this.data = await api.getData()
  },
  render: h => h(App)
}).$mount('#app')
