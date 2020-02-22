const mutations = {

  SET_AUTH_ERRORS (state, payload) {
    state.errors = payload
  },
  SET_AUTH_SUCCESS (state, payload) {
    state.success = [payload]
  },
  AUTHENTICATED_FAILED (state, payload) {
    state.isAuthenticated = false
    state.errors = payload.errors ? payload.errors : [payload.error]
    state.success = []
  },
  AUTHENTICATED_SUCCESS (state, payload) {
    state.isAuthenticated = true
    state.errors = []
    state.success = payload
  },
  AUTHENTICATED_LOADING (state, payload) {
    state.isLoading = payload
  },
  SET_AUTHENTICATION (state, payload) {
    state.isAuthenticated = payload
  }
}

export default mutations
