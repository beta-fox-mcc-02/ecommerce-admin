<template>
  <div class="home mt-3">
    <addProduct/>
    <!-- {{getProducts}} -->
     <img src="../assets/loading.gif" alt="" style="max-width: 20rem;" v-if="seeLoading">
    <div class="container row " v-else>
      <productCard
      v-for="prod in getProducts"
      :key="prod.id"
      :prod="prod"
      />
    </div>

    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src

import addProduct from '@/components/addProduct.vue'
import productCard from '../components/productCard'
name: 'productCrud'
export default {
  data(){
    return{
      products:[]
    }
  },
  components: {
    addProduct,
    productCard
  },
  methods:{
    signOut(){
      localStorage.clear()
      this.$router.push('/loginPage')
    }
  },
  computed:{
    getProducts(){
      return this.products = this.$store.state.products
    },
     seeLoading() { 
      return this.$store.state.loading;
    }
  },
  created: function(){
    if(localStorage.token){
      // console.log('dari created');
      
      this.$store.dispatch('fetchProducts')
      // console.log(this.$store.state.products, 'dari home');
      
    }
  }
}
</script>
