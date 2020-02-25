import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginAdmin from '../views/LoginAdmin'
import AdminPage from '../views/AdminPage'
import AdminHome from '../components/AdminHome'
import AdminDashboard from '../components/AdminDashboard'
import AdminShoes from '../components/AdminShoes'
import AdminCategories from '../components/AdminCategories'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Admin Login',
    component: LoginAdmin
  },
  {
    path: '/',
    name: 'Admin',
    component: AdminPage,
    beforeEnter: (to, from, next) => {
      if (localStorage.admin_token) {
        next()
      } else {
        router.push('/login')
      }
    },
    children: [
      {
        path: '',
        name: 'admin home',
        component: AdminHome
      },
      {
        path: 'dashboard',
        name: 'admin dasboard',
        component: AdminDashboard
      },
      {
        path: 'shoes',
        name: 'admin shoes',
        component: AdminShoes
      },
      {
        path: 'categories',
        name: 'admin categories',
        component: AdminCategories
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
