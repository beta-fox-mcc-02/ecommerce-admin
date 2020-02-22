<template>
  <div>
    {{editData}}
    {{this.$store.state.editData.data.name}}
      <h3>Edit Product</h3>
    <form class="container" @submit='edit'>
      <div class="form-group">
          <label>Product Name</label>
          <input type="text" class="form-control" aria-describedby v-model="name">
      </div>
      <div class="form-group">
          <label>Image Url</label>
          <input type="text" class="form-control" id="" aria-describedby v-model="image_url">
      </div>
      <div class="form-group">
          <label>Price</label>
          <input type="number" class="form-control" id="" aria-describedby v-model="price">
      </div>
      <div class="form-group">
          <label>Stock</label>
          <input type="number" class="form-control" id="" aria-describedby v-model="stock">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EditProduct',
  data () {
    return {
      editProduct: {
        id: this.$store.state.editData.data.id,
        name: this.$store.state.editData.data.name,
        image_url: this.$store.state.editData.data.image_url,
        price: this.$store.state.editData.data.price,
        stock: this.$store.state.editData.data.stock,
        RoleId: 1
      }
    }
  },
  methods: {
    edit () {
      this.$store.dispatch('editData', this.editProduct)
    }
  },
  computed: {
    editData () {
      return this.$store.state.editData
    }
  }

  // created () {
  //   setTimeout(() => {
  //     this.id = this.editData.id
  //     this.name = this.editData.name
  //     this.image_url = this.editData.image_url
  //     this.price = this.editData.price
  //     this.stock = this.editData.stock
  //   }, 3000)
  // }

}
</script>

<style>

</style>
