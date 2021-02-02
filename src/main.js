import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as api from '@/api'
Vue.config.productionTip = false

new Vue({
  router,
  data: function(){
    return {
      images: [],
      favorites: [],
      inputData: '',
    }
  },
  methods: {
    async getInitialImages() {
      console.log('this was run')
      await api.getInitialImages();
    },
    async getSearchData() {
      console.log('this was run 123' )
      await api.getDataBySearch(this.inputData);
    }
  },
  render: h => h(App)
}).$mount('#app')
