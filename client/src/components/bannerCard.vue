<template>
  <div class="card ml-3 mt-4" style="width: 20rem;">
  <img class="card-img-top" :src="banner.image" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{banner.name}}</h5>
    <p class="">jadwal: {{banner.jadwal}}</p>
    <!-- <p class="">stock: {{prod.stock}}</p> -->
    <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
    <!-- <button class="btn btn-warning mr-3">Edit</button> -->
    <div class="row justify-content-center">
    <!-- <editProduct
    :prod='prod'
    /> -->
    <button class="btn btn-danger ml-2" @click.prevent="remove(banner.id)">delete</button>
    </div>
  </div>
</div>
</template>

<script>
import axios from '../api/axiosInstance'
import editProduct from '../components/editProduct'
name: 'productCard'
export default {
  data(){
    return{

    }
  },
  components:{
    editProduct
  },
  props:{
    banner: Object
  },
  methods:{
    remove(id){
      axios({
        method:'delete',
        url:`/banner/${id}`
      })
      .then(data =>{
        this.$store.dispatch('fetchBanners')
      })
      .catch(err =>{
        console.log(err);
      })
    }
  }
}
</script>

<style>

</style>