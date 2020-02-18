const mutations = {
  AUTHENTICATED_FAILED (state, payload) {
    state.isAuthenticated = false
    state.errors = payload.errors ? payload.errors : [payload.error]
  },
  AUTHENTICATED_LOADING (state, payload) {
    state.isLoading = payload
  }
}

export default mutations
