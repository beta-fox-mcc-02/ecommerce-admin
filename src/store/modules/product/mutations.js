const mutations = {
  SET_PRODUCTS (state, payload) {
    state.products = payload
  },
  SET_PRODUCT (state, payload) {
    state.product = payload
  },
  SET_LOAD_PRODUCT (state, payload) {
    state.isLodProduct = payload
  },
  SET_PRODUCT_ERRORS (state, payload) {
    state.errors = payload
  },
  SET_PRODUCT_LOADING (state, payload) {
    state.isLoading = payload
  },
  SET_PRODUCT_SUCCESS (state, payload) {
    state.success = payload
  }
}

export default mutations
