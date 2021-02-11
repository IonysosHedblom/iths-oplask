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
      state.images.push(...payload);
    },
    pushToFavorites(state, payload){
      state.favorites.push(payload);
    },
    removeFromFavorites(state, payload) {
      state.favorites.splice(payload, 1);
    }
  },
  actions: {
    async search({ commit } , payload) {
      commit('resetImages')
      const data = await api.getDataBySearch(payload.input, payload.page);
      commit('pushToImage', data.results)
    },
    async loadInitialImages({ commit }) {
      const data = await api.getInitialImages();
      commit('pushToImage', data)
    },
    pushToFavorites({ commit }, payload) {
      commit('pushToFavorites', payload);
    },
    removeFromFavorites({ commit }, payload) {
      commit('removeFromFavorites', payload);
    }
  },
})
