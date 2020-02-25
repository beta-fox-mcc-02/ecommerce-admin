import actions from './actions'
import mutations from './mutations'

const state = {
  products: [],
  errors: [],
  isLoading: null,
  isLodProduct: null,
  success: [],
  product: {
    name: '',
    price: '',
    stock: '',
    category: {
      id: ''
    },
    SKU: '',
    description: '',
    weight: '',
    files: [
      {
        id: 0,
        isLoading: false,
        file: {}
      }
    ]
  }
}

export default {
  state,
  mutations,
  actions
}
