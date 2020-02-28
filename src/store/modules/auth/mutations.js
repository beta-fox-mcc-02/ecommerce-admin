const mutations = {

  SET_AUTH_ERRORS (state, payload) {
    state.errors = payload
    state.success = []
  },
  SET_AUTH_SUCCESS (state, payload) {
    state.success = [payload]
    state.errors = []
  },
  AUTHENTICATED_FAILED (state, payload) {
    state.isAuthenticated = false
    state.errors = payload.errors ? payload.errors : [payload.error]
    state.success = []
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
