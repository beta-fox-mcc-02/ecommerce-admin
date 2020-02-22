<template>
  <div>
    <h4>PRODUCT EDIT</h4>
    <form @submit.prevent="update">
      <label>Name</label><br />
      <input type="text" v-model="name"/><br />
      <label>Price</label><br />
      <input type="number" v-model="price"/><br />
      <label>Stock</label><br />
      <input type="number" v-model="stock"/><br />
      <label>Genre</label><br />
      <input type="text" v-model="genre"/><br />
      <label>Category</label><br />
      <input type="text" v-model="category"/><br />
      <label>Image Url</label><br />
      <input type="text" v-model="image_url"/><br /><br />
      <input type="submit" class="btn btn-primary"/>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      price: null,
      stock: null,
      genre: '',
      category: '',
      image_url: ''
    }
  },
  methods: {
    update () {
      // console.log('beginning of update')
      const payload = {
        name: this.name,
        price: this.price,
        stock: this.stock,
        genre: this.genre,
        CategoryId: this.category,
        image_url: this.image_url
      }
      this.$store.dispatch('updateProduct', { id: this.$store.state.productId, payload })
        .then(({ data }) => {
          // console.log(data, 'success update')
          this.$router.push('/products/list')
          this.$store.commit('SET_MESSAGE', { msg: data.msg, status: true })
        })
        .catch(err => {
          // console.log(err.response)
          this.$store.commit('SET_MESSAGE', { msg: err.response.data.msg, status: false })
        })
    },
    fetchProduct () {
      this.$store.dispatch('findOneProduct', this.$store.state.productId)
        .then(({ data }) => {
          // console.log(data)
          this.$store.commit('SET_PRODUCT', data.data)
          this.name = data.data.name
          this.price = data.data.price
          this.stock = data.data.stock
          this.genre = data.data.genre
          this.category = data.data.CategoryId
          this.image_url = data.data.image_url
        })
        .catch(err => {
          this.$store.commit('SET_MESSAGE', { msg: err.response.data.msg, status: false })
        })
    }
  },
  computed: {
  },
  created () {
    // console.log(this.$store.state)
    this.$store.commit('SET_MESSAGE', { msg: '', status: null })
    this.fetchProduct()
    // this.getProduct(this.$store.state.product)
  },
  mounted () {
    // console.log(this.$store.state.product)
  }
}
</script>

<style>

</style>
