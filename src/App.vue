<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/login">Login</router-link>
    </div>
    <router-view />
    <quick-menu
      v-if="isLogin"
      :menu-count="count"
      :icon-class="icons"
      :menu-url-list="list"
      backgroundColor="#000000"
      :position="position"
    ></quick-menu>
  </div>
</template>

<script>
import quickMenu from 'vue-quick-menu';

export default {
  components: {
    quickMenu,
  },
  data() {
    return {
      count: 3,
      icons: ['fas fa-home', 'fas fa-tools', 'fas fa-sign-out-alt'],
      list: [{ isLink: true, url: '/' }, { isLink: true, url: '/admin' }, { isLink: true, url: '/logout' }],
      position: 'top-right',
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap');


#app {
  font-family: 'Montserrat', sans-serif;
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
