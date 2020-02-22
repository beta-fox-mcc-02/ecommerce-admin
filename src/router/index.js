import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignUp from '../views/SignUp.vue'
import Dashboard from '../views/Dashboard'
import AddProduct from '../components/AddProduct'
import EditProduct from '../components/EditProduct'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: '/addProduct',
        name: 'AddProduct',
        component: AddProduct
      },
      {
        path: '/editProduct',
        name: 'EditProduct',
        component: EditProduct
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
