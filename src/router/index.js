import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import AddProduct from '../components/AddProduct.vue'
import UpdateForm from '../components/UpdateForm.vue'
import ProductList from '../components/ProductList.vue'

Vue.use(VueRouter)

const routes = [{
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
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import( /* webpackChunkName: "about" */ '../views/Product.vue'),
    children: [{
        path: 'list',
        component: ProductList
      }, {
        path: 'add',
        component: AddProduct
      },
      {
        path: 'update',
        component: UpdateForm
      }
    ]

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
  }
]

const router = new VueRouter({
  routes
})

export default router
