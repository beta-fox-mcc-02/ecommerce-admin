<template>
  <div class="main-navbar">
      <div >
        <ul class="flex">
            <div class="container-user1">
              <li class="nav-item">
                <router-link to="/">Home</router-link>
              </li>
            </div>
            <div class="container-user2">
              <li class="li-user" v-if="!loginState">
                <router-link to="/auth/login">Login</router-link>
                </li>
              <li class="li-user" v-if="!loginState">
                <router-link to="/auth/register">Register</router-link>
                </li>
              <li class="li-user" v-else>
                <a href="" @click="logout">Logout</a>
              </li>
            </div>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      localStorage.clear()
      this.$store.commit('SET_ISLOGIN', false)
      this.$router.push('/')
    }
  },
  computed: {
    loginState () {
      return this.$store.state.isLogin
    }
  }

}
</script>

<style scoped>
  ul {
    list-style: none;
  }
  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    padding: 10px 4px;
    margin-bottom: 0px;
    font-weight: bold;
  }
  .container-user1 {
    display: flex;
    justify-content: flex-start;
    padding: 4px 4px 4px 20px;
  }
  .container-user2 {
    display: flex;
    justify-content: space-around;
    padding: 4px 4px 0px 4px;
  }

  .li-user{
    margin: 0px 8px;
  }
  a {
    color: white
  }
</style>
