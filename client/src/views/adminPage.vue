<template>
  <div class="home mt-3">
     <!-- <router-link to="/admin/banner">bannerPage</router-link> | 
     <router-link to="/admin">product</router-link>

    <button class="btn" @click.prevent="signOut">Sign Out</button> -->
    <h1>Admin Page</h1>
    <div class="container">
    <router-view/>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
name: 'adminPage'
export default {
  data(){
    return{
      products:[]
    }
  },
  components: {
  },
  methods:{
    pindah(route){
      this.$router.push(route)
    },
    signOut(){
      localStorage.clear()
      this.$router.push('/loginPage')
    }
  },
  computed:{
    getProducts(){
      return this.products = this.$store.state.products
    }
  },
  created: function(){
    // if(localStorage.token){
    //   console.log('dari created');
      
    //   this.$store.dispatch('fetchProducts')
    //   // console.log(this.$store.state.products, 'dari home');
      
    // }
  }
}
</script>
