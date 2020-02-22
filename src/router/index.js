import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
    children:
    [
      {
        name: 'Dashboard',
        path: '',
        component: () => import(/* webpackChunkName: "summary" */ '../views/Summary.vue')
      },
      {
        path: 'products',
        component: () => import(/* webpackChunkName: "products" */ '../views/Product.vue'),
        children: [
          {
            name: 'Products',
            path: '',
            component: () => import(/* webpackChunkName: "products" */ '../components/ProductList.vue')
          },
          {
            name: 'Add Product',
            path: 'add',
            component: () => import(/* webpackChunkName: "products" */ '../components/ProductForm.vue')
          },
          {
            name: 'Edit Product',
            path: ':id',
            component: () => import(/* webpackChunkName: "products" */ '../components/ProductForm.vue')
          }
        ]
      },
      {
        name: 'Category',
        path: 'categories',
        component: () => import(/* webpackChunkName: "category" */ '../views/Category.vue')
      }
    ]
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
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
