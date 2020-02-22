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
      {{newProduct.name}}
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
        price: 0,
        stock: 0,
        RoleId: 1
      }
    }
  },
  methods: {
    addedProduct () {
      console.log('yey ke add guys.............................', this.newProduct)
      this.$store.dispatch('addProduct', this.newProduct)
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
