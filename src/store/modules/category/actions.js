import resource from '../../../config/resource'

const actions = {
  fetchCategories: ({ commit }) => {
    commit('SET_LOADING', true)
    resource.getCategories()
      .then(response => {
        commit('SET_LOADING', false)
        commit('SET_CATEGORIES', response.body)
        commit('SET_ERRORS', [])
      })
      .catch(err => {
        commit('SET_LOADING', false)
        commit('SET_ERRORS', err.body.errors)
      })
  },
  openModalCategory: ({ state }, id) => {
    state.isOpenModal = !state.isOpenModal
    if (id) {
      state.modalType = 'edit'
    } else {
      state.modalType = 'add'
    }
  },
  closeModalCategory: ({ commit, state }) => {
    state.isOpenModal = !state.isOpenModal
    commit('SET_LOADING', false)
    commit('SET_ERRORS', [])
  },
  createCategory: ({ commit }, payload) => {
    commit('SET_LOADING', true)
    return resource.createCategory(payload)
  },
  deleteCategory: ({ commit }, payload) => {
    commit('SET_LOADING', true)
    return resource.deleteCategory({ id: payload.id })
  }
}

export default actions
