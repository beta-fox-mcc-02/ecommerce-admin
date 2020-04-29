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
  background-image: url('https://lh3.googleusercontent.com/proxy/Qe6LipW7FA36rYpHVUqvERJ9SOlF5k8_o1PHgmC_cZjz5vHideuFtCTFgW1hTYKmICmUMGxfrwNiISUcpVOvcu_7S2Eg7_5B6KzmOJ-3aG1ObfNMH4BHsAQoSRawT2vcwKsBSmIpSgqm4HCf8xjHGtW8voXwcqSEUfzEQdLaSTWEmK1TkE_E2A');
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
