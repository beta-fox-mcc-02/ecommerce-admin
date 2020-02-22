import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../views/LandingPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/login',
    name: 'LoginPanel',
    component: () => import('../components/LoginPanel.vue')
  },
  {
    path: '/register',
    name: 'RegisterPanel',
    component: () => import('../components/RegisterPanel.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/Products.vue')
  },
  {
    path: '/edit',
    name: 'EditDataProduct',
    component: () => import('../components/EditDataProduct.vue')
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
