import resource from '../../../config/resource'

const actions = {
  login: ({ commit }, authData) => {
    commit('AUTHENTICATED_LOADING', true)
    resource.login(authData)
      .then(response => {

      })
      .catch(error => {
        commit('AUTHENTICATED_FAILED', error.body)
        commit('AUTHENTICATED_LOADING', false)
      })
  }
}

export default actions
