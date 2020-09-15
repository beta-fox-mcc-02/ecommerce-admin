<template>
  <div>
      <h3>Edit Product</h3>
    <form class="container" @submit='edit'>
      <div class="form-group">
          <label>Product Name</label>
          <input type="text" class="form-control" aria-describedby v-model="editProduct.name">
      </div>
      <div class="form-group">
          <label>Image Url</label>
          <input type="text" class="form-control" id="" aria-describedby v-model="editProduct.image_url">
      </div>
      <div class="form-group">
          <label>Price</label>
          <input type="number" class="form-control" id="" aria-describedby v-model="editProduct.price">
      </div>
      <div class="form-group">
          <label>Stock</label>
          <input type="number" class="form-control" id="" aria-describedby v-model="editProduct.stock">
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
        id: '',
        name: '',
        image_url: '',
        price: '',
        stock: ''
      }
    }
  },
  methods: {
    edit () {
      this.$store.dispatch('editData', this.editProduct)
        .then(editData => {
          console.log('berhasil edit iyey')
          console.log(editData)
          this.$router.push('/')
        })
        .catch(err => {
          this.$store.dispatch('error', err.msg)
          console.log(err)
        })
    }
  },
  computed: {
    editData () {
      return this.$store.state.editData
    }
  },
  created () {
    this.$store.dispatch('fetchEditData', this.$route.params.id)
      .then(({ data }) => {
        console.log('MASOK WEEEEEEYYYYYY', data.data)
        this.editProduct = data.data
      })
      .catch(err => {
        console.log(err)
      })
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
