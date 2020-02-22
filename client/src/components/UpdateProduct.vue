<template>
  <div class="container my-3 py-3 shadow p-3 mb-5 rounded box-view">
    <div class="head text-center">
      <h4>Add Product</h4>
    </div>
    <div class="row mt-2 text-left">
      <div class="col">
        <form @submit.prevent="updateProduct">
          <div class="form-group row">
            <label for="name" class="col-sm-2 col-form-label">Name</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="name" placeholder="Enter Product Name" v-model="name" required>
            </div>
          </div>
          <div class="form-group row">
            <label for="description" class="col-sm-2 col-form-label">Description</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="description" placeholder="Enter Product Description" v-model="description">
            </div>
          </div>
          <div class="form-group row">
            <label for="imageUrl" class="col-sm-2 col-form-label">Image Url</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="imageUrl" placeholder="Enter Image Url" v-model="imageUrl" required>
            </div>
          </div>
          <div class="form-group row">
            <label for="price" class="col-sm-2 col-form-label">Price</label>
            <div class="col-sm-10">
              <input type="number" class="form-control" id="price" placeholder="1000" v-model="price" required>
            </div>
          </div>
          <div class="form-group row">
            <label for="stock" class="col-sm-2 col-form-label">Name</label>
            <div class="col-sm-10">
              <input type="number" class="form-control" id="stock" placeholder="10" v-model="stock" required>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-2">
              <label for="category">Select Category</label>
            </div>
            <div class="col-sm-10">
              <select class="form-control" id="category" v-model="CategoryId">
                <option v-for="category in categories" :key="category.id" :value="category.id">{{category.name}}</option>
              </select>
            </div>
          </div>
          <div class="button-group text-center">
            <button type="submit" class="btn btn-primary">Add Product</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../api'
export default {
  name: 'AddProduct',
  data () {
    return {
      name: '',
      description: '',
      imageUrl: '',
      price: '',
      stock: '',
      CategoryId: 1,
      categories: []
    }
  },
  methods: {
    updateProduct () {
      axios({
        method: 'POST',
        url: '/products',
        data: {
          name: this.name,
          description: this.description,
          imageUrl: this.imageUrl,
          price: Number(this.price),
          stock: Number(this.stock),
          CategoryId: this.CategoryId
        },
        headers: {
          token: localStorage.token
        }
      })
        .then(({ data }) => {
          console.log('add product susccess')
          console.log(data)
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchCategory () {
      axios({
        method: 'GET',
        url: '/categories'
      })
        .then(({ data }) => {
          this.categories = data
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.fetchCategory()
  }
}
</script>

<style>

</style>
