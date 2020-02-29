<template>
  <div>
    <h1>ini page banner</h1>
    <addbanner/>
     <img src="../assets/loading.gif" alt="" style="max-width: 20rem;" v-if="seeLoading">
    <div class="container row" v-else>
      <bannerCard
      v-for="banner in getBanners"
      :key="banner.id"
      :banner="banner"
      />
    </div>
  </div>
</template>

<script>
import addbanner from '../components/addBanner'
import bannerCard from '../components/bannerCard'
name: 'bannerPage'
export default {
  data(){
    return{
      banners:[]
    }
  },
  components:{
    addbanner,
    bannerCard
  },
   computed:{
    getBanners(){
      return this.banners = this.$store.state.banners
    },
     seeLoading() { 
      return this.$store.state.loading;
    }
  },
    created: function(){
    if(localStorage.token){
      console.log('dari created banner');
      
      this.$store.dispatch('fetchBanners')
      // console.log(this.$store.state.products, 'dari home');
      
    }
  }
}
</script>

<style>

</style>