<template>
  <div class="col-md-1">
    <div class="sidebar fixed-left pt-5" id="nav">
      <router-link to="/" title="List Products"><i class="fas fa-list-ol fa-2x"></i></router-link> <br>
      <router-link to="/add-product" title="Add Product"><i class="fas fa-plus-circle fa-2x"></i></router-link>
      <span @click="logout" title="Logout"><i class="fas fa-sign-out-alt fa-2x"></i></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  methods: {
    logout () {
      localStorage.clear()
      this.$store.dispatch('isLogin', false)
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.sidebar  {
  min-height: 100vh;
  background-color: #181818ce;
  font-weight: 500;
}

.sidebar span {
  position: absolute;
  bottom: 10%;
  right: 40%;
  font-weight: 600;
}

span:hover {
  cursor: pointer;
  color: #3551cf;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a:hover {
  font-weight: bold;
  color: #3551cf;
}

#nav a.router-link-exact-active {
  color: #3551cf;
}
</style>
