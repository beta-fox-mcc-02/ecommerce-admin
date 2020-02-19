<template>
  <div class="center-bar">
    <AdminCenterBarUp/>
    <div class="center-bar-down">
        <table class="product-table">
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Category</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
          <tr v-for="product in products.products" :key="product.id">
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.stock }}</td>
            <td>
              <ul v-for="category in product.Categories" :key="category.id">
                <li>{{category.name}}</li>
              </ul>
            </td>
            <td>
              <img class="image" :src="product.image_url">
            </td>
            <td>
              <a href=""><i class="fas fa-edit"></i></a> |
              <a href=""><i class="fas fa-trash-alt"></i></a>
            </td>
          </tr>
        </table>
    </div>
  </div>
</template>

<script>
import AdminCenterBarUp from '../components/AdminCenterBarUp'

export default {
  name: 'AdminCenterBar',
  components: {
    AdminCenterBarUp
  },
  methods: {
    fetchProduct () {
      this.$store.dispatch('fetchProduct')
    }
  },
  created () {
    this.fetchProduct()
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>

<style>
.center-bar {
  border: 1px solid black;
  padding: 50px;
  width: 150vh;
  display: flex;
  flex-direction: column;
}
.center-bar-up {
  border: 1px solid red;
  padding: 10px
}
.center-bar-down {
  margin-top: 10px;
  border: 1px solid blue
}
.product-table {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

.product-table td, .product-table th {
  border: 1px solid #ddd;
  padding: 8px;
}

.product-table tr:hover {background-color: #ddd;}

.product-table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #4CAF50;
  color: white;
}
.image {
  width: 100px;
  height: 100px;
}
</style>
