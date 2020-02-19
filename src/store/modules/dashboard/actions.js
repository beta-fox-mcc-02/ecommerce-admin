import resource from '../../../config/resource'

const actions = {
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
