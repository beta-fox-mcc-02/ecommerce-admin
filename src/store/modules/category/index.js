import actions from './actions'
import mutations from './mutations'

const state = {
  categories: [],
  isLoading: null,
  isOpenModal: false,
  modalType: null,
  errors: []
}

export default {
  state,
  mutations,
  actions
}
