<template>
  <div>
    <h4>ADD PRODUCT</h4>
    <form @submit.prevent="create">
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
  name: 'ProductAdd',
  data () {
    return {
      name: '',
      price: '',
      stock: '',
      genre: '',
      category: '',
      image_url: ''
    }
  },
  methods: {
    create () {
      const payload = {
        name: this.name,
        price: this.price,
        stock: this.stock,
        genre: this.genre,
        category: this.category,
        image_url: this.image_url
      }
      this.$store.dispatch('createProduct', payload)
        .then(({ data }) => {
          // console.log(data)
          this.$router.push('/products/list')
          this.$store.commit('SET_MESSAGE', { msg: data.msg, status: true })
        })
        .catch(err => {
          this.$store.commit('SET_MESSAGE', { msg: err.response.data.msg, status: false })
          // console.log(err)
        })
    }
  },
  created () {
    this.$store.commit('SET_MESSAGE', { msg: '', status: null })
  }
}
</script>

<style>

</style>
