import resource from '../../../config/resource'

const actions = {
  addProduct: ({ commit }, payload) => {
    return resource.addProduct(payload)
  },
  editProduct: ({ commit }, payload) => {
    return resource.editProduct({ id: payload.id }, payload.formData)
  },
  deleteProduct: ({ commit }, payload) => {
    return resource.deleteProduct({ id: payload.id })
  },
  getProducts: ({ commit }) => {
    commit('SET_PRODUCT_LOADING', true)
    resource.getProducts()
      .then(response => {
        commit('SET_PRODUCT_LOADING', false)
        commit('SET_PRODUCTS', response.body.products)
      })
      .catch((err) => {
        console.log(err)
        commit('SET_PRODUCT_LOADING', false)
        commit('SET_PRODUCT_ERRORS', err.body.errors)
      })
  },
  findOneProduct: ({ commit }, id) => {
    commit('SET_LOAD_PRODUCT', true)
    return resource.findOneProduct({ id })
  }
}

export default actions
