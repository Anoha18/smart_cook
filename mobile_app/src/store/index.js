import Vue from 'vue'
import Vuex from 'vuex';

import SettingsModule from './settings'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    SettingsModule
  },
  state: {
    toolbar: {
      visible: true
    }
  },
  mutations: {
    setToolbarVisible(state, param) {
      state.toolbar.visible = param;
    }
  },
  getters: {
    isVisibleToolbar: s => s.toolbar.visible
  }
})