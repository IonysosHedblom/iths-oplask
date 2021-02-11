import Vue from 'vue'
import Vuex from 'vuex'
import * as api from "@/api";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    favorites: [],
      images: [], 
  },
  mutations: {
    resetImages(state){
    state.images = [];
  },
    pushToImage(state, payload){
    state.images.push(payload);
  }
  },
  actions: {
    async search( {commit} , payload) {
      commit('resetImages')
      const data = await api.getDataBySearch(payload.input, payload.page);
      commit('pushToImage', data.results)
    },
    async loadInitialImages({commit}) {
      const data = await api.getInitialImages();
      commit('pushToImage', data)
    },
  },
  modules: {
  }
})
