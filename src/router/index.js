import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
// import ProductList from '@/components/ProductList.vue'
import ProductAdd from '@/components/ProductAdd.vue'
import Loading from '@/components/Loading.vue'
import CategoryAdd from '@/components/CategoryAdd.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/auth',
    name: 'Authentication',
    redirect: '/',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AuthPage.vue'),
    children: [
      {
        path: 'login',
        component: Login
      }, {
        path: 'register',
        component: Register
      }
    ]
  },
  {
    path: '/menus',
    name: 'Menu',
    component: () => import('../views/Menu.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/Products.vue'),
    children: [
      {
        path: 'list',
        component: () => import('@/components/ProductList.vue')
      },
      {
        path: 'add',
        component: ProductAdd
      },
      {
        path: 'edit',
        component: () => import('@/components/ProductEdit.vue')
      }
    ]
  },
  {
    path: '/loading',
    name: 'Loading',
    component: Loading
  },
  {
    path: '/categories',
    name: 'Category',
    component: () => import('../views/Categories.vue'),
    children: [
      {
        path: 'list',
        component: () => import('@/components/CategoryList.vue')
      },
      {
        path: 'add',
        component: CategoryAdd
      },
      {
        path: 'edit',
        component: () => import('@/components/CategoryEdit.vue')
      }
    ]
  },
  {
    path: '/users',
    name: 'User',
    component: () => import('../views/Users.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
