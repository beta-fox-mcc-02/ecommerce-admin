<template>
  <div class="card my-3 py-3 shadow p-3 mb-5 rounded box-view">
    <div class="head text-center">
      <h3>Add Product</h3>
    </div>
    <div class="row mt-2 text-left">
      <div class="col">
        <form @submit.prevent="addProduct">
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
            <label for="price" class="col-sm-2 col-form-label">Price</label>
            <div class="col-sm-10">
              <input type="number" class="form-control" id="price" placeholder="1000" v-model="price" required>
            </div>
          </div>
          <div class="form-group row">
            <label for="stock" class="col-sm-2 col-form-label">Stock</label>
            <div class="col-sm-10">
              <input type="number" class="form-control" id="stock" placeholder="10" v-model="stock" required>
            </div>
          </div>
          <div class="form-group row">
            <label for="imageUrl" class="col-sm-2 col-form-label">Image Url</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="imageUrl" placeholder="Enter Image Url" v-model="imageUrl" required>
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

export default {
  name: 'AddProduct',
  data () {
    return {
      name: '',
      description: '',
      imageUrl: '',
      price: '',
      stock: '',
      CategoryId: 1
    }
  },
  computed: {
    categories () {
      return this.$store.state.categories
    },
    isLogin () {
      return this.$store.state.isLogin
    }
  },
  methods: {
    addProduct () {
      this.$store.dispatch('addProduct', {
        name: this.name,
        description: this.description,
        imageUrl: this.imageUrl,
        price: this.price,
        stock: this.stock,
        CategoryId: this.CategoryId
      })
        .then(({ data }) => {
          this.$store.dispatch('fetchProducts')
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.$store.dispatch('fetchCategories')
  },
  beforeRouteEnter (to, from, next) {
    if (localStorage.token) {
      next()
    } else {
      next('/')
    }
  }
}
</script>

<style>

</style>
