<template>
  <nav class="navbar navbar-expand-lg sticky-top" role="navigation">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="../../public/logo.png" width="100" height="30" alt />
      </a>
      <button
        class="navbar-toggler border-0"
        type="button"
        data-toggle="collapse"
        data-target="#exCollapsingNavbar"
      >&#9776;</button>
      <div class="collapse navbar-collapse" id="exCollapsingNavbar">
        <ul class="nav navbar-nav">
          <li class="nav-item">
            <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
          </li>
        </ul>
        <ul class="nav navbar-nav flex-row justify-content-between ml-auto">
          <li class="dropdown order-1">
            <button type="button" class="btn b-nav" v-if="!isLogin">
              <router-link to="/login" class="nav-link buten">
                <i class="fa fa-sign-in"></i>
                Login
              </router-link>
            </button>
            <button type="button" class="btn b-nav" v-if="!isLogin">
              <router-link to="/register" class="nav-link buten">
                <i class="fa fa-user"></i>
                Register
              </router-link>
            </button>
            <button type="button" class="btn b-log" @click.prevent="clickLogout" v-if="isLogin">
              <i class="fa fa-sign-out"></i>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
    }
  },
  methods: {
    clickLogout() {
      this.$store.commit('logout')
      this.$router.push('/login')
    }
  }
  ,
  computed: {
    isLogin() {
      return this.$store.state.isLogin
    }
  }
}
</script>

<style>
.b-nav {
  margin-right: 10px;
}

.navbar {
  background-color: #7f7f7f;
}

.nav-link {
  font-weight: bold;
  color: #fec442;
}

.nav-link:hover {
  color: #fec442;
  text-shadow: 1.5px 1px #000000;
}

.buten {
  padding: 0px;
}

.b-log {
  padding: 0px 5px 0px 5px;
}

li .btn {
  font-weight: bold;
  padding: 0px;
  height: 35px;
  color: #fec442;
}
</style>
