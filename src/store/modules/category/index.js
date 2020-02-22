import actions from './actions'
import mutations from './mutations'

const state = {
  categories: [],
  isLoading: null,
  isLoadingAction: null,
  errors: []
}

export default {
  state,
  mutations,
  actions
}
