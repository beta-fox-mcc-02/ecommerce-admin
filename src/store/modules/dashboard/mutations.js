const mutations = {
  TOGGLE_SIDEBAR (state) {
    state.isToggleDrawer = !state.isToggleDrawer
  },
  SET_PROFILE (state, payload) {
    state.profile = payload
  }
}

export default mutations
