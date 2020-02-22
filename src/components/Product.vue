<template>
  <tr>
    <td>{{ product.id }}</td>
    <td>{{ product.name }}</td>
    <td>{{ product.price }}</td>
    <td>{{ product.stock }}</td>
    <td>{{ product.genre }}</td>
    <td>{{ product.CategoryId }}</td>
    <td>{{ product.image_url }}</td>
    <td><a href="#" @click="update(product.id)">Edit</a> || <a href="#" @click="remove(product.id)">Delete</a></td>
  </tr>
</template>

<script>
export default {
  name: 'ProductDetail',
  props: ['product'],
  data () {
    return {
    }
  },
  methods: {
    update (id) {
      this.$store.commit('SET_PRODUCT_ID', id)
      // console.log(this.$store.state.productId)
      this.$router.push('/products/edit')
    },
    remove (id) {
      // this.$store.commit('SET_PRODUCT_ID', id)
      // console.log('delete ------ component ')
      this.$store.dispatch('deleteProduct', id)
        .then(({ data }) => {
          // console.log(data, 'successsssssssssss')
          this.$router.push('/products')
          this.$store.commit('SET_MESSAGE', { msg: data.msg, status: true })
        })
        .catch(err => {
          this.$store.commit('SET_MESSAGE', { msg: err.response.data.msg, status: false })
        })
      // console.log(id)
    }
  }
}
</script>

<style>

</style>
