<template>
<div>
  <form class="container" @submit='addedProduct'>
    <div class="form-group">
        <label>Product Name</label>
        <input type="text" class="form-control" id="" aria-describedby v-model="newProduct.name">
    </div>
    <div class="form-group">
        <label>Image Url</label>
        <input type="text" class="form-control" id="" aria-describedby v-model="newProduct.image_url">
    </div>
    <div class="form-group">
        <label>Price</label>
        <input type="number" class="form-control" id="" aria-describedby v-model="newProduct.price">
    </div>
    <div class="form-group">
        <label>Stock</label>
        <input type="number" class="form-control" id="" aria-describedby v-model="newProduct.stock">
      <!-- {{newProduct.name}} -->
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
</template>

<script>
export default {
  name: 'AddProduct',
  data () {
    return {
      newProduct: {
        name: '',
        image_url: '',
        price: '',
        stock: '',
        RoleId: 1
      }
    }
  },
  methods: {
    addedProduct () {
      console.log('yey ke add guys.............................', this.newProduct)
      this.$store.dispatch('addProduct', this.newProduct)
        .then(product => {
          console.log('datanya berhasil di add loh0-----', product)
          this.$store.commit('ADD_PRODUCT', true)
          this.$router.push('/')
        })
        .catch(err => {
          this.$store.dispatch('error', err.msg)
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>
