import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ladies',
    name: 'LadiesPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ladies page" */ '../views/Ladies.vue')
  },
  {
    path: '/men',
    name: 'MenPage',
    component: () => import(/* webpackChunkName: "men page" */ '../views/Men.vue')
  },
  {
    path: '/admin',
    name: 'AdminPage',
    component: () => import(/* webpackChunkName: "admin page" */ '../views/Admin.vue'),
    children: [
      {
        path: 'add-products',
        name: 'AddProduct',
        component: () => import(/* webpackChunkName: "add product" */ '../components/AddProduct.vue')
      },
      {
        path: 'update-products/:id',
        name: 'Update Product',
        component: () => import(/* webpackChunkName: "update product" */ '../components/UpdateProduct.vue')
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
