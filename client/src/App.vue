<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <navbarAdmin v-if="isLogin"/>
    <router-view/>
  </div>
</template>
<script>
import navbarAdmin from './components/navbarAdmin'
export default {
components:{
  navbarAdmin
},
computed:{
    isLogin(){
      return this.$store.state.login
    }
  },
  created: function(){
    if(localStorage.token){
      // console.log('get home');
      this.$router.push('/admin')
      this.$store.commit('setLogin')
    }else{
      this.$router.push('/loginPage')
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
