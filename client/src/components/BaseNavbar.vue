<template>
  <nav class="sticky-top">
    <div class="container">
      <div class="admin" v-if="isAdmin">
        <div class="row d-flex justify-content-around">
          <div class="col">
            <span>Logo</span>
          </div>
          <div class="col">
            <router-link to="/" exact>Home</router-link>
          </div>
          <div class="col">
            <router-link to="/admin/add-products">Add Product</router-link>
          </div>
          <div class="col">
            <router-link to="/admin/transactions">Transactions</router-link>
          </div>
          <div class="col">
            <span
              v-if="!isLogin"
              class="dropdown-toggle"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              Login
            </span>
            <span v-else @click="logout">Logout</span>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <form class="px-1 py-1 mx-2 my-2" @submit.prevent="login">
                <input type="email" placeholder="Email" v-model="email">
                <input type="password" placeholder="password" v-model="password">
                <button type="submit" class="float-right" >Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="customer" v-else>
        <div class="row d-flex justify-content-around">
          <div class="col">
            <span>Logo</span>
          </div>
          <div class="col">
            <router-link to="/" exact>Home</router-link>
          </div>
          <div class="col">
            <router-link to="/men">Men</router-link>
          </div>
          <div class="col">
            <router-link to="/ladies">Ladies</router-link>
          </div>
          <div class="col">
            <router-link to="/cart"><i class="fa fa-shopping-cart">Cart</i></router-link>
          </div>
          <div class="col">
            <span
              v-if="!isLogin"
              class="dropdown-toggle"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              Login
            </span>
            <span v-else @click="logout">Logout</span>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <form class="px-1 py-1 mx-2 my-2" @submit.prevent="login">
                <input type="email" placeholder="Email" v-model="email">
                <input type="password" placeholder="password" v-model="password">
                <button type="submit" class="float-right">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from '../api'
export default {
  name: 'BaseNavbar',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    isAdmin () {
      return this.$store.state.isAdmin
    },
    isLogin () {
      return this.$store.state.isLogin
    }
  },
  methods: {
    login () {
      axios({
        method: 'POST',
        url: '/login',
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then(({ data }) => {
          this.email = ''
          this.password = ''
          localStorage.token = data.token
          if (data.isAdmin) {
            localStorage.isAdmin = true
            this.$store.dispatch('isLogin', true)
            this.$store.dispatch('adminLogin', true)
          } else {
            this.$store.dispatch('isLogin', true)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    logout () {
      localStorage.clear()
      this.$store.dispatch('isLogin', false)
      this.$store.dispatch('adminLogin', false)
      this.$router.push('/')
    }
  },
  created () {
    if (localStorage.token) {
      if (localStorage.isAdmin) {
        this.$store.dispatch('isLogin', true)
        this.$store.dispatch('adminLogin', true)
      } else {
        this.$store.dispatch('isLogin', true)
      }
    }
  }
}
</script>

<style scoped>

.router-link-exact-active,
span:active {
  color: aqua ;
}

nav {
  background-color: #181818;
}
.col  {
  padding: 10px;
}

a,
.col {
  font-weight: 700;
  cursor: pointer;
  color: white;
  text-decoration: none;
}

.dropdown-menu {
  background: #181818;
}

a:hover,
span:hover {
  color: aqua;
}

</style>
