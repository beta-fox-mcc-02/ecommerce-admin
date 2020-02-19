<template>
<div class="home overflow-auto">
  <br>
  <center>
    <div class="card bg-transparent" style="max-height : 806px; max-width : 1400px">
        <div class="row my-4" id="comics">
            <!-- Each of comic will have one of this card -->
            <div class="col-4 mb-4" v-for="product in products" :key="product.id">
                <div class="card text-center">
                    <img
                    :src="product.image_url"
                    class="card-img-top"
                    height="300px"
                    >
                    <div class="d-flex flex-column justify-content-center card-body" style="min-height : 202px">
                    <h5 class="card-title">{{product.name}}</h5>
                        <div class="align-items-end">
                            <p class="card-text">
                                Price : {{product.price}}
                                <br>
                                Stock : {{product.stock}}
                            </p>
                            <button class="btn btn-primary">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </center>
</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import RegisterCost from '@/components/Register.vue'
export default {
  name: 'Home',
  data () {
    return {
      token: localStorage.token
    }
  },
  components: {
    // RegisterCost
  },
  created () {
    this.$store.dispatch('fetchProducts')
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>

<style>
</style>
