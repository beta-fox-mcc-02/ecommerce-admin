<template>
  <div id="app">
    <Alert />
    <router-view />
    <quick-menu
      v-if="isAdminOrMaster"
      :menu-count="count"
      :icon-class="icons"
      :menu-url-list="list"
      backgroundColor="#000000"
      :position="position"
      style="z-index: 9999"
    ></quick-menu>
    <div v-if="isLoading" class="loading">
      <button class="btn btn-primary" type="button" disabled>
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Loading...
      </button>
    </div>
  </div>
</template>

<script>
import quickMenu from 'vue-quick-menu';
import userAPI from './API/userAPI';
import Alert from './components/Alert.vue';

export default {
  components: {
    quickMenu,
    Alert,
  },
  data() {
    return {
      count: 2,
      icons: ['fas fa-home', 'fas fa-tachometer-alt'],
      list: [{ isLink: true, url: '/' }, { isLink: true, url: '/admin' }],
      position: 'top-right',
    };
  },
  computed: {
    isAdminOrMaster() {
      if (this.$store.state.personData.user_role === 'admin' || this.$store.state.personData.user_role === 'master') {
        return true;
      }
      return false;
    },
    isLoading() {
      return this.$store.state.isLoading;
    },
    listOfProducts() {
      return this.$store.state.listOfProducts;
    },
  },
  created() {
    if (localStorage.token) {
      userAPI.get(`/findUser/${localStorage.person_id}`)
        .then((response) => {
          this.$store.commit('setLogin', response.data);
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
    this.$store.dispatch('fetchListOfProducts');
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap');

body {
  background: #f6f5f7;
}

/* .quick-menu {
  top: 50px !important;
} */

h1 {
  font-weight: 700;
  margin: 15px 0;
}
p {
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
}
button {
  border-radius: 20px;
  border: 1px solid #ff4b2b;
  background-color: #ff4b2b;
  color: #ffffff;
  font-size: 12px;
  font-weight: 700;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}
button:active {
  transform: scale(0.95);
}
button:focus {
  outline: none;
}

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

.loading{
  z-index: 999;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>
