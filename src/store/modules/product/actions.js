import resource from '../../../config/resource'

const actions = {
  addProduct: ({ commit }, payload) => {
    return resource.addProduct(payload)
  },
  editProduct: ({ commit }, product) => {
    return resource.editProduct({ id: product.id },
      {
        name: product.name,
        price: product.price,
        stock: product.stock,
        category: product.category,
        SKU: product.SKU,
        description: product.description,
        weight: product.weight
      })
  },
  deleteProduct: ({ commit }, payload) => {
    return resource.deleteProduct({ id: payload.id })
  },
  addProductImage: ({ commit }, payload) => {
    return resource.addProductImage(payload)
  },
  deleteProductImage: ({ commit }, id) => {
    return resource.deleteProductImage({ id })
  },
  editProductImage: ({ commit }, payload) => {
    return resource.editProductImage({ id: payload.id }, payload.formData)
  },
  getProducts: ({ commit }) => {
    commit('SET_PRODUCT_LOADING', true)
    resource.getProducts()
      .then(response => {
        commit('SET_PRODUCT_LOADING', false)
        commit('SET_PRODUCTS', response.body.products)
      })
      .catch((err) => {
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
