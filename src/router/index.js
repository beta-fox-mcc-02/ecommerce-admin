import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AdminLogin from '../views/AdminLogin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/admin/login',
    name: 'admin',
    component: AdminLogin
    // children: [
    //   {
    //     path: '/login',
    //     name: 'admin login',
    //     component: () => import(/* webpackChunkName: "about" */ '../views/AdminLogin.vue')
    //     // component: () => import('../views/Admin.vue')
    //   }
    // ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
