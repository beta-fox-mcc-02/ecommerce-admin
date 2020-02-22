<template>
  <div>
    <div class="mt-3 d-flex justify-content-center edit-form-container">
      <div class="edit-form-area">
        <h2 align="center">Edit Product</h2>
        <form @submit.prevent="editProduct">
          <div class="form-group">
            <label for="name">Name:</label>
            <input v-model="name" id="name" type="text" class="form-control" placeholder="product name" required>
          </div>
          <div class="form-group">
            <label for="image_url">Image:</label>
            <input v-model="image_url" id="image_url" type="text" class="form-control" placeholder="image URL" required>
          </div>
          <div class="form-group">
            <label for="price">Price:</label>
            <input v-model="price" id="price" type="number" class="form-control" placeholder="price" required>
          </div>
          <div class="form-group">
            <label for="stock">Stock:</label>
            <input v-model="stock" id="stock" type="number" class="form-control" placeholder="stock" required>
          </div>
          <div class="d-flex align-items-center">
            <button type="submit" class="btn btn-dark mx-2">Submit</button>
            <router-link to="/dashboard">
              <button class="btn btn-secondary mx-2">Cancel</button>
            </router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../config/axios'

export default {
  name: 'EditProduct',
  data () {
    return {
      id: null,
      name: '',
      image_url: '',
      price: null,
      stock: null
    }
  },
  computed: {
    getIdToEdit () {
      return this.$store.state.idToEdit
    }
  },
  methods: {
    editProduct () {
      axios({
        method: 'PUT',
        url: `/products/${this.id}`,
        data: {
          name: this.name,
          image_url: this.image_url,
          price: this.price,
          stock: this.stock
        },
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          console.log(data)
          this.$router.push({ name: 'Dashboard' })
          return this.$store.dispatch('fetchAllProducts')
        })
        .then(({ data }) => {
          this.$store.commit('SET_PRODUCTS', data.data)
          if (data.data.length) {
            this.product = true
          }
        })
        .catch(({ response }) => {
          console.log(response.data)
        })
    }
  },
  created () {
    this.id = this.$store.state.productToEdit.id
    this.name = this.$store.state.productToEdit.name
    this.image_url = this.$store.state.productToEdit.image_url
    this.price = this.$store.state.productToEdit.price
    this.stock = this.$store.state.productToEdit.stock
  }
}
</script>

<style>
.edit-form-container {
  background-color: #c2c2c2;
  width: max-content;
  padding: 10px;
  border-radius: 10px;
  position: absolute;
  top: 10%;
  left: 61%;
}

.edit-form-area form {
  width: 400px;
}
</style>
