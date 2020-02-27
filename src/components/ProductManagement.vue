<template>
  <section id="main-product">
    <div id="header-container">
      <div id="form-product-container">
        <button id="add-button" v-on:click="showAddForm"><i class="fas fa-plus"></i></button>
        <AddProductForm v-if="isShowed" v-on:closeForm="closeForm" />
      </div>
    </div>
    <div id="table-product-container">
      <div class="product-header">
        <i class="fas fa-list"></i> Order list
      </div>
      <div class="product-table">
        <table>
          <thead>
            <tr id="rowhead">
              <th class="id-cols">ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th class="action-cols">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in getProducts" v-bind:key="product.id">
              <td class="id-cols">{{ product.id }}</td>
              <td>{{ product.name }}</td>
              <td>Rp. {{ product.price.toLocaleString() }}</td>
              <td>{{ product.stock.toLocaleString() }} Units</td>
              <td class="action-cols">
                <button id="trash-btn" v-on:click="deleteEntry(product)"><i class="fas fa-trash-alt"></i></button>
                <button id="edit-btn" v-on:click="updateEntry(product)"><i class="fas fa-edit"></i></button>
              </td>
            </tr>
            <small v-if="delNotif">{{deletedProduct}}</small>
            <EditProductForm v-if="editMode" v-on:closeForm="closeForm" />
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
import AddProductForm from './AddProduct.vue'
import EditProductForm from './EditProduct.vue'

export default {
  data () {
    return {
      isShowed: false,
      editMode: false,
      delNotif: false,
      deletedProduct: ''
    }
  },
  components: { AddProductForm, EditProductForm },
  computed: {
    getProducts () {
      return this.$store.state.products
    }
  },
  methods: {
    showAddForm () {
      this.closeForm()
      this.$store.dispatch('getCategories')
        .then((result) => {
          this.$store.commit('setCategories', { data: result.data.data })
          this.isShowed = true
        })
        .catch(() => { this.isShowed = true })
    },
    fetchAll () {
      this.$store.dispatch('fetchProducts')
    },
    deleteEntry ({ name, id }) {
      this.$store.dispatch('deleteAsync', id)
        .then((result) => {
          this.delNotif = true
          this.deletedProduct = `${name} will be deleted`
          setTimeout(() => {
            this.delNotif = false
            this.deletedProduct = ''
            this.fetchAll()
          }, 2000)
        })
        .catch(() => {
          this.delNotif = true
          this.deletedProduct = 'failed to delete'
          setTimeout(() => {
            this.delNotif = false
            this.deletedProduct = ''
            this.fetchAll()
          }, 2000)
        })
    },
    updateEntry (product) {
      this.closeForm()
      this.$store.dispatch('getCategories')
        .then((result) => {
          this.editMode = true
          this.$store.commit('editAbleData', { product, categories: result.data.data })
        })
        .catch(() => { this.editMode = false })
    },
    closeForm (params) {
      this.isShowed = params
      this.editMode = params
      this.$store.commit('unsetAll')
      this.fetchAll()
    }
  },
  created () {
    this.fetchAll()
  }
}
</script>

<style scoped>

section#main-product {
    margin-left: 23vw;
    margin-top: 1.5rem;
    max-height: 35rem;
    width: 74vw;
}

div#header-container {
  display: flex;
}

div#table-product-container {
  border: 0.1rem solid #d4d4d4;
  animation: fade-in 1s;
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

.id-cols{
    width: 5%;
}

td {
  text-align: right;
}

td, th {
    width: 23%;
}

.action-cols{
  display: flex;
  justify-content: center;
}

tr {
  display: flex;
  padding-bottom: 0.2rem;
}

#add-button {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    margin: 0.3rem 0;
    cursor: pointer;
    background-color: #189a18;
    color: white;
    border-style: none;
    box-shadow: 0 0 0.3rem #afafaf;
}

#add-button{
  margin-right: 0.5rem
}

button#add-button:hover, button#filter-button:hover {
  background-color: #117111;
}

button#trash-btn, button#edit-btn {
  margin: 0 1rem;
  border-style: none;
  background-color: transparent;
  cursor: pointer;
}

button#trash-btn:hover, button#edit-btn:hover {
  animation: shaking .5s infinite;
}

button#trash-btn:hover{
  color: red
}

button#edit-btn:hover{
  color: blue
}

#filter-button{
  margin-left: 0.5rem
}

i.fas.fa-plus, i.fas.fa-filter {
  font-size: 15pt;
}

small {
    position: absolute;
    top: 4rem;
    right: 2rem;
    background-color: #257966;
    color: white;
    padding: 1rem;
    border-radius: 1rem;
}

@keyframes fade-in {
  0%{ opacity: 0; transform: scale(0) }
  100%{ opacity: 1; transform: scale(1) }
}

@keyframes shaking {
  0%{ transform: rotate(-3deg) scale(1) }
  50%{ transform: rotate(0deg) scale(1.3) }
  100%{ transform: rotate(3deg) scale(1) }
}

</style>
