<template>
  <div class="edit-bar">
    <form @submit.prevent="editProduct">
      <label>Prdouct Name</label><br>
      <input type="text" required v-model="name"><br>
      <label>Price</label><br>
      <input type="number" required v-model="price"><br>
      <label>Stock</label><br>
      <input type="number" required v-model="stock"><br>
      <label>Image URL</label><br>
      <input type="text" required v-model="image_url"><br>
      <span>Category</span>
        <br>
        <input type="checkbox" id="Jersey" value="1" v-model="category">
        <label for="Jersey">Jersey</label>
        <input type="checkbox" id="Boots" value="2" v-model="category">
        <label for="Boots">Boots</label>
        <input type="checkbox" id="Football" value="3" v-model="category">
        <label for="Football">Football</label>
        <input type="checkbox" id="Badminton" value="4" v-model="category">
        <label for="Badminton">Badminton</label>
        <br>
      <button type="submit" class="btn btn-primary" >ADD</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EditProducts',
  data () {
    return {
      name: this.$store.state.productToEdit.msg.name,
      price: this.$store.state.productToEdit.msg.price,
      stock: this.$store.state.productToEdit.msg.stock,
      image_url: this.$store.state.productToEdit.msg.image_url,
      category: []
    }
  },
  methods: {
    editProduct () {
      const payload = {
        id: this.$store.state.idParams,
        name: this.name,
        price: this.price,
        stock: this.stock,
        image_url: this.image_url,
        category: this.category
      }
      this.$store.dispatch('editProduct', payload)
        .then(data => {
          this.$vToastify.success('EDIT PRODUCT SUCCESSS', 'BRO')
          this.$router.push({ path: '/admin/list-products' })
        })
        .catch(err => {
          this.$vToastify.warning({
            title: 'BRO',
            body: `${err.response.data.msg}`,
            type: 'warning',
            duration: 3000
          })
        })
    }
  }
}
</script>

<style>

</style>
