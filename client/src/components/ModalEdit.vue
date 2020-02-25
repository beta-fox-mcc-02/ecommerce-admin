<template>
<div class="modalx w-100 py-5">
  <div class="card">
    <div class="head text-center pt-4">
      <h3>Update Product</h3>
    </div>
    <div class="row mt-2 text-left px-5 pt-3 pb-5">
      <div class="col">
        <form @submit.prevent="updateProduct(id)">
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
            <button type="submit" class="btn btn-primary">Update Product</button>
            <button type="button" class="btn btn-danger float-right" @click="back">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ModalEdit',
  data () {
    return {
      id: 0,
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
    }
  },
  methods: {
    back () {
      this.$router.push('/')
    },
    updateProduct (id) {
      this.$store.dispatch('updateProduct', {
        id,
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
        .catch(_ => {})
    }
  },
  created () {
    this.$store.dispatch('fetchCategories')
    this.$store.dispatch('fetchOneProduct', this.$route.params.id)
      .then(({ data }) => {
        this.id = data.id
        this.name = data.name
        this.description = data.description
        this.imageUrl = data.imageUrl
        this.price = data.price
        this.stock = data.stock
        this.CategoryId = data.CategoryId
      })
      .catch(_ => {})
  }
}
</script>

<style scoped>
.modalx {
  position: absolute;
  background-color: #181717dc;
  height: 100vh;
  top: 0;
  margin-left: -7.8%;
  padding-left: 10%;
  padding-right: 5%;
}
.card {
  background: rgba(51, 49, 49, 0.911);
}
</style>
