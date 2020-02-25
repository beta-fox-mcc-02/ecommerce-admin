import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'LoginPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginPage.vue')
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegisterPage.vue')
  },
  {
    path: '/add-product',
    name: 'AddProduct',
    component: () => import(/* webpackChunkName: "about" */ '../views/AddProduct.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: ':id',
        name: 'EditWatch',
        component: () => import(/* webpackChunkName: "about" */ '../components/ModalEdit.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
