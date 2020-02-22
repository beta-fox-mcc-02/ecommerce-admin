const mutations = {
  SET_CATEGORIES (state, payload) {
    state.categories = payload
  },
  SET_LOADING (state, payload) {
    state.isLoading = payload
  },
  SET_ERRORS (state, payload) {
    state.errors = payload
  }
}

export default mutations
