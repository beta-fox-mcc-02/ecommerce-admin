import resource from '../../../config/resource'

const actions = {
  login: ({ commit }, authData) => {
    commit('AUTHENTICATED_LOADING', true)
    return resource.login(authData)
  },
  register: ({ commit }, payload) => {
    commit('AUTHENTICATED_LOADING', true)
    return resource.register(payload)
  },
  checkAuthentication: ({ commit }) => {
    return resource.getAdmin()
  },
  logout: ({ commit }) => {
    commit('SET_AUTHENTICATION', false)
    localStorage.removeItem('token')
  }
}

export default actions
