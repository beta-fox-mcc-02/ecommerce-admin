<template>
  <div id="homePage">
    <Loading v-if="isLoading" />
    <div id="home-navbar" v-else>
      <NavBar />
      <AsideBar />
      <section id="main-content">
        <span v-if="created">{{notification}}</span>
        <div id="add-banner">
          <div class="add-banner-header">
            Campaign's Banner
          </div>
          <div class="add-banner-main">
            <div class="banner-form">
              <h3>Add new banner</h3>
              <form v-on:submit.prevent="postBanner">
                <div class="inputs">
                  <label>Banner Url</label>
                  <input type="url" v-model="bannerUrl" required>
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
            <div class="banner-container">
              <div class="banner-content" v-for="(url, i) in banners" v-bind:key="i">
                <img v-bind:src="url.bannerUrl">
              </div>
            </div>
          </div>
        </div>
        <SalesChart />
      </section>
    </div>
  </div>
</template>

<script>
import AsideBar from '../components/AsideBar.vue'
import NavBar from '../components/NavBar.vue'
import Loading from '../components/Loading.vue'
import SalesChart from '../components/SalesChart.vue'

export default {
  data () {
    return {
      isLoading: false,
      notification: '',
      created: false
    }
  },
  name: 'Home',
  components: { AsideBar, NavBar, Loading, SalesChart },
  computed: {
    banners () {
      return this.$store.state.banners
    },
    bannerUrl: {
      get () { return this.$store.state.bannerUrl },
      set (value) { this.$store.commit('setBanner', value) }
    }
  },
  methods: {
    stillLoading () {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      }, 3000)
    },
    postBanner () {
      this.$store.dispatch('postBannerAsync')
        .then(() => {
          this.created = true
          this.notification = 'Success add new banner'
          this.$store.commit('unsetAll')
          this.$store.dispatch('getBannersAsync')
          setTimeout(() => {
            this.created = false
            this.notification = ''
          }, 2000)
        })
        .catch(() => {
          this.created = true
          this.notification = 'Failed! banner url expected to be webformat'
          setTimeout(() => {
            this.created = false
            this.notification = ''
          }, 2000)
        })
    }
  },
  created () {
    this.stillLoading()
    this.$store.dispatch('getBannersAsync')
  }
}

</script>

<style scoped>

div#homePage {
    width: 100vw;
    height: 100vh;
}

div#home-navbar {
    position: relative;
}

section#main-content {
    margin-left: 23vw;
    margin-top: 3vh;
}

div#add-banner {
    width: 75%;
    position: relative;
    background-color: #2cb7970d;
}

.add-banner-header {
    text-align: center;
    font-size: 20pt;
    padding: 1rem;
    font-weight: bold;
    background-color: #7a9c97;
    color: white;
}
.add-banner-main {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 0.5rem;
}

.banner-form {
    height: 7rem;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.inputs {
    padding: 0.5rem 1rem;
    border: 0.1rem solid #d8d8d8;
    border-radius: 1rem;
    margin: 0.5rem 0;
}

input[type="url"] {
    outline: 0;
    border-style: none;
    background-color: #d8d8d8;
    margin-left: 0.5rem;
    border-radius: 0.5rem;
    padding-left: 0.5rem;
}

.banner-container {
    margin-top: 1rem;
    height: 20rem;
    width: 90%;
    overflow-y: scroll;
    display: flex;
    flex-flow: wrap;
}

.banner-content {
    width: 50%;
}

img{
    width: 100%;
    height: 10rem;
}

h3 {
    width: 100%;
    text-align: center;
    padding-bottom: 0.5rem;
}

span {
    position: absolute;
    right: 1.5rem;
    z-index: 1;
    background-color: #b7762c;
    color: white;
    padding: 1rem 2rem;
    border-radius: 1rem;
    font-size: 15pt;
    width: 5rem;
    text-align: center;
    animation: fade-in-out 2s;
}

@keyframes fade-in-out {
  0%{ opacity: 0; }
  25%{ opacity: 1; }
  75%{ opacity: 1; }
  100%{ opacity: 0; }
}

</style>
