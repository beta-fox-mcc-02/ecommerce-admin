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
  createCategory: ({ commit }, payload) => {
    commit('SET_LOADING_ACTIONS', true)
    return resource.createCategory(payload)
  },
  deleteCategory: ({ commit }, payload) => {
    commit('SET_LOADING_ACTIONS', true)
    return resource.deleteCategory({ id: payload.id })
  }
}

export default actions
