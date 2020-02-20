import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from '../views/Admin'
import AdminPage from '../views/AdminPage'
import AdminHome from '../components/AdminHome'
import AdminDashboard from '../components/AdminDashboard'
import AdminShoes from '../components/AdminShoes'
import AdminCategories from '../components/AdminCategories'

Vue.use(VueRouter)

const routes = [
  {
    path: '/admin',
    name: 'Admin',
    component: AdminPage,
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
  },
  {
    path: '/admin1',
    name: 'Admin1',
    component: Admin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
