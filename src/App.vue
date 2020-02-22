<template>
  <div id="app">
    <Navbar/>
    <div>
      <div>
        <div class="dashboard" :class="classFlex">
          <div v-if="stateIsLogin" id="sidebar">
            <Sidebar/>
          </div>
          <div class="content">
            <Alert v-if="stateMessage"/>
            <router-view/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Alert from '@/components/Alert.vue'
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
    Navbar,
    Alert,
    Sidebar
  },
  computed: {
    stateIsLogin () {
      // console.log(this.$store.state, '=====')
      return this.$store.state.isLogin
    },
    stateMessage () {
      return this.$store.state.message
    },
    classFlex () {
      if (this.$store.state.isLogin) {
        return 'flex'
      }
      return ''
    }
  },
  // beforeEach (to, from, next) {
  //   if (!localStorage.access_token) {
  //     this.$store.commit('SET_ISLOGIN', false)
  //     next('/auth/login')
  //   } else {
  //     this.$store.commit('SET_ISLOGIN', true)
  //     next()
  //   }
  // },
  created () {
    if (localStorage.access_token) {
      this.$store.commit('SET_ISLOGIN', true)
      this.$router.push('/products')
    } else {
      this.$store.commit('SET_ISLOGIN', false)
      this.$router.push('/auth/login')
    }
  },
  beforeRouteEnter (to, from, next) {
    if (localStorage.access_token) {
      next('/products')
    } else {
      next('/')
    }
  }
}
</script>

<style>
  .dashboard {
    width: 100%;
    min-height: 100vh;
  }
  .flex {
    display: flex
  }
  .content {
    padding-left: 100px;
    width: 100%
  }
</style>
