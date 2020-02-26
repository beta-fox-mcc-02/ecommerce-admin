<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark" v-if="isLogin">
    <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item mr-2">
                 <router-link to="/admin">product</router-link> 
            </li>
            <li class="nav-item">
                 <router-link to="/admin/banner">banner</router-link> 
            </li>
        </ul>
    </div>
    <div class="mx-auto order-0">
        <a class="navbar-brand mx-auto" href="#">ikan</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>
    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                 <button class="btn" @click.prevent="signOut">Sign Out</button>
            </li>
        </ul>
    </div>
</nav>
</template>

<script>
name: 'navbarAdmin'
export default {
  computed:{
    isLogin(){
      return this.$store.state.login
    }
  },
  methods:{
     signOut(){
      localStorage.clear()
      this.$router.push('/loginPage')
      // this.$store.commit('setLogin')
            this.$store.commit("SET_LOGIN", false);


    }
  }
}
</script>

<style>

</style>