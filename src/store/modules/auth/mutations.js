const mutations = {
  AUTHENTICATED_FAILED (state, payload) {
    state.isAuthenticated = false
    state.errors = payload.errors ? payload.errors : [payload.error]
  },
  AUTHENTICATED_SUCCESS (state) {
    state.isAuthenticated = true
    state.errors = []
  },
  AUTHENTICATED_LOADING (state, payload) {
    state.isLoading = payload
  },
  SET_AUTHENTICATION (state, payload) {
    state.isAuthenticated = payload
  }
}

export default mutations
