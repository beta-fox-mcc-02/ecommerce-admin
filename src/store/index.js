import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [{
      id: 1,
      name: 'Smartphone 1',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda itaque sequi magnam atque. Iste odio repellendus autem? Et, aut itaque.',
      category: 'Smartphone',
      price: '100000',
      stock: 10,
      imageUrl: 'https://radscanmedical.com/wp-content/uploads/2018/11/coming-soon.png'
    }, {
      id: 2,
      name: 'Komputer 1',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda itaque sequi magnam atque. Iste odio repellendus autem? Et, aut itaque.',
      category: 'Computer',
      price: '200000',
      stock: 10,
      imageUrl: 'https://radscanmedical.com/wp-content/uploads/2018/11/coming-soon.png'
    }, {
      id: 3,
      name: 'Komputer 2',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda itaque sequi magnam atque. Iste odio repellendus autem? Et, aut itaque.',
      category: 'Computer',
      price: '300000',
      stock: 10,
      imageUrl: 'https://radscanmedical.com/wp-content/uploads/2018/11/coming-soon.png'
    }],
    filteredProducts: []
  },
  mutations: {
    SET_FILTERED_PRODUCTS (state, data) {
      state.filteredProducts = data
    }
  },
  actions: {},
  modules: {
  },
  getters: {
    getFilteredProducts (state, words) {
      const regex = new RegExp(words, 'gi')
      return state.products.filter(product => product.name.match(regex))
    }
  }
})
