import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Home_Adm.vue')
  },
  {
    path: '/admin/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/admin/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
