<template>
  <div id="addProduct">
    <form @submit.prevent="addProduct">
      <h3>Add Product</h3>
      <div class="form-group">
        <h4>Name</h4>
        <input v-model="name" id="add-title" type="text" class="form-control" style="width: auto;" />
      </div>
      <div class="form-group">
        <h4>Image URL</h4>
        <input v-model="image_url" id="add-title" type="text" class="form-control" style="width: auto;" />
      </div>
      <div class="form-group">
        <h4>Stock</h4>
        <input v-model="stock" id="add-title" type="text" class="form-control" style="width: auto;" />
      </div>
      <div class="form-group">
        <h4>Price</h4>
        <input v-model="price" id="add-title" type="text" class="form-control" style="width: auto;" />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'addProduct',
  data () {
    return {
      name: '',
      image_url: '',
      stock: '',
      price: ''
    }
  },
  methods: {
    addProduct () {
      const { name, image_url, stock, price } = this
      const productData = { name, image_url, stock, price }
      this.$store.dispatch('addProduct', productData)
    }
  }
}
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center
}
</style>
