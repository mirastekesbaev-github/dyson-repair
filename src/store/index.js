import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuVisible: false,
    overlayVisible: false
  },
  getters: {
    menuVisible: s => s.menuVisible,
    overlayVisible: s => s.overlayVisible
  },
  mutations: {
    setMenuVisible (state, payload) {
      state.menuVisible = payload
    },
    setOverlayVisible (state, payload) {
      state.overlayVisible = payload
    }
  }
})
