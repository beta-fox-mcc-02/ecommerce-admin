<template>
  <div id="app">
    <div class="row" v-if="isLogin">
      <SideBar/>
      <div class="col-md-11">
        <div class="container">
          <router-view/>
        </div>
      </div>
    </div>
    <div class="container" v-else>
      <router-view/>
    </div>
  </div>
</template>

<script>
import SideBar from './components/SideBar'
export default {
  name: 'App',
  components: {
    SideBar
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  },
  created () {
    if (localStorage.token) {
      this.$store.dispatch('isLogin', true)
    } else {
      this.$store.dispatch('isLogin', false)
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
  color: white;
  background-image: url('https://cdn2.vectorstock.com/i/1000x1000/15/71/white-watch-dial-and-black-background-seamless-vector-6481571.jpg');
  min-height: 100vh;
}

.card {
  background-color: #181818f5;
  --table-width: 100%;
  font-weight: 500;
}

tbody {
  max-height:500px;
  display:block;
  overflow-y:auto;
}

thead, tbody tr {
  display: table;
  width: var(--table-width);
  table-layout:fixed;
}
i:hover {
  cursor: pointer;
}
</style>
