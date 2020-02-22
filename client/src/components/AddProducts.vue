<template>
  <div class="center-bar-up">
    <form @submit.prevent="addProduct">
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
  name: 'AdminCenterBarUp',
  data () {
    return {
      name: '',
      price: '',
      stock: '',
      image_url: '',
      category: []
    }
  },
  methods: {
    addProduct () {
      const payload = {
        name: this.name,
        price: this.price,
        stock: this.stock,
        image_url: this.image_url,
        category: this.category
      }
      this.$store.dispatch('addProduct', payload)
        .then(data => {
          this.$router.push({
            path: '/admin/list-products'
          })
          this.$store.dispatch('fetchProduct')
          this.$vToastify.success('SUCCESS ADD PRODUCT', 'BRO')
          console.log(data)
        })
        .catch(err => {
          this.$vToastify.warning({
            title: 'BRO',
            body: `${err.response.data.msg}`,
            type: 'warning',
            duration: 1000
          })
          console.log(err)
        })
    }
  }
}
</script>

<style>
#icon {
  color: green;
  font-size: 25px;
  cursor: pointer;
}
</style>
