<template>
  <div class="card ml-3 mt-4" style="width: 15rem;">
  <img class="card-img-top" :src="prod.image_url" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{prod.name}}</h5>
    <p class="">Rp. {{prod.price}}</p>
    <p class="">stock: {{prod.stock}}</p>
    <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
    <!-- <button class="btn btn-warning mr-3">Edit</button> -->
    <div class="row justify-content-center">
    <editProduct
    :prod='prod'
    />
    <button class="btn btn-danger ml-2" @click.prevent="remove(prod.id)">delete</button>
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
    prod: Object
  },
  methods:{
    remove(id){
      axios({
        method:'delete',
        url:`/product/${id}`
      })
      .then(data =>{
        this.$store.dispatch('fetchProducts')
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