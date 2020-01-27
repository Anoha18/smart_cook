export default {
  state: {
    theme: 'light'
  },

  mutations: {
    setTheme(state, theme) {
      state.theme = theme;
    }
  },

  actions: {

  },

  getters: {
    theme: s => s.theme
  },
}