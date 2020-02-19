import resource from '../../../config/resource'

const actions = {
  toggleDrawer: ({ commit }) => {
    commit('TOGGLE_SIDEBAR')
  },
  getProfile: ({ commit }) => {
    resource.getAdmin()
      .then(response => {
        commit('SET_PROFILE', response.body)
      })
      .catch(err => {
        commit('SET_PROFILE', null)
        console.log(err)
      })
  }
}

export default actions
