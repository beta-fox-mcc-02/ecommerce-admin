import actions from './actions'
import mutations from './mutations'

const state = {
  profile: null,
  errors: [],
  menus: [
    { icon: 'mdi-view-dashboard', text: 'Dashboard', url: '/' },
    {
      icon: 'mdi-tag',
      'icon-alt': 'mdi-chevron-down',
      text: 'Catalog',
      model: true,
      children: [
        { icon: 'mdi-storefront', text: 'Product', url: '/products' },
        { icon: 'mdi-plus', text: 'Add Product', url: '/products/add' }
      ]
    },
    { icon: 'mdi-content-copy', text: 'Categories', url: '/categories' }
  ]
}

export default {
  state,
  mutations,
  actions
}
