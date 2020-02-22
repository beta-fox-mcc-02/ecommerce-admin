import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import store from '../store'
import Login from '../views/Login'
import Dashboard from '../views/Dashboard'
import Register from '../views/Register'
import Products from '../components/Products'
import AddProduct from '../components/AddProduct'
import UpdateProduct from '../components/UpdateProduct'

Vue.use(VueRouter)

// function isAuthenticated(to, from, next) {
//   if (store.getters.isAuthenticated) {
//     next()
//   } else {
//     next({
//       path: '/login'
//     })
//   }
// }

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    component: Dashboard,
    children: [
      { path: '', component: Products },
      { path: 'add', component: AddProduct },
      { path: 'update/:id', component: UpdateProduct }
    ]
    // beforeEnter: isAuthenticated
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
