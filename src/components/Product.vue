<template>
    <div id="admin-view">
      <div class="left-view">
        <div class="title-sorting-add">
          <div class="add-product">
            <button type="button" @click="showFormAddProduct">Add Product</button>
          </div>
        </div>
        <div class="table-product">
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in fetch" :key="index">
                <td>{{index + 1}}</td>
                <td><img class="product-image" :src="item.image_url"></td>
                <td>{{item.name}}</td>
                <td>{{item.price}}</td>
                <td>{{item.stock}}</td>
                <td><a @click="viewDetail(item.id)" style="cursor:pointer;">Detail</a> | <a @click="showFormEdit(item.id)" style="cursor:pointer;">Edit</a> | <a @click="deleteProduct(item.id)" style="cursor:pointer;">Delete</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="right-view">
        <router-view></router-view>
      </div>
      <b-modal id="add-product" hide-footer>
      <div class="d-block text-center">
          <center>
              <form style="" v-on:submit.prevent="addProduct">
                  <h2 id="title-add-product" style="color:black">Add Product</h2>
                  <br>
                  <div class="form-group">
                      <label for="name">Name</label>
                      <input type="text" id="name" class="form-control" v-model="product.name">
                  </div>
                  <div class="form-group">
                      <label for="image_url">Image</label>
                      <input type="text" id="image" class="form-control" v-model="product.image_url">
                  </div>
                  <div class="form-group">
                      <label for="price">Price</label>
                      <input type="number" id="price" class="form-control" v-model="product.price">
                  </div>
                  <div class="form-group">
                      <label for="stock">Stock</label>
                      <input type="number" id="stock" class="form-control" v-model="product.stock">
                  </div>
                  <b-button id="submit-login-admin" class="mt-3 btn btn-primary" block type="submit" style="background-color:blue">Submit</b-button>
              </form>
          </center>
      </div>
    </b-modal>
    </div>
</template>

<script>
import axios from 'axios'
// import Edit from './Edit.vue'

export default {
  name: 'Product',
  data () {
    return {
      products: [],
      product: {
        name: '',
        image_url: '',
        price: '',
        stock: ''
      }
    }
  },
  components: {
    // Edit
  },
  computed: {
    fetch () {
      return this.$store.state.products
    }
  },
  methods: {
    showFormAddProduct () {
      this.$bvModal.show('add-product')
    },
    addProduct () {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/products',
        data: {
          name: this.product.name,
          image_url: this.product.image_url,
          price: this.product.price,
          stock: this.product.stock
        },
        headers: {
          token: localStorage.token
        }
      })
        .then(({ data }) => {
          this.$bvModal.hide('add-product')
          this.$store.dispatch('fetchProducts')
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    viewDetail (idProduct) {
      this.$store.dispatch('findProductById', idProduct)
      this.$router.push(`/dashboard/detail/${idProduct}`)
    },
    showFormEdit (idProduct) {
      this.$store.dispatch('findProductById', idProduct)
      this.$router.push(`/dashboard/edit/${idProduct}`)
    },
    deleteProduct (idProduct) {
      this.$store.dispatch('deleteProduct', idProduct)
    }
  },
  created () {
    if (localStorage.token) {
      this.$store.dispatch('fetchProducts')
      this.products = this.$store.state.products
    }
  }
}
</script>

<style>
  #admin-view {
  display: flex;
  flex-direction: row;
  justify-items: flex-start;
  flex-wrap: wrap;
}

.left-view {
  width: 60%;
  display: flex;
  flex-direction: column;
}

.title-sorting-add {
  width: 100%;
  background-color: aqua;
  padding: 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.title-sorting-add .add-product {
  margin-right: 30px;
}

.table-product {
  width: 100%;
  height: 85vh;
  background-color: azure;
  padding-top: 10px;
  padding-left: 30px;
}

.table-product table {
  width: 100%;
}

.product-image {
  width: 50px;
  height: 50px;;
}

.right-view {
  width: 40%;
  display: flex;
  flex-direction: column;
}
</style>
