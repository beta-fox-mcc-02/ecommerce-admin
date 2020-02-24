<template>
  <div>
    <h3>Edit Product</h3>
    <form @submit.prevent="editProduct">
      <label>ID: </label> {{item.id}} <br>
      <label>Name:</label> <br>
      <input type="text" v-model="item.name"><br>
      <label>Image Url:</label> <br>
      <input type="text" v-model="item.image_url"><br>
      <label>Price:</label> <br>
      <input type="number" v-model="item.price"><br>
      <label>Stock:</label> <br>
      <input type="number" v-model="item.stock"><br><br>
      <button type="submit">Edit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EditProduct',
  data () {
    return {
      item: {
        id: 0,
        name: '',
        image_url: '',
        price: 0,
        stock: 0
      }
    }
  },
  methods: {
    setFormEdit () {
      this.item.id = this.item2.id
      this.item.name = this.item2.name
      this.item.image_url = this.item2.image_url
      this.item.price = this.item2.price
      this.item.stock = this.item2.stock
    },
    editProduct () {
      const payload = {
        id: this.item.id,
        name: this.item.name,
        image_url: this.item.image_url,
        price: this.item.price,
        stock: this.item.stock
      }
      this.$store.dispatch('updateProduct', payload)
    }
  },
  computed: {
    item2 () {
      return this.$store.state.item
    }
  },
  watch: {
    item2: function () {
      this.setFormEdit()
    }
  }

}
</script>

<style>

</style>
