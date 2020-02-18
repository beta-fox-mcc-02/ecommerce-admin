<template>
  <section id="main-product">
    <div id="header-container">
      <div>
        <button id="add-button"><i class="fas fa-filter"></i></button>
      </div>
      <div id="form-product-container">
        <button id="add-button" v-on:click="showAddForm"><i class="fas fa-plus"></i></button>
        <AddProductForm v-if="isShowed" v-bind:categories="categories" v-on:closeForm="closeForm" />
      </div>
    </div>
    <div id="table-product-container">
      <div class="product-header">
        Order list
      </div>
      <div class="product-table">
        <table>
          <thead>
            <tr id="rowhead">
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Purchase Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>id</td>
              <td>Name</td>
              <td>Price</td>
              <td>Stock</td>
              <td>Purchase Total</td>
              <td>Action</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
import AddProductForm from './2TierComponents/addProductForm.vue'
import axios from 'axios'

export default {
  data () {
    return {
      categories: [],
      isShowed: false
    }
  },
  components: { AddProductForm },
  methods: {
    showAddForm () {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/category/findall'
      })
        .then((result) => {
          this.categories = result.data.data
          this.isShowed = true
        })
        .catch((err) => console.log(err))
    },
    closeForm (params) { this.isShowed = params }
  }
}
</script>

<style scoped>

section#main-product {
  margin-left: 12rem;
  margin-top: 1.5rem;
  max-height: 35rem;
  width: 50rem;
}

div#header-container {
  display: flex;
}

div#table-product-container {
  border: 0.1rem solid #d4d4d4;
}

div#form-product-container {
  position: relative;
}

.product-header, .product-table {
  padding: 1rem;
}

.product-header{
  background-color: #f7f7f7;
}

table {
  width: 100%;
}

tr#rowhead {
    border-bottom: 0.05rem solid #d4d4d4;
    margin-bottom: 0.5rem;
}

tr {
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.2rem;
}

#add-button, #filter-button {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  margin: 0.3rem 0;
  cursor: pointer;
  background-color: #189a18;
  color: white;
  border: 0.5rem ridge #008000;
}

#add-button{
  margin-right: 0.5rem
}

#filter-button{
  margin-left: 0.5rem
}

i.fas.fa-plus, i.fas.fa-filter {
  font-size: 15pt;
}

</style>
