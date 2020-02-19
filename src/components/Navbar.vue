<template>
  <nav class="navbar navbar-expand-lg" role="navigation">
    <div class="container">
      <a class="navbar-brand" href="#">Brand</a>
      <button
        class="navbar-toggler border-0"
        type="button"
        data-toggle="collapse"
        data-target="#exCollapsingNavbar"
      >&#9776;</button>
      <div class="collapse navbar-collapse" id="exCollapsingNavbar">
        <ul class="nav navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
          </li>
        </ul>
        <ul class="nav navbar-nav flex-row justify-content-between ml-auto">
          <li class="dropdown order-1">
            <button type="button" class="btn btn-outline-secondary">
              <router-link to="/login" class="nav-link buten">
                <i class="fa fa-sign-in"></i>
                Login
              </router-link>
            </button>
            <button type="button" class="btn btn-outline-secondary">
              <router-link to="/register" class="nav-link buten">
                <i class="fa fa-user"></i>
                Register
              </router-link>
            </button>
            <button type="button" class="btn btn-outline-secondary" @click.prevent="clickLogout">
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

  }
}
</script>

<style>
.navbar {
  background-color: rgba(0, 0, 0, 0.5);
}

.nav-link {
  font-weight: bold;
  color: #fec442;
}

.nav-link a.router-link-exact-active {
  color: #42b983;
}

.buten {
  padding: 0px;
}

li .btn {
  font-weight: bold;
  padding: 0px;
  height: 35px;
  color: #fec442;
}
</style>
