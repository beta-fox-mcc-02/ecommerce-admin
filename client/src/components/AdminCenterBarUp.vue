<template>
  <div class="center-bar-up">
    <a v-b-modal.modal-center>
      <i class="fas fa-plus-circle" id="icon">ADD PRODUCTS</i>
    </a>
    <b-modal id="modal-center" centered title="Add Products" :hide-footer="true">
      <form v-on:submit.prevent="addProduct">
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
        <button type="submit" class="btn btn-primary">ADD</button>
      </form>
    </b-modal>
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
      // this.$router.push({ path: '/admin' })
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
