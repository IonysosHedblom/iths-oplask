import Vue from 'vue'
import Vuex from 'vuex'
import * as api from "@/api";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    favorites: [],
    images: [],
    inputData: "dog",
    page: 1,
    totalPages: [],
  },
  mutations: {
    resetTotalPages(state) {
      state.totalPages = [];
    },
    pushToTotalPages(state, payload) {
      state.totalPages.push(payload);
    },
    resetImages(state) {
      state.images = [];
    },
    pushToImage(state, payload) {
      state.images.push(...payload);
    },
    pushToFavorites(state, payload) {
      state.favorites.push(payload);
    },
    removeFromFavorites(state, payload) {
      state.favorites.splice(payload, 1);
    }
  },
  actions: {
    async search({ commit }, payload) {
      commit('resetImages')
      commit('resetTotalPages')
      const data = await api.getDataBySearch(payload.input, payload.page);
      commit('pushToTotalPages', data.total_pages)
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
