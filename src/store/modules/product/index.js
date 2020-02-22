import actions from './actions'
import mutations from './mutations'

const state = {
  products: [],
  errors: [],
  isLoading: null,
  isLodProduct: null,
  success: []
}

export default {
  state,
  mutations,
  actions
}
