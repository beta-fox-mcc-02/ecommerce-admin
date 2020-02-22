import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Prdoucts from '../components/Products.vue'
import AddProducts from '../components/AddProducts.vue'
import EditProducts from '../components/EditProducts'

Vue.use(VueRouter)

const routes = [
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    children: [
      {
        path: 'list-products',
        component: Prdoucts
      },
      {
        path: 'add-products',
        component: AddProducts
      },
      {
        path: 'edit-products',
        component: EditProducts
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from, next) => {
      if (from.path === '/login') {
        next({ path: '/login' })
      } else {
        next()
      }
      console.log(from)
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
